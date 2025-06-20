import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group inline-flex flex-row items-center justify-center whitespace-nowrap font-sans transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-blue/50 focus-visible:ring-[2px] aria-invalid:ring-red/75/20 dark:aria-invalid:ring-red/75/40 aria-invalid:border-red",
	{
		variants: {
			variant: {
				default:
					"rounded-full bg-transparent hover:bg-red/25 text-foreground border border-foreground/25 hover:border-red hover:text-red",
			},
			size: {
				default: "text-sm gap-1 font-light px-3 py-1",
				lg: "text-base gap-2 font-medium px-4 py-1.5",
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
