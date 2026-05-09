import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	StarIcon,
	ThumbsDownIcon,
	ThumbsUpIcon
} from './icons'

export interface Listing {
	id: number
	name: string
	hotel: string
	stars: number
	location: string
	price: number
	hasHighRating?: boolean
}

interface ListingCardProps {
	listing: Listing
}

export const ListingCard = ({ listing }: ListingCardProps) => {
	const { t } = useTranslation('home')
	const [currentDot, setCurrentDot] = useState(0)
	const dots = [0, 1, 2]

	const handlePrev = (e: React.MouseEvent) => {
		e.stopPropagation()
		setCurrentDot(prev => (prev === 0 ? dots.length - 1 : prev - 1))
	}

	const handleNext = (e: React.MouseEvent) => {
		e.stopPropagation()
		setCurrentDot(prev => (prev === dots.length - 1 ? 0 : prev + 1))
	}

	return (
		<div
			className="flex flex-col cursor-pointer"
			style={{ width: '290px', gap: '16px' }}
		>
			{/* Image area */}
			<div
				className="relative shrink-0"
				style={{
					width: '290px',
					height: '270px',
					borderRadius: '20px',
					backgroundColor: '#D9D9D9',
					overflow: 'hidden'
				}}
			>
				{/* High rating badge */}
				{listing.hasHighRating && (
					<div
						className="absolute flex items-center justify-center"
						style={{
							right: '8px',
							top: '8px',
							width: '96px',
							height: '31px',
							backgroundColor: 'rgba(0,171,27,0.4)',
							borderRadius: '20px'
						}}
					>
						<span className="text-white text-base font-medium">
							{t('listing.highRating')}
						</span>
					</div>
				)}

				{/* Prev arrow */}
				<button
					onClick={handlePrev}
					className="absolute flex items-center justify-center hover:bg-gray-300 transition-colors"
					style={{
						left: '12px',
						top: '117px',
						width: '36px',
						height: '36px',
						borderRadius: '50%',
						backgroundColor: '#D9D9D9',
						zIndex: 1
					}}
					aria-label="Previous image"
				>
					<ChevronLeftIcon />
				</button>

				{/* Next arrow */}
				<button
					onClick={handleNext}
					className="absolute flex items-center justify-center hover:bg-gray-300 transition-colors"
					style={{
						left: '242px',
						top: '117px',
						width: '36px',
						height: '36px',
						borderRadius: '50%',
						backgroundColor: '#D9D9D9',
						zIndex: 1
					}}
					aria-label="Next image"
				>
					<ChevronRightIcon />
				</button>

				{/* Dots pagination */}
				<div
					className="absolute flex items-center justify-center gap-1.5"
					style={{ bottom: '14px', left: 0, right: 0 }}
				>
					{dots.map(dot => (
						<button
							key={dot}
							onClick={e => {
								e.stopPropagation()
								setCurrentDot(dot)
							}}
							className="rounded-full transition-all"
							style={{
								width: '8px',
								height: '8px',
								backgroundColor: currentDot === dot ? '#1A1A1A' : '#535353',
								opacity: currentDot === dot ? 1 : 0.5
							}}
							aria-label={`Image ${dot + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Card info */}
			<div
				className="flex flex-col"
				style={{ gap: '8px' }}
			>
				{/* Room name */}
				<p
					className="text-base"
					style={{ fontWeight: 500, color: '#1A1A1A' }}
				>
					{listing.name}
				</p>

				{/* Hotel + stars */}
				<div className="flex items-center gap-2">
					<span
						className="text-base"
						style={{ fontWeight: 500, color: '#1A1A1A' }}
					>
						{listing.hotel}
					</span>
					<div className="flex items-center gap-0.5">
						{Array.from({ length: listing.stars }).map((_, i) => (
							<StarIcon
								key={i}
								filled
							/>
						))}
					</div>
				</div>

				{/* Location */}
				<p
					className="text-base"
					style={{ color: '#7E7E7E' }}
				>
					{listing.location}
				</p>

				{/* Divider */}
				<div style={{ height: '1px', backgroundColor: '#DCDCDC' }} />

				{/* Bottom row: thumbs + price */}
				<div className="flex items-center justify-between">
					<div
						className="flex items-center gap-5"
						style={{ color: '#474747' }}
					>
						<button
							className="cursor-pointer hover:opacity-70 transition-opacity"
							aria-label="Like"
						>
							<ThumbsUpIcon />
						</button>
						<button
							className="cursor-pointer hover:opacity-70 transition-opacity"
							aria-label="Dislike"
						>
							<ThumbsDownIcon />
						</button>
					</div>
					<p
						className="text-base"
						style={{ fontWeight: 500, color: '#1A1A1A' }}
					>
						${listing.price}
					</p>
				</div>
			</div>
		</div>
	)
}
