/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

// Make TypeScript aware of the VANTA object on the window
declare global {
	interface Window {
		VANTA: any;
	}
}

export const CoolBackgroundScript = () => {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const [isVantaLoaded, setIsVantaLoaded] = useState(false);

	useEffect(() => {
		// Initialize Vanta.js effect only when the script is loaded and the effect isn't already set
		if (isVantaLoaded && !vantaEffect) {
			const effect = window.VANTA.TOPOLOGY({
				el: "#cool-bg",
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: 0xff9f1c,
				backgroundColor: 0x0,
			});
			setVantaEffect(effect);
		}

		// Cleanup function to destroy the effect when the component unmounts
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [isVantaLoaded, vantaEffect]); // Rerun effect if isVantaLoaded changes

	return (
		<>
			{/* Vanta.js depends on p5.js, so it must be loaded */}
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
				id="p5-js"
				strategy="afterInteractive"
			/>
			<Script
				src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
				id="vanta-topology-script"
				strategy="afterInteractive"
				onLoad={() => setIsVantaLoaded(true)}
			/>
		</>
	);
};
