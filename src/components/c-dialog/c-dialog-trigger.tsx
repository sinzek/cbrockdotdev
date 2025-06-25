"use client";
import { Slot } from "@radix-ui/react-slot";
import { useCDialog } from ".";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface CDialogTriggerProps {
	asChild?: boolean;
	children?: React.ReactNode;
	className?: string;
	variant?: VariantProps<typeof buttonVariants>["variant"];
	size?: VariantProps<typeof buttonVariants>["size"];
}

export function CDialogTrigger({
	asChild = false,
	children,
	className,
	variant,
	size,
}: CDialogTriggerProps &
	React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const { setIsOpen, isOpen } = useCDialog();

	const Comp = asChild ? Slot : Button;

	return (
		<Comp
			data-slot="button"
			onClick={() => setIsOpen(!isOpen)}
			className={cn(buttonVariants({ variant, size, className }))}
		>
			{children}
		</Comp>
	);
}
