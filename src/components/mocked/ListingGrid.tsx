import { type Listing, ListingCard } from './ListingCard'

const mockListings: Listing[] = Array.from({ length: 24 }, (_, i) => ({
	id: i + 1,
	name: 'Standard Double Room',
	hotel: 'Palm Hotel',
	stars: 4,
	location: 'Dubai, UAE',
	price: 130 + (i % 5) * 20,
	hasHighRating: i % 3 === 0
}))

export const ListingGrid = () => {
	return (
		<div className="flex flex-col gap-10">
			{Array.from({ length: 6 }).map((_, rowIdx) => (
				<div
					key={rowIdx}
					className="flex gap-10"
				>
					{mockListings.slice(rowIdx * 4, rowIdx * 4 + 4).map(listing => (
						<ListingCard
							key={listing.id}
							listing={listing}
						/>
					))}
				</div>
			))}
		</div>
	)
}
