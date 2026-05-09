import {
	BuildingIcon,
	ChatIcon,
	CoffeeIcon,
	HouseIcon,
	StarLargeIcon,
	TrendingIcon
} from './icons'

const chips = [
	{ label: '5 stars', icon: <StarLargeIcon /> },
	{ label: 'Cottages', icon: <HouseIcon /> },
	{ label: 'Popular', icon: <TrendingIcon /> },
	{ label: 'Breakfast', icon: <CoffeeIcon /> },
	{ label: 'Hotel', icon: <BuildingIcon /> },
	{ label: 'Reviews 9', icon: <ChatIcon /> }
]

export const CategoryChips = () => {
	return (
		<div className="flex items-center gap-6">
			{chips.map(chip => (
				<button
					key={chip.label}
					className="flex flex-col items-center justify-center gap-1 bg-white cursor-pointer hover:shadow-md transition-shadow"
					style={{
						width: '120px',
						height: '96px',
						borderRadius: '20px'
					}}
				>
					{chip.icon}
					<span
						className="text-base font-medium"
						style={{ color: '#31393C' }}
					>
						{chip.label}
					</span>
				</button>
			))}
		</div>
	)
}
