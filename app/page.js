import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between py-24 px-8 bg-slate-300 text-white">
			<section className="p-4">
				<div className="container flex flex-col center items-center text-center">
					<h1 className="text-2xl font-bold">Home Page</h1>
				</div>
				<FlipWords words={["hello, there"]} className={"text-white-200"} />
			</section>
		</div>
	);
}
