import SiteHeader from "@/components/common/SiteHeader";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Wishlist keeper",
	description: "A wishlist keeping and tracking app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-indigo-950`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
