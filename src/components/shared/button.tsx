const BASE_CLASSES =
	'flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity h-16 px-4 rounded-2xl text-base font-semibold disabled:bg-transparent disabled:text-foreground/40 disabled:cursor-not-allowed disabled:pointer-events-none'

const VARIANT_CLASSES = {
	default:
		'bg-primary text-primary-foreground hover:bg-primary-muted active:bg-primary-accent ' +
		'data-loading:bg-primary data-loading:text-primary-foreground',
	outlined:
		'border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 ' +
		'data-loading:border-primary data-loading:text-primary',
	ghost:
		'bg-transparent text-foreground hover:text-primary-accent active:text-primary-accent'
} as const

type ButtonVariant = keyof typeof VARIANT_CLASSES

type ButtonProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'type'
> & {
	text: string
	variant?: ButtonVariant
	children?: React.ReactNode
}

const Button = ({
	text,
	onClick,
	variant = 'default',
	disabled,
	className = '',
	children,
	...rest
}: ButtonProps) => {
	const variantClasses = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.default

	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={`${BASE_CLASSES} ${variantClasses} ${className}`.trim()}
			{...rest}
		>
			{children ?? (
				<div className="relative flex w-full items-center justify-center">
					<span>{text}</span>
				</div>
			)}
		</button>
	)
}

export { Button }
