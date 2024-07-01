import { House, X } from "lucide-react";

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center  p-20 ">
			<h2 className="text-red-500 text-3xl mt-10 mb-2 flex flex-row items-center gap-2">
				Not Found <X size={24} />
			</h2>
			<p>Could not find requested resource</p>
			<Link
				className="bg-indigo-200 px-5 py-2 m-5 rounded-md text-indigo-950 flex flex-row gap-2 mt-10 hover:bg-indigo-950 hover:text-indigo-200 hover:scale-110"
				href="/"
			>
				Return Home <House />
			</Link>
		</div>
	);
}
