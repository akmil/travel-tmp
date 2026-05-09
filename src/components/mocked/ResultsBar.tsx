import { useTranslation } from 'react-i18next'

import { MapIcon, XIcon } from './icons'

export const ResultsBar = () => {
	const { t } = useTranslation('home')
	return (
		<div className="flex items-center gap-4 mb-8">
			{/* Active filter pill */}
			<div
				className="flex items-center gap-3 bg-white px-4"
				style={{
					width: '370px',
					height: '40px',
					border: '1px solid #1A1A1A',
					borderRadius: '16px'
				}}
			>
				<span
					className="flex-1 text-sm font-medium"
					style={{ color: '#1A1A1A' }}
				>
					{t('results.activeFilter')}
				</span>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Clear filter"
				>
					<XIcon size={16} />
				</button>
			</div>

			{/* Results count */}
			<p
				className="text-base"
				style={{ color: '#1A1A1A' }}
			>
				{t('results.count', { count: 1276 })}
			</p>

			{/* Spacer */}
			<div className="flex-1" />

			{/* Show on map */}
			<button
				className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
				style={{ color: '#202020' }}
			>
				<MapIcon />
				<span
					className="text-base font-medium"
					style={{ textDecoration: 'underline' }}
				>
					{t('results.showOnMap')}
				</span>
			</button>
		</div>
	)
}
