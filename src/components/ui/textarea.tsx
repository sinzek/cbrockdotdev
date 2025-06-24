import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"border-foreground/25 placeholder:text-foreground/50 focus-visible:border-foreground focus-visible:ring-red/75 aria-invalid:ring-yellow/20 aria-invalid:border-yellow flex field-sizing-content min-h-16 w-full rounded-sm border bg-foreground/5 hover:border-foreground px-3 py-2 text-base shadow-xs transition-all outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };
