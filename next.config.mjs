/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
	transpilePackages: ["@plaiceholder/next"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
			},
		],
	},
};
export default withPlaiceholder(nextConfig);

// export default nextConfig;
