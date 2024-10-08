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
			<Container className="p-20 lg:rounded-6xl rounded-4xl bg-slate-50 dark:bg-indigo-900 dark:text-slate-200 text-slate-800">
				<p className="text-6xl  pb-10 mb-10 font-bold  flex items-center justify-center">
					Welcome to Wishlist Organizer
				</p>
				<p className="my-4 pb-10 text-slate-50">
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
							<CheckIcon className="h-8 w-8 fill-indigo-500 dark:fill-slate-200" />
							<span className="ml-4 text-indigo-950 dark:text-slate-300 text-xl font-medium">
								{feature}
							</span>
						</li>
					))}
				</ul>
				<p className="mt-5">
					<Link
						href="/features"
						className="text-base font-medium text-indigo-600 hover:text-blue-800 flex items-center hover:underline dark:text-teal-500"
					>
						Discover More
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
				<div className="pt-10 flex items-center justify-center">
					<Link
						href={"/wishlist"}
						className="px-5 bg-indigo-950 text-slate-200 py-2 rounded-xl"
					>
						Get Started Today
					</Link>
				</div>
			</Container>
		</section>
	);
}
