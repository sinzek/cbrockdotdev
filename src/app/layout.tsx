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
		description:
			"Chase Brock's personal portfolio - a full-stack developer, student, and web designer.",
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
		description:
			"Chase Brock's personal portfolio - a full-stack developer, student, and web designer.",
		images: [
			"https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/chasebrock-opengraph.png",
		],
	},
	icons: {
		icon: "/rocketLaunchWhite.svg",
		shortcut: "/rocketLaunchWhite.svg",
		apple: "/rocketLaunchWhite.svg",
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
