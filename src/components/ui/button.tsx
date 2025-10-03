import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"relative group inline-flex flex-row items-center justify-center uppercase whitespace-nowrap font-sans transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-yellow/50 focus-visible:ring-[2px] aria-invalid:ring-yellow/20 dark:aria-invalid:ring-yellow/40 aria-invalid:border-yellow inset-shadow-bottom",
	{
		variants: {
			variant: {
				default:
					"font-black bg-transparent bg-yellow text-black rounded-sm dual-shadow-sm hover:brightness-120 active:brightness-90 active:scale-98",
				confirm:
					"font-medium rounded-full bg-gradient-to-b from-yellow/50 to-yellow/25 to-25% hover:bg-gradient-to-b hover:from-yellow/75 hover:to-yellow/40 hover:to-30% text-foreground hover:text-foreground border border-yellow/50 border-t-yellow dual-shadow-sm",
				danger: "rounded-full bg-yellow/50 hover:bg-yellow/75 text-background/75 hover:text-background border border-yellow/75 hover:border-yellow",
				icon: "rounded-sm bg-transparent hover:bg-yellow/10 hover:text-yellow text-foreground hover:border-yellow/50 border border-transparent",
			},
			size: {
				default: "text-sm gap-1 px-2.5 pt-1.5 pb-2.5",
				lg: "text-base gap-2 px-4 py-1",
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

	return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
