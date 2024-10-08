import { auth } from "@/auth";
import WishlistTable from "@/components/common/wishlist/WishlistTable";
import { redirect } from "next/navigation";
import { list } from "@/database/list.json";

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: "Wish List | Wishlist Organizer",
		description:
			"Discover the powerful features of Wishlist Organizer, designed to enhance your online shopping experience.",

		openGraph: {
			images: [`/api/og?title=List | Wishlist Organizer`],
		},
	};
}

const WishlistPage = async () => {
	const session = await auth();
	if (!session?.user) {
		redirect("/login");
	}

	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8 pt-10">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<p className="lg:text-5xl sm:text-2xl md:text-3xl text-pretty font-semibold leading-6 text-indigo-800 dark:text-indigo-100 text-center border-b-2  dark:border-white border-indigo-900">
							Centralize Your Wishes
						</p>
						<p
							className="mt-2 text-sm  dark:text-slate-200 text-slate-950 text-center pt-5
               "
						>
							From dream to reality, manage all your wishlist items in
							one place. Categorize, organize, and shop smarter.
						</p>
					</div>
				</div>
				<WishlistTable list={list} />
			</div>
		</>
	);
};

export default WishlistPage;
