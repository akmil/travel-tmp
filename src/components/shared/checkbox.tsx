type CheckboxItemProps = {
	label: string
	checked: boolean
	onChange: () => void
}

const CheckboxItem = ({ label, checked, onChange }: CheckboxItemProps) => (
	<label className="flex items-center gap-3 cursor-pointer select-none">
		<input
			type="checkbox"
			checked={checked}
			onChange={onChange}
			className="shrink-0 w-5 h-5 rounded-sm border-2 border-border accent-secondary cursor-pointer"
		/>
		<span className="text-base text-foreground">{label}</span>
	</label>
)
export { CheckboxItem }
