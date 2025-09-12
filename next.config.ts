import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		optimizePackageImports: ["@phosphor-icons/react"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/**",
			},
			{
				protocol: "https",
				hostname: "*.icons8.com",
				port: "",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/resume",
				destination: "/chase-brock-resume-2025.pdf",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
