import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = 'zh-tailwindcss-typography-demo'

const nextConfig: NextConfig = {
	output: "export",
	basePath: isProd ? `/${repo}` : '',
	assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;



