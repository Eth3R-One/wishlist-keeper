import { navBarlinks } from "@/links/navbarLinks";
import Link from "next/link";

export default function MainNav() {
	return (
		<div className="mr-4 hidden gap-2 md:flex">
			{navBarlinks.map((item, index) => (
				<Link href={item?.link} key={index} className="hover:underline m-2">
					{item?.name}
				</Link>
			))}
		</div>
	);
}
