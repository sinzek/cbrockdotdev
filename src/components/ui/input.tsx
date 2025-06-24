import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:text-foreground placeholder:text-foreground/50 font-sans selection:bg-red/25 selection:text-red border-foreground/25 hover:border-foreground transition-all flex h-9 w-full min-w-0 rounded-sm border bg-foreground/5 px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-foreground focus-visible:ring-red/75 focus-visible:ring-[2px]",
				"aria-invalid:ring-yellow/20 aria-invalid:border-yellow",
				className
			)}
			{...props}
		/>
	);
}

export { Input };
