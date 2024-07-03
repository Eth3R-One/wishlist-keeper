import { navBarlinks } from "@/links/navbarLinks";
import Link from "next/link";

export default function MainNav() {
	return (
		<div className="mr-4 hidden gap-2 md:flex items-center">
			{navBarlinks.map((item, index) => (
				<Link href={item?.link} key={index} className="hover:underline m-2">
					{item?.name}
				</Link>
			))}
			<Link
				href={"/login"}
				className=" px-5 py-2 bg-indigo-600 rounded-lg text-white"
			>
				Login
			</Link>
			<Link
				href={"/sign-up"}
				className=" px-5 py-2 bg-fuchsia-600 rounded-lg text-white "
			>
				Sign Up
			</Link>
		</div>
	);
}
