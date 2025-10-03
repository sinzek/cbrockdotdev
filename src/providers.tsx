"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ProjectProvider } from "./context/project-context";
import { ReactQueryProvider } from "./context/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/") {
			document.querySelector("#cool-bg")?.classList.remove("opacity-15");
			return;
		}

		document.querySelector("#cool-bg")?.classList.add("opacity-15");
	}, [pathname]);

	return (
		<ReactQueryProvider>
			<ProjectProvider>{children}</ProjectProvider>
		</ReactQueryProvider>
	);
}
