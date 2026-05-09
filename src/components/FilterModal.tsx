import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import filterData from '../shared/temp/filterData.json'
import { FilterSection } from './filter-modal/Filter.Section'
import { XIcon } from './mocked/icons'
import { Button } from './shared/button'

interface FilterModalProps {
	onClose: () => void
}

export const FilterModal = ({ onClose }: FilterModalProps) => {
	const countOffers = 42
	const { t } = useTranslation('filter')
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

	const handleToggle = (key: string) => {
		setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
	}

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className="fixed inset-0 flex justify-center z-50 bg-black/30 backdrop-blur-md"
			onClick={handleOverlayClick}
		>
			<div
				className="relative bg-white overflow-y-auto w-[80rem] max-h-[calc(100vh-5rem)] mt-20 rounded-2xl"
				onClick={e => e.stopPropagation()}
			>
				{/* Header */}
				<div className="sticky top-0 bg-white z-10 flex items-center justify-between px-10 pt-8 pb-6">
					<h2 className="text-4xl font-medium text-foreground">
						{t('modal.title')}
					</h2>

					<Button
						text={t('modal.close')}
						onClick={onClose}
						aria-label={t('modal.close')}
						variant="ghost"
					>
						<XIcon size={28} />
					</Button>
				</div>

				{/* Top divider */}
				<div className="h-0.5 bg-border mx-10" />

				{/* Filter sections driven by filterData.json */}
				<div className="px-10 pt-8 pb-10">
					{filterData.filterItems.map(item => {
						const sectionTitle = t(`items.${item.id}.name`, {
							defaultValue: item.name
						})
						const options = item.options.map(opt => ({
							id: `${item.id}.${opt.id}`,
							label: t(`items.${item.id}.options.${opt.id}`, {
								defaultValue: opt.name
							})
						}))

						return (
							<FilterSection
								key={item.id}
								title={sectionTitle}
								options={options}
								checkedItems={checkedItems}
								onToggle={handleToggle}
							/>
						)
					})}

					{/* Apply button */}
					<div className="flex justify-center mt-4">
						<Button
							text={`${t('modal.apply')} (${t('modal.offerCount', { countOffers })})`}
							onClick={onClose}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
