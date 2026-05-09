type CheckboxItemProps = {
	label: string
	checked: boolean
	onChange: () => void
}

const CheckboxItem = ({ label, checked, onChange }: CheckboxItemProps) => (
	<label className="flex items-center gap-3 cursor-pointer select-none group">
		<div className="flex items-center justify-center shrink-0 w-6 h-6">
			<div
				className={`flex items-center justify-center transition-colors w-5 h-5 border-2 border-[#31393C] rounded-[2px] ${checked ? 'bg-[#31393C]' : 'bg-white'}`}
				onClick={onChange}
			>
				{checked && (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<path
							d="M2 6l3 3 5-5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
		</div>
		<span className="text-base text-[#474747]">{label}</span>
	</label>
)
export { CheckboxItem }
