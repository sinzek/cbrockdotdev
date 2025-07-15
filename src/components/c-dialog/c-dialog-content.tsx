"use client";

import { useCDialog } from ".";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { XIcon } from "@phosphor-icons/react";
import React from "react";

interface CDialogContentProps {
	onEscapeKeyDown?: (event: React.KeyboardEvent) => void;
	hasCloseButton?: boolean;
	onCloseButtonClick?: () => void;
	children: React.ReactNode;
	overlayProps?: React.ComponentProps<"div">;
	contentProps?: React.ComponentProps<"div">;
}

export function CDialogContent({
	onEscapeKeyDown,
	children,
	overlayProps,
	contentProps,
	onCloseButtonClick,
	hasCloseButton = true,
}: CDialogContentProps) {
	const { isOpen, setIsOpen } = useCDialog();
	const [isMounted, setIsMounted] = React.useState(false);
	const overlayRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
			// focus after mount
			setTimeout(() => {
				overlayRef.current?.focus();
			}, 10);
		} else if (isMounted) {
			const timer = setTimeout(() => {
				setIsMounted(false);
			}, 140); // Adjust based on your animation duration
			return () => clearTimeout(timer);
		}
	}, [isOpen, isMounted]);

	return (
		<>
			{isMounted && (
				<div
					{...overlayProps}
					ref={overlayRef}
					className={cn(
						"fixed inset-0 w-screen h-screen z-100 flex items-center justify-center backdrop-blur-[3px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
						overlayProps?.className
					)}
					onClick={(e) => {
						overlayProps?.onClick?.(e);
						setIsOpen(false);
					}}
					data-slot="dialog"
					data-state={isOpen ? "open" : "closed"}
					tabIndex={-1}
					onKeyDown={(e) => {
						overlayProps?.onKeyDown?.(e);
						if (e.key === "Escape") {
							onEscapeKeyDown?.(e);
							setIsOpen(false);
						}
					}}
				>
					<div
						{...contentProps}
						className={cn(
							"relative w-screen z-100 lg:w-[70vw] h-screen lg:h-auto overflow-y-auto px-5 lg:px-12 py-8 lg:py-16 bg-background rounded-lg shadow-xl border border-red/10 shadow-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
							contentProps?.className
						)}
						onClick={(e) => {
							contentProps?.onClick?.(e);
							e.stopPropagation();
						}}
						data-slot="dialog-content"
						data-state={isOpen ? "open" : "closed"}
					>
						{hasCloseButton && (
							<Button
								variant="icon"
								size="icon"
								className="absolute top-2 right-2 lg:top-4 lg:right-4 z-10"
								onClick={() => {
									onCloseButtonClick?.();
									setIsOpen(false);
								}}
							>
								<XIcon />
							</Button>
						)}
						{children}
					</div>
				</div>
			)}
		</>
	);
}
