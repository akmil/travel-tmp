import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Footer } from '@components/mocked/Footer'
import { HeroSection } from '@components/mocked/HeroSection'
import { ListingGrid } from '@components/mocked/ListingGrid'
import { Navbar } from '@components/mocked/Navbar'
import { ResultsBar } from '@components/mocked/ResultsBar'
import { ShowMoreButton } from '@components/mocked/ShowMoreButton'

import { FilterModal } from './filter-modal/FilterModal'

export const App = () => {
	useTranslation()
	const [filterOpen, setFilterOpen] = useState(true)

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<HeroSection onFilterClick={() => setFilterOpen(true)} />

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
