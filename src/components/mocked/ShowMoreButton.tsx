import { useTranslation } from 'react-i18next'

export const ShowMoreButton = () => {
	const { t } = useTranslation('home')
	return (
		<div className="flex justify-center mt-12">
			<button
				className="flex items-center justify-center bg-white cursor-pointer hover:bg-orange-50 transition-colors"
				style={{
					width: '246px',
					height: '60px',
					border: '1px solid #FF5F00',
					borderRadius: '20px',
					color: '#FF5F00',
					fontSize: '16px',
					fontWeight: 600
				}}
			>
				{t('showMore')}
			</button>
		</div>
	)
}
