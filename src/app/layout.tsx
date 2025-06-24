import type { Metadata } from "next";
import { Nunito, Metal_Mania } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import { Tabs } from "@/components/tabs";
import { Noto_Serif } from "next/font/google";

const nunito = Nunito({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

const metalMania = Metal_Mania({
	variable: "--font-metal-mania",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const notoSerif = Noto_Serif({
	variable: "--font-noto-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "cbrock.dev",
	description:
		"Personal website of Chase Brock, a full-stack developer and student at the University of Houston.",
	icons: {
		icon: "/rocketLaunchWhite.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={` ${nunito.variable} ${metalMania.variable} ${notoSerif.variable} antialiased`}
			>
				<Providers>
					<div className="w-dscreen max-w-dscreen overflow-x-hidden min-h-dscreen h-screen gap-4">
						<div className="flex flex-col items-center justify-start w-full h-full mx-auto">
							<Tabs />
							{children}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
