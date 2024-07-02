import { Footer } from "@/components/Footer";
import SiteHeader from "@/components/common/SiteHeader";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Wishlist keeper",
	description:
		"A wishlist keeping and tracking app. Never lose track of your wishlist items again. Collect, categorize, and monitor your favorite products from different websites.",

	openGraph: {
		images: [`/api/og`],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-indigo-950 min-h-screen`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
