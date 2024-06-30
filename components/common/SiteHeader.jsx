import Link from "next/link";
import MainNav from "./Nav/MainNav";
import MobileNav from "./Nav/MobileNav";

import { Notebook } from "lucide-react";

const SiteHeader = () => {
	return (
		<header className="w-full border-b bg-slate-200">
			<div className="flex flex-row justify-between items-center">
				<MobileNav />
				<Link
					href={"/"}
					className="md:px-10 gap-1 flex flex-row items-center justify-items-center justify-center"
				>
					<Notebook /> <span>Wishlist Keeper</span>
				</Link>

				<div className="flex h-14 items-center px-4">
					{/* main navbar */}
					<MainNav />
					{/* mobile navbar */}
				</div>
			</div>
		</header>
	);
};

export default SiteHeader;
