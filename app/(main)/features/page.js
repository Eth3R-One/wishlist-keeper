import Head from "next/head";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "Features | Wishlist Organizer",
		description:
			"Discover the powerful features of Wishlist Organizer, designed to enhance your online shopping experience.",

		openGraph: {
			images: [`/api/og?title=Features | Wishlist Organizer`],
		},
	};
}

export default function Features() {
	return (
		<>
			<main className="max-w-4xl mx-auto p-6">
				{/* Page Header */}
				<header className="text-center mb-12 ">
					<h1 className="text-6xl pt-10 font-bold text-blue-800 mb-4">
						Features
					</h1>
					<p className="text-lg">
						Explore the powerful tools that make Wishlist Organizer the
						ultimate shopping companion.
					</p>
				</header>

				{/* Features Section */}
				<section className="space-y-10">
					<div className="text-left">
						<h2 className="text-2xl font-semibold text-blue-600 mb-2">
							{`->`} Centralized Wishlist Management
						</h2>
						<p className="">
							Collect and organize products from any website in one
							place, ensuring you never lose track of your desired items.
						</p>
					</div>

					<div className="text-left">
						<h2 className="text-2xl font-semibold text-blue-600 mb-2">
							{`->`} Category Organization
							<span className="px-2 text-xl text-gray-500">
								(upcomming)
							</span>
						</h2>
						<p className="">
							Sort your wishlist items into categories for easy access
							and management, making your shopping experience more
							efficient.
						</p>
					</div>

					<div className="text-left">
						<h2 className="text-2xl font-semibold text-blue-600 mb-2">
							{`->`} Price Tracking{" "}
							<span className="px-2 text-xl text-gray-500">
								(upcomming)
							</span>
						</h2>
						<p className="">
							Stay updated on price changes and grab the best deals by
							tracking the price history of your favorite items.
						</p>
					</div>

					<div className="text-left">
						<h2 className="text-2xl font-semibold text-blue-600 mb-2">
							{`->`} Shareability{" "}
							<span className="px-2 text-xl text-gray-500">
								(upcomming)
							</span>
						</h2>
						<p className="">
							Easily share your wishlist with friends and family for gift
							ideas or feedback, making shopping more collaborative.
						</p>
					</div>

					<div className="text-left">
						<h2 className="text-2xl font-semibold text-blue-600 mb-2">
							{`->`} Mobile-Friendly Access
						</h2>
						<p className="">
							Manage your wishlist on the go with our intuitive mobile
							interface, ensuring you can shop anytime, anywhere.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
