import { auth } from "@/auth";
import { navBarlinks } from "@/links/navbarLinks";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function MainNav() {
	const session = await auth();
	return (
		<div className="mr-4 hidden gap-2 md:flex items-center">
			{navBarlinks.map((item, index) => (
				<Link href={item?.link} key={index} className="hover:underline m-2">
					{item?.name}
				</Link>
			))}
			{session?.user && (
				<Link
					href={"/wishlist"}
					className="hover:underline m-2 p-1 px-2 bg-indigo-500 dark:bg-indigo-950 border border-indigo-950 dark:border-white  rounded text-white "
				>
					Wish list
				</Link>
			)}
			{session?.user ? (
				<LogoutButton />
			) : (
				<>
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
				</>
			)}
		</div>
	);
}
