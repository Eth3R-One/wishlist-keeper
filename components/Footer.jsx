import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="sticky top-[100vh] p-3 rounded-t-lg bg-indigo-200 dark:bg-indigo-900">
			<div className="mx-auto">
				<div className="flex justify-center">
					<Link
						href="https://github.com/eth3R-One/"
						target="_blank"
						className="flex gap-2 hover:scale-110"
					>
						Refayth Hossain
						<Github className="dark:text-slate-200 text-indigo-900" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
