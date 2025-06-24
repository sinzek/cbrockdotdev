"use client";

import { ThemeProvider } from "next-themes";
import { ReactQueryProvider } from "./context/react-query";
import { ProjectProvider } from "./context/project-context";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<ReactQueryProvider>
				<ProjectProvider>{children}</ProjectProvider>
			</ReactQueryProvider>
		</ThemeProvider>
	);
}
