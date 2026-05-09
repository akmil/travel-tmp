import { useState } from 'react'

import { useFilterStore } from '@/shared/store/filterStore'
import { Footer } from '@components/mocked/Footer'
import { HeroSection } from '@components/mocked/HeroSection'
import { ListingGrid } from '@components/mocked/ListingGrid'
import { Navbar } from '@components/mocked/Navbar'
import { ResultsBar } from '@components/mocked/ResultsBar'
import { ShowMoreButton } from '@components/mocked/ShowMoreButton'

import { FilterModal } from './filter-modal/FilterModal'

export const App = () => {
	const [filterOpen, setFilterOpen] = useState(false)
	const { filters } = useFilterStore()

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<HeroSection onFilterClick={() => setFilterOpen(true)} />

			<section aria-label="Selected filters (debug)">
				<pre className="mx-20 my-4 p-4 bg-gray-100 rounded text-sm overflow-auto">
					{JSON.stringify(filters, null, 2)}
				</pre>
			</section>

			<main className="px-20 pt-10 pb-12 max-w-360 mx-auto overflow-hidden">
				<ResultsBar />
				<ListingGrid />
				<ShowMoreButton />
			</main>

			<Footer />

			<FilterModal
				onClose={() => setFilterOpen(false)}
				open={filterOpen}
			/>
		</div>
	)
}
