import Head from "next/head";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "About Us | Wishlist Organizer",
		description:
			"Learn more about Wishlist Organizer, our mission, values, and the team behind the platform.",

		openGraph: {
			images: [`/api/og?title=About Us | Wishlist Organizer`],
		},
	};
}

export default function About() {
	return (
		<>
			<main className="max-w-4xl mx-auto p-6 pt-10">
				{/* Our Mission Section */}
				<section className="mb-10">
					<h1 className="text-5xl pt-10 font-bold text-blue-800 mb-4">
						Our Mission
					</h1>
					<p>
						{`At Wishlist Organizer, our mission is simple: to make your
						online shopping experience more enjoyable, organized, and
						stress-free. We understand that in today's digital world,
						managing wishlists across multiple websites can be
						overwhelming. That's why we've created a platform that brings
						all your shopping desires together in one convenient place, so
						you can focus on what truly matters—finding the perfect items
						for you and your loved ones.`}
					</p>
				</section>

				{/* Our Story Section */}
				<section className="mb-10">
					<h2 className="text-5xl pt-10 font-bold text-blue-800 mb-4">
						Our Story
					</h2>
					<p>
						Wishlist Organizer was born out of a common frustration shared
						by many online shoppers: the hassle of keeping track of
						wishlist items across different platforms. Our founder, a
						passionate shopper, realized there had to be a better way to
						organize and manage these items without constantly switching
						between tabs and apps. With this idea in mind, Wishlist
						Organizer was created a tool designed to simplify and enhance
						the shopping experience for everyone.
					</p>
					{/* <Image
						src="/images/timeline.jpg"
						alt="Our Story Timeline"
						width={800}
						height={400}
					/> */}
				</section>

				{/* What We Offer Section */}
				{/* <section className="mb-10">
					<h2 className="text-5xl pt-10 font-bold text-blue-800 mb-4">
						What We Offer
					</h2>
					<ul>
						<li>
							<strong>Centralized Wishlist Management:</strong> Collect
							and organize products from any website in one place.
						</li>
						<li>
							<strong>Category Organization:</strong> Sort your wishlist
							items into categories for easy access and management.
						</li>
						<li>
							<strong>Price Tracking:</strong> Stay updated on price
							changes and grab the best deals.
						</li>
						<li>
							<strong>Shareability:</strong> Easily share your wishlist
							with friends and family for gift ideas or feedback.
						</li>
						<li>
							<strong>Mobile-Friendly Access:</strong> Manage your
							wishlist on the go with our intuitive mobile interface.
						</li>
					</ul>
				</section> */}

				{/* Our Values Section */}
				<section className="mb-10">
					<h2 className="text-5xl pt-10 font-bold text-blue-800 mb-4">
						Our Values
					</h2>
					<p>We are committed to the following core values:</p>
					<ul>
						<li>
							<strong>User-Centric Design:</strong> We prioritize the
							needs of our users, ensuring our platform is intuitive and
							easy to use.
						</li>
						<li>
							<strong>Innovation:</strong> We continuously seek to
							improve and innovate, adding new features to enhance your
							shopping experience.
						</li>
						<li>
							<strong>Transparency:</strong> We believe in clear
							communication and honesty in everything we do.
						</li>
						<li>
							<strong>Community:</strong> We value our community of users
							and are committed to providing excellent support and
							fostering a positive environment.
						</li>
					</ul>
				</section>
			</main>
		</>
	);
}
