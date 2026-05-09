import { useEffect, useState } from 'react'

import { FilterItem } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { useFilterStore } from '@/shared/store/filterStore'
import filterData from '@/shared/temp/filterData.json'

const searchRequestFilterToCheckedItems = (
	filters: SearchRequestFilter
): Record<string, boolean> => {
	const result: Record<string, boolean> = {}
	for (const filter of filters) {
		for (const optionId of filter.optionsIds) {
			result[`${filter.id}.${optionId}`] = true
		}
	}
	return result
}

const checkedItemsToSearchRequestFilter = (
	checkedItems: Record<string, boolean>,
	items: FilterItem[]
): SearchRequestFilter => {
	const result: SearchRequestFilter = []
	for (const item of items) {
		const selectedOptionIds = item.options
			.map(opt => opt.id)
			.filter(optId => Boolean(checkedItems[`${item.id}.${optId}`]))
		if (selectedOptionIds.length > 0) {
			result.push({
				id: item.id,
				type: item.type,
				optionsIds: selectedOptionIds
			})
		}
	}
	return result
}

export const useFilterModal = ({
	onClose,
	open
}: {
	onClose: () => void
	open: boolean
}) => {
	const { filters, setFilters } = useFilterStore()
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
	const [confirmOpen, setConfirmOpen] = useState(false)
	const [pendingFilters, setPendingFilters] = useState<SearchRequestFilter>([])
	const countOffers = Object.values(checkedItems).filter(Boolean).length

	const handleToggle = (key: string) => {
		setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
	}

	const handleApply = () => {
		const next = checkedItemsToSearchRequestFilter(
			checkedItems,
			filterData.filterItems as FilterItem[]
		)
		setPendingFilters(next)
		setConfirmOpen(true)
	}

	const handleConfirm = () => {
		setFilters(pendingFilters)
		setConfirmOpen(false)
		onClose()
	}

	const handleCancel = () => {
		setConfirmOpen(false)
	}

	useEffect(() => {
		if (open) {
			setCheckedItems(searchRequestFilterToCheckedItems(filters))
		}
	}, [open, filters])

	return {
		checkedItems,
		countOffers,
		confirmOpen,
		handleToggle,
		handleApply,
		handleConfirm,
		handleCancel
	}
}
