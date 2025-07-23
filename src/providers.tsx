"use client";

import { ReactQueryProvider } from "./context/react-query";
import { ProjectProvider } from "./context/project-context";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactQueryProvider>
			<ProjectProvider>{children}</ProjectProvider>
		</ReactQueryProvider>
	);
}
