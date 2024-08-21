"use client";
import { useState } from "react";
import WishlistItem from "./WishlistItem";
import EditWishlistForm from "./EditWishlistForm";

const WishlistTable = ({ list }) => {
	const [wishlist, setWishlist] = useState(list ?? []);
	const [addWishlist, setAddWishlist] = useState(false);
	return (
		<>
			{addWishlist && (
				<EditWishlistForm
					editModeOpen={addWishlist}
					setEditModeOpen={setAddWishlist}
				/>
			)}

			<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<button
					type="button"
					onClick={() => {
						setAddWishlist((prevStatus) => !prevStatus);
					}}
					className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Add wishlist
				</button>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
							<table className="min-w-full divide-y divide-indigo-950 border-indigo-900">
								<thead className="bg-indigo-400 dark:bg-indigo-800 text-slate-200">
									<tr>
										<th
											scope="col"
											className=" px-3 pl-10 py-3.5 text-left text-sm font-semibold "
										>
											Title
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold "
										>
											Link
										</th>

										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold "
										>
											Status
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6"
										>
											<span className="sr-only">Edit</span>
										</th>
										<th
											scope="col"
											className="relative py-3.5 pl-3 pr-4 sm:pr-6"
										>
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-indigo-950 bg-indigo-50">
									{wishlist.map((item, indx) => (
										<WishlistItem
											key={item?.id}
											item={item}
											indx={indx}
										/>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WishlistTable;
