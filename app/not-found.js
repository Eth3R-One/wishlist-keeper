import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center p-20 ">
			<h2 className="text-3xl mt-10 mb-2">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link
				className="bg-slate-400 px-5 py-2 m-5 rounded-md text-slate-200 flex flex-row gap-2 mt-10 hover:bg-slate-950 hover:scale-110"
				href="/"
			>
				Return Home <House />
			</Link>
		</div>
	);
}
