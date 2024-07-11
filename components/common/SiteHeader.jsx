import Link from "next/link";
import MainNav from "./Nav/MainNav";
import MobileNav from "./Nav/MobileNav";

import { Notebook } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { auth } from "@/auth";

const SiteHeader = async () => {
	const session = await auth();
	return (
		<header className="w-full bg-indigo-200 dark:bg-indigo-900 rounded-b-lg">
			<div className="flex justify-between items-center">
				<MobileNav session={session} />
				<Link
					href={"/"}
					className="md:px-10 gap-1 flex flex-row items-center justify-items-center justify-center "
				>
					<Notebook className="dark:text-indigo-200" />
					<span className="dark:text-indigo-200 items-center">
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
