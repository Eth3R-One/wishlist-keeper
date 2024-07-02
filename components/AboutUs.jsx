import Link from "next/link";

import { Container } from "@/components/Container";
const AboutUs = () => {
	return (
		<section
			id="about-us"
			aria-label="About Us"
			className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
		>
			<Container className="p-20">
				<p className="text-6xl lg:text-nowrap pb-10 mb-10 font-bold text-slate-900 flex items-center justify-center dark:text-slate-200">
					About Us
				</p>
				<p className="my-4 pb-10 text-center ">
					We are passionate about making your shopping experience seamless
					and organized. Our platform allows you to collect wishlist items
					from various websites, categorize them, and keep track of your
					shopping desires in one place
				</p>

				<p className="mt-10">
					<Link
						href="/about"
						className="font-medium text-indigo-600 hover:text-blue-800 flex items-center hover:underline dark:text-teal-500 text-xl underline-offset-8"
					>
						Know more about us
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
			</Container>
		</section>
	);
};

export default AboutUs;
