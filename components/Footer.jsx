import { GridPattern } from "@/components/GridPattern";
import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="sticky top-[100vh] pb-20 pt-5 ">
			<div className="absolute inset-x-0 top-0 h-16 text-slate-900/10 dark:text-slate-700 [mask-image:linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="relative text-center text-sm text-slate-400">
				<span className="flex flex-row items-center justify-center gap-2 ">
					<Link href="https://github.com/eth3R-One/" target="_blank">
						<Github className="dark:text-slate-200 text-indigo-900" />
					</Link>
				</span>
			</div>
		</footer>
	);
}
