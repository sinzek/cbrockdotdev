import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"relative group inline-flex flex-row items-center justify-center whitespace-nowrap font-sans transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-red/50 focus-visible:ring-[2px] aria-invalid:ring-yellow/20 dark:aria-invalid:ring-yellow/40 aria-invalid:border-yellow",
	{
		variants: {
			variant: {
				default:
					"rounded-full bg-transparent hover:bg-red/25 text-foreground border border-foreground/25 hover:border-red hover:text-red",
				confirm:
					"rounded-full bg-red/50 hover:bg-red/75 text-foreground/75 border border-red hover:text-foreground",
				danger: "rounded-full bg-yellow/50 hover:bg-yellow/75 text-background/75 hover:text-background border border-yellow/75 hover:border-yellow",
				icon: "rounded-sm bg-transparent hover:bg-red/10 hover:text-red text-foreground hover:border-red/50 border border-transparent",
			},
			size: {
				default: "text-sm gap-1 font-light px-3 py-1",
				lg: "text-base gap-2 font-medium px-4 py-1",
				icon: "[&_svg]:size-5 p-1",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
