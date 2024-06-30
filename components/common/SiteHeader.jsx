import Link from "next/link";
import MainNav from "./Nav/MainNav";
import MobileNav from "./Nav/MobileNav";

import { Notebook } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const SiteHeader = () => {
	return (
		<header className="w-full bg-slate-400">
			<div className="flex justify-between items-center">
				<MobileNav />
				<Link
					href={"/"}
					className="md:px-10 gap-1 flex flex-row items-center justify-items-center justify-center"
				>
					<Notebook className="dark:text-slate-900" />
					<span className="dark:text-slate-900 items-center">
						Wishlist Keeper
					</span>
				</Link>

				<div className="flex h-14 px-4 justify-items-end items-center">
					{/* main navbar */}
					<MainNav />
					{/* */}
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};

export default SiteHeader;
