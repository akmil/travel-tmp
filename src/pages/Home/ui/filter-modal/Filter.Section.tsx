import { CheckboxItem } from '@components/shared/checkbox'

interface FilterSectionProps {
	title: string
	options: Array<{ id: string; label: string }>
	checkedItems: Record<string, boolean>
	onToggle: (key: string) => void
}

const COLUMNS = 3

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

export { FilterSection }
