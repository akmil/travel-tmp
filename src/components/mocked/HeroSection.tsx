import { useTranslation } from 'react-i18next'

import './HeroSection.css'
import { SearchBar } from './SearchBar'
import { FilterIcon } from './icons'

interface HeroSectionProps {
	onFilterClick: () => void
}

export const HeroSection = ({ onFilterClick }: HeroSectionProps) => {
	const { t } = useTranslation('home')
	return (
		<section className="hero-section relative w-full overflow-hidden">
			{/* Hero text */}
			<div className="p-12">
				<p className="text-white mb-2 text-[32px] font-normal">
					{t('hero.greeting')}
				</p>
				<p className="text-white text-[48px] font-medium">
					{t('hero.tagline')}
				</p>

				<SearchBar />

				{/* Filter icon button */}
				<button
					onClick={onFilterClick}
					className="flex items-center justify-center bg-white cursor-pointer hover:shadow-md transition-shadow w-[68px] h-[68px] rounded-[20px] text-[#31393C]"
					aria-label="Open filters"
				>
					<FilterIcon /> {'Filter'}
				</button>
			</div>
		</section>
	)
}
