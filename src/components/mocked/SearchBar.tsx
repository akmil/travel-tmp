import { useTranslation } from 'react-i18next'

import { CalendarIcon, ChevronDownIcon, MapPinIcon, UsersIcon } from './icons'

export const SearchBar = () => {
	const { t } = useTranslation('home')
	return (
		<div className="flex items-center gap-5">
			{/* City / Address input */}
			<div
				className="flex items-center gap-3 bg-white px-4 cursor-pointer"
				style={{
					width: '570px',
					height: '56px',
					border: '1px solid #B4B4B4',
					borderRadius: '16px'
				}}
			>
				<span style={{ color: '#B4B4B4' }}>
					<MapPinIcon />
				</span>
				<span
					className="flex-1 text-base"
					style={{ color: '#B4B4B4' }}
				>
					{t('search.cityPlaceholder')}
				</span>
				<span style={{ color: '#B4B4B4' }}>
					<ChevronDownIcon />
				</span>
			</div>

			{/* Add dates */}
			<button
				className="flex items-center gap-3 bg-white px-5 cursor-pointer hover:bg-gray-50 transition-colors"
				style={{
					width: '336px',
					height: '60px',
					border: '1.5px solid #1A1A1A',
					borderRadius: '20px'
				}}
			>
				<span style={{ color: '#474747' }}>
					<CalendarIcon />
				</span>
				<span
					className="text-base font-medium"
					style={{ color: '#474747' }}
				>
					{t('search.addDates')}
				</span>
			</button>

			{/* Add guests */}
			<div
				className="flex items-center gap-3 bg-white px-4 cursor-pointer"
				style={{
					width: '334px',
					height: '56px',
					border: '1px solid #B4B4B4',
					borderRadius: '16px'
				}}
			>
				<span style={{ color: '#B4B4B4' }}>
					<UsersIcon />
				</span>
				<span
					className="flex-1 text-base"
					style={{ color: '#B4B4B4' }}
				>
					{t('search.addGuests')}
				</span>
				<span style={{ color: '#B4B4B4' }}>
					<ChevronDownIcon />
				</span>
			</div>
		</div>
	)
}
