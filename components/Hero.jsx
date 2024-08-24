import Image from "next/image";

import { GridPattern } from "@/components/GridPattern";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

import HeroImage from "../public/images/hero.jpeg";

export async function Hero() {
	return (
		<header className="overflow-hidden lg:px-5">
			<div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
				<div className="relative flex items-end lg:col-span-5 lg:row-span-2">
					<div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl dark:bg-indigo-900 bg-indigo-400 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
						<GridPattern
							x="100%"
							y="100%"
							patternTransform="translate(112 64)"
						/>
					</div>
					<div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
						<Image
							className="w-full rounded-lg bg-indigo-800"
							src={HeroImage}
							width={1080}
							height={1080}
							alt="items image"
							priority={true}
						/>
					</div>
				</div>

				<div className=" pt-16 lg:col-span-7 bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
					<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
						<h1 className="text-5xl font-extrabold dark:text-slate-200 text-slate-800 sm:text-6xl">
							{/* Effortlessly Manage Your Wishlist */}
							<FlipWords
								words={[
									"Your Ultimate Wishlist Organizer",
									"All Your Desires, One List",
									"Shop Smart, Dream Big",
								]}
								className={"text-indigo-900"}
								duration={5000}
							/>
						</h1>
						<p className="mt-4 text-2xl text-slate-700 dark:text-slate-400">
							Keep track of all your favorite products from various
							websites in one convenient place. Organize by category and
							never lose sight of your shopping dreams.
						</p>
						<div className="mt-8 flex gap-4">
							<Link
								href="/wishlist"
								className="bg-indigo-950 dark:bg-slate-200 dark:text-indigo-950 px-7 py-2 text-slate-200 rounded text-xl"
							>
								Get started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
