import type { NextConfig } from "next";

const repo = 'tailwindcss-typography-demo';

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: `/${repo}`,
	assetPrefix: `/${repo}/`,
};

export default nextConfig;



