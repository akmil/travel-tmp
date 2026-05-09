import { useTranslation } from 'react-i18next'

import filterData from '@/shared/temp/filterData.json'
import { XIcon } from '@components/mocked/icons'
import { Button } from '@components/shared/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@components/shared/dialog'

import { ConfirmDialog } from './ConfirmDialog'
import { FilterSection } from './Filter.Section'
import { useFilterModal } from './useFilterModal'

interface FilterModalProps {
	onClose: () => void
	open: boolean
}

export const FilterModal = ({ onClose, open }: FilterModalProps) => {
	const { t } = useTranslation('filter')
	const {
		confirmOpen,
		checkedItems,
		countOffers,
		handleToggle,
		handleApply,
		handleConfirm,
		handleCancel
	} = useFilterModal({ onClose, open })

	return (
		<Dialog
			open={open}
			onOpenChange={opened => !opened && onClose()}
		>
			<DialogContent className="sm:max-w-md rounded-2xl">
				<DialogHeader>
					<div className="flex items-center gap-3 mb-1">
						<DialogTitle className="text-base font-semibold">
							{t('modal.title')}
						</DialogTitle>

						<Button
							text={t('modal.close')}
							onClick={onClose}
							aria-label={t('modal.close')}
							variant="ghost"
							className="absolute right-0"
						>
							<XIcon size={28} />
						</Button>
					</div>
				</DialogHeader>

				{/* Top divider */}
				<div className="h-0.5 bg-border" />

				{/* Filter sections driven by filterData.json */}
				<div className="pt-8">
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
				</div>

				<DialogFooter className="px-10">
					{/* Apply button */}
					<div className="flex w-full justify-center mt-4">
						<Button
							text={`${t('modal.apply')} (${t('modal.offerCount', { countOffers })})`}
							onClick={handleApply}
							disabled={!Object.values(checkedItems).some(Boolean)}
						/>
					</div>
				</DialogFooter>

				<ConfirmDialog
					open={confirmOpen}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			</DialogContent>
		</Dialog>
	)
}
