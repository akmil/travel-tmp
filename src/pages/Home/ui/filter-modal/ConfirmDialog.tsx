import { useTranslation } from 'react-i18next'

import { Button } from '@components/shared/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@components/shared/dialog'

interface ConfirmDialogProps {
	open: boolean
	onConfirm: () => void
	onCancel: () => void
}

export const ConfirmDialog = ({
	open,
	onConfirm,
	onCancel
}: ConfirmDialogProps) => {
	const { t } = useTranslation('filter')

	return (
		<Dialog
			open={open}
			onOpenChange={opened => !opened && onCancel()}
		>
			<DialogContent className="sm:max-w-sm rounded-2xl">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						{t('confirmDialog.title')}
					</DialogTitle>
					<DialogDescription>
						{t('confirmDialog.description')}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="gap-2 sm:gap-0">
					<Button
						text={t('confirmDialog.cancel')}
						variant="outlined"
						onClick={onCancel}
					/>
					<Button
						text={t('confirmDialog.confirm')}
						onClick={onConfirm}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
