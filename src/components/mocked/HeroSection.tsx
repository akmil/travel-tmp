import { useTranslation } from 'react-i18next'

import { CategoryChips } from './CategoryChips'
import './HeroSection.css'
import { SearchBar } from './SearchBar'
import { ChevronRightIcon, FilterIcon } from './icons'

interface HeroSectionProps {
	onFilterClick: () => void
}

export const HeroSection = ({ onFilterClick }: HeroSectionProps) => {
	const { t } = useTranslation('home')
	return (
		<section className="hero-section relative w-full overflow-hidden">
			{/* Hero text */}
			<div className="absolute left-20 top-20">
				<p className="text-white mb-2 text-[32px] font-normal">
					{t('hero.greeting')}
				</p>
				<p className="text-white text-[48px] font-medium">
					{t('hero.tagline')}
				</p>
			</div>

			{/* Search bar */}
			<div className="absolute left-20 top-[220px]">
				<SearchBar />
			</div>

			{/* Category chips + filter row */}
			<div className="absolute flex items-center left-20 right-20 top-[320px]">
				{/* Category chips */}
				<CategoryChips />

				{/* Spacer */}
				<div className="flex-1" />

				{/* Filter elements */}
				<div className="flex items-center gap-10">
					{/* Arrow next */}
					<button
						className="flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors w-9 h-9 rounded-full bg-[#D9D9D9]"
						aria-label="Next"
					>
						<ChevronRightIcon />
					</button>

					{/* Filter icon button */}
					<button
						onClick={onFilterClick}
						className="flex items-center justify-center bg-white cursor-pointer hover:shadow-md transition-shadow w-[68px] h-[68px] rounded-[20px] text-[#31393C]"
						aria-label="Open filters"
					>
						<FilterIcon />
					</button>

					{/* Apply button */}
					<button className="flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity w-[246px] h-[68px] bg-[#FF5F00] rounded-[20px] text-white text-base font-semibold">
						{t('hero.apply')}
					</button>
				</div>
			</div>
		</section>
	)
}
