import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import filterData from '../shared/temp/filterData.json'
import { XIcon } from './mocked/icons'
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
			<h3 className="mb-4 text-2xl font-medium text-foreground">{title}</h3>
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
			<div className="h-0.5 bg-border mb-6" />
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
					<button
						onClick={onClose}
						className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity text-foreground"
						aria-label={t('modal.close')}
					>
						<XIcon size={28} />
					</button>
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
						<button
							onClick={onClose}
							className="flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity w-[11.5rem] h-16 bg-primary rounded-2xl text-primary-foreground text-base font-semibold"
						>
							{t('modal.apply')}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
