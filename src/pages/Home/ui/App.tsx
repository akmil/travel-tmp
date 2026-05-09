import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterModal } from '@components/FilterModal'
import { Footer } from '@components/mocked/Footer'
import { HeroSection } from '@components/mocked/HeroSection'
import { ListingGrid } from '@components/mocked/ListingGrid'
import { Navbar } from '@components/mocked/Navbar'
import { ResultsBar } from '@components/mocked/ResultsBar'
import { ShowMoreButton } from '@components/mocked/ShowMoreButton'

export const App = () => {
	useTranslation()
	const [filterOpen, setFilterOpen] = useState(false)

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<HeroSection onFilterClick={() => setFilterOpen(true)} />

			<main className="px-20 pt-10 pb-12 max-w-360 mx-auto">
				<ResultsBar />
				<ListingGrid />
				<ShowMoreButton />
			</main>

			<Footer />

			{filterOpen && <FilterModal onClose={() => setFilterOpen(false)} />}
		</div>
	)
}
