import Link from "next/link";

import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";

export function Introduction() {
	return (
		<section
			id="introduction"
			aria-label="Introduction"
			className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
		>
			<Container className="p-20 rounded-6xl bg-slate-50">
				<p className="text-6xl lg:text-nowrap pb-10 mb-10 font-bold text-slate-900 flex items-center justify-center ">
					Welcome to Wishlist Organizer
				</p>
				<p className="my-4 pb-10 ">
					Imagine having all your favorite products from various websites
					neatly organized in one place. Wishlist Organizer is your
					one-stop solution for managing and categorizing your shopping
					desires, making it easier than ever to keep track of what you
					love.
				</p>

				<ul role="list" className="mt-8 space-y-3">
					{[
						"Collect and organize products from any website into one convenient list.",
						"Easily categorize your wishlist items for quick and efficient access.",
						"Share your wishlist with friends and family to get their opinions or hints for gifts.",
						"Access and manage your wishlist on the go with our intuitive mobile interface.",
					].map((feature) => (
						<li key={feature} className="flex">
							<CheckIcon className="h-8 w-8 fill-indigo-500" />
							<span className="ml-4 text-indigo-950 text-xl font-bold ">
								{feature}
							</span>
						</li>
					))}
				</ul>
				<p className="mt-10">
					<Link
						href="/features"
						className="text-base font-medium text-indigo-600 hover:text-blue-800 flex items-center  hover:underline"
					>
						Discover More
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
			</Container>
		</section>
	);
}
