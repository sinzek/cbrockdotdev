"use client";

import { useEffect, useState } from "react";

export function useMobile() {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isMobile;
}
