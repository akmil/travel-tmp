import { useTranslation } from 'react-i18next'

import {
	BellIcon,
	GlobeIcon,
	HeartIcon,
	LogoIcon,
	ShareIcon,
	UserIcon
} from './icons'

export const Navbar = () => {
	const { t } = useTranslation('home')
	return (
		<nav
			className="w-full bg-white flex items-center justify-between px-20"
			style={{ height: '89px' }}
		>
			{/* Logo */}
			<div className="flex items-center gap-2">
				<LogoIcon />
				<div className="flex items-baseline gap-0.5">
					<span
						className="text-[22px] font-bold leading-none"
						style={{ color: '#2F2F2F' }}
					>
						{t('navbar.brandFirst')}
					</span>
					<span
						className="text-[22px] font-bold leading-none"
						style={{ color: '#FF3D00' }}
					>
						{t('navbar.brandSecond')}
					</span>
				</div>
			</div>

			{/* Right nav icons */}
			<div
				className="flex items-center gap-10"
				style={{ color: '#474747' }}
			>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Share"
				>
					<ShareIcon />
				</button>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Notifications"
				>
					<BellIcon />
				</button>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Favourites"
				>
					<HeartIcon />
				</button>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Language"
				>
					<GlobeIcon />
				</button>
				<button
					className="cursor-pointer hover:opacity-70 transition-opacity"
					aria-label="Profile"
				>
					<UserIcon />
				</button>
			</div>
		</nav>
	)
}
