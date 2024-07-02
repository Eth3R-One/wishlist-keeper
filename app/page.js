import AboutUs from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";

export default function Home() {
	return (
		<>
			<Hero />
			<Introduction />

			{/* <Author /> */}
			<AboutUs />
			<Footer />
		</>
	);
}
