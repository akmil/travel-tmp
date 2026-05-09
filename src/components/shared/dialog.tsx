'use client'

import * as React from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

// import { X } from "lucide-react"
import { cn } from './utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn('absolute inset-0 bg-black/80', className)}
		{...props}
	/>
))
DialogOverlay.displayName = 'DialogOverlay'

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	const wrapperRef = React.useRef<HTMLDivElement | null>(null)
	const touchStartY = React.useRef<number | null>(null)

	const handleOverlayWheel = (e: React.WheelEvent) => {
		const el = wrapperRef.current
		if (!el) {
			return
		}
		el.scrollTop += e.deltaY
		e.preventDefault()
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartY.current = e.touches?.[0]?.clientY ?? null
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		const el = wrapperRef.current
		if (!el || touchStartY.current == null) {
			return
		}
		const currentY = e.touches?.[0]?.clientY ?? 0
		const delta = touchStartY.current - currentY
		el.scrollTop += delta
		touchStartY.current = currentY
		e.preventDefault()
	}

	return (
		<DialogPortal>
			<div
				ref={wrapperRef}
				className="fixed inset-0 z-40 overflow-y-auto py-8 sm:py-16 flex items-start sm:items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out"
			>
				<DialogPrimitive.Overlay
					className="fixed inset-0 bg-black/80"
					onWheel={handleOverlayWheel}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
				/>
				<DialogPrimitive.Content
					ref={ref}
					className={cn(
						'relative min-w-[80%] top-60',
						'z-50 grid gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
						className
					)}
					onWheel={handleOverlayWheel}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					{...props}
				>
					{children}
					<DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
						<span className="sr-only">X</span>
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</div>
		</DialogPortal>
	)
})
DialogContent.displayName = 'DialogContent'

// className should be optional
const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={cn(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		)}
		{...props}
	/>
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			'text-[40px] font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
))
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
))
DialogDescription.displayName = 'DialogDescription'

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription
}
