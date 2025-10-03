import { Tabs } from "@/components/tabs";
import type { Metadata } from "next";
import { Noto_Serif, Oswald, Roboto } from "next/font/google";
import { Providers } from "../providers";
import { CoolBackgroundScript } from "./cool-background/cool-background-script";
import "./globals.css";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const notoSerif = Noto_Serif({
	variable: "--font-noto-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "cbrock.dev",
		template: "%s | cbrock.dev",
	},
	description:
		"Portfolio of Chase Brock, a full-stack developer and University of Houston student building web apps with React, Next.js, and more.",
	keywords: [
		"Chase Brock",
		"cbrock.dev",
		"full-stack developer",
		"Next.js",
		"React",
		"TypeScript",
		"portfolio",
		"Houston developer",
		"Web developer",
	],
	authors: [{ name: "Chase Brock", url: "https://cbrock.dev" }],
	creator: "Chase Brock",
	metadataBase: new URL("https://cbrock.dev"),
	openGraph: {
		title: "cbrock.dev",
		description: "Chase Brock's personal portfolio - a full-stack developer, student, and web designer.",
		url: "https://cbrock.dev",
		siteName: "cbrock.dev",
		images: [
			{
				url: "https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/chasebrock-opengraph.png",
				width: 1200,
				height: 630,
				alt: "cbrock.dev preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "cbrock.dev",
		description: "Chase Brock's personal portfolio - a full-stack developer, student, and web designer.",
		images: ["https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/chasebrock-opengraph.png"],
	},
	icons: {
		icon: "/c-favicon.png",
		shortcut: "/c-favicon.png",
		apple: "/c-favicon.png",
	},
	manifest: "/site.webmanifest",
	category: "technology",
	applicationName: "cbrock.dev",
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
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
				className={` ${roboto.variable} ${oswald.variable} ${notoSerif.variable} antialiased overflow-x-hidden bg-background`}
			>
				<CoolBackgroundScript />
				<div id="cool-bg" className="fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-1000" />
				<Providers>
					<div className="w-screen h-screen gap-4">
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
