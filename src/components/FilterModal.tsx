import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import filterData from '../shared/temp/filterData.json'
import { XIcon } from './mocked/icons'
import { Button } from './shared/button'
import { CheckboxItem } from './shared/checkbox'

const COLUMNS = 3

interface FilterSectionProps {
	title: string
	options: Array<{ id: string; label: string }>
	checkedItems: Record<string, boolean>
	onToggle: (key: string) => void
}

const FilterSection = ({
	title,
	options,
	checkedItems,
	onToggle
}: FilterSectionProps) => {
	const columnSize = Math.ceil(options.length / COLUMNS)
	const columns = Array.from({ length: COLUMNS }, (_, i) =>
		options.slice(i * columnSize, (i + 1) * columnSize)
	).filter(col => col.length > 0)

	const gridColsClass =
		(['grid-cols-1', 'grid-cols-2', 'grid-cols-3'] as const)[
			columns.length - 1
		] ?? 'grid-cols-3'

	return (
		<div>
			<h3 className="mb-4 text-2xl font-medium text-[#31393C]">{title}</h3>
			<div className={`grid gap-4 mb-6 ${gridColsClass}`}>
				{columns.map((col, colIdx) => (
					<div
						key={colIdx}
						className="flex flex-col gap-4"
					>
						{col.map(option => (
							<CheckboxItem
								key={option.id}
								label={option.label}
								checked={Boolean(checkedItems[option.id])}
								onChange={() => onToggle(option.id)}
							/>
						))}
					</div>
				))}
			</div>
			<div className="h-[2px] bg-[#B4B4B4] mb-6" />
		</div>
	)
}

interface FilterModalProps {
	onClose: () => void
}

export const FilterModal = ({ onClose }: FilterModalProps) => {
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
			className="fixed inset-0 flex justify-center z-50 bg-[rgba(27,27,27,0.3)] backdrop-blur-[12.5px]"
			onClick={handleOverlayClick}
		>
			<div
				className="relative bg-white overflow-y-auto w-[1280px] max-h-[calc(100vh-80px)] mt-20 rounded-2xl"
				onClick={e => e.stopPropagation()}
			>
				{/* Header */}
				<div className="sticky top-0 bg-white z-10 flex items-center justify-between px-10 pt-8 pb-6">
					<h2 className="text-[40px] font-medium text-[#31393C]">
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
				<div className="h-[2px] bg-[#B4B4B4] mx-10" />

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
							text={t('modal.apply')}
							onClick={onClose}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
