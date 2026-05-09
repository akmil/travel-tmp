const footerWidgets = [
	{
		header: 'HELP MENU',
		items: []
	},
	{
		header: 'Company',
		items: ['About us', 'Careers', 'Press center', 'Blog']
	},
	{
		header: 'Support',
		items: [
			'Help center',
			'Safety information',
			'Cancellation options',
			'Report concern'
		]
	},
	{
		header: 'Hosting',
		items: [
			'List your property',
			'Hosting resources',
			'Community forum',
			'How to host'
		]
	},
	{
		header: 'WinWinTravel',
		items: ['Newsroom', 'Investor relations', 'WWT.org', 'Accessibility']
	}
]

export const Footer = () => {
	return (
		<footer className="w-full bg-[#078691] min-h-91.25">
			<div className="flex gap-0 py-12 px-20 max-w-360 mx-auto">
				{footerWidgets.map((widget, idx) => (
					<div
						key={idx}
						className={`flex flex-col ${idx === footerWidgets.length - 1 ? 'flex-[1.5]' : 'flex-1'}`}
					>
						<h4 className="text-white mb-2 text-base font-bold">
							{widget.header}
						</h4>
						{widget.items.map(item => (
							<a
								key={item}
								href="#"
								className="text-white hover:underline transition-all text-sm font-normal leading-10 no-underline"
							>
								{item}
							</a>
						))}
					</div>
				))}
			</div>
		</footer>
	)
}
