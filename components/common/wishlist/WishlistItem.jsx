"use client";
import Link from "next/link";

import { useState } from "react";
import EditWishlistForm from "./EditWishlistForm";
import WishlistDetails from "./WishlistDetails";

const WishlistItem = ({ item, indx }) => {
	const [editModeOpen, setEditModeOpen] = useState(false);
	const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

	return (
		<>
			{editModeOpen && (
				<EditWishlistForm
					editModeOpen={editModeOpen}
					setEditModeOpen={setEditModeOpen}
					item={item}
					indx={indx}
				/>
			)}
			{viewDetailsOpen && (
				<WishlistDetails
					viewDetailsOpen={viewDetailsOpen}
					setViewDetailsOpen={setViewDetailsOpen}
					item={item}
					indx={indx}
					setEditModeOpen={setEditModeOpen}
				/>
			)}
			<tr
				onClick={() => setViewDetailsOpen(true)}
				className={`${
					indx % 2 === 0 ? "bg-indigo-100" : "bg-indigo-200"
				} hover:bg-yellow-50 ${item?.status ? "bg-green-200" : ""}`}
			>
				<td className="text-left dark:text-indigo-800 font-bold pl-8 ">
					{item.title}
				</td>
				<td className="whitespace-nowrap px-3 py-4 text-sm dark:text-indigo-800">
					{item.link ? (
						<Link
							href={item?.link}
							target="_blank"
							className="hover:text-fuchsia-500"
							onClick={(e) => e.stopPropagation()}
						>
							{item?.link}
						</Link>
					) : (
						<p className="text-red-500">No link added!</p>
					)}
				</td>

				<td
					className={`whitespace-nowrap px-3 py-4 text-sm dark:text-indigo-800 `}
				>
					{item?.status ? (
						<p className="text-green-600 font-bold">DONE</p>
					) : (
						<p className="text-rose-600">Pending</p>
					)}
				</td>
				<td className="relative flex justify-center gap-2  whitespace-nowrap py-4 text-center text-sm font-medium sm:pr-6">
					<>
						<button
							onClick={(e) => {
								e.stopPropagation();
								setEditModeOpen(true);
							}}
							className=" bg-indigo-600 border border-indigo-500 px-5 py-1 rounded-md hover:text-indigo-900 hover:bg-inherit text-slate-200"
						>
							Edit
							<span className="sr-only">{item.name}</span>
						</button>
						<button className="bg-red-600 px-5 py-1 rounded-md text-red-50 hover:text-red-600 hover:bg-red-200">
							Delete
							<span className="sr-only">, {item.name}</span>
						</button>
					</>
				</td>
			</tr>
		</>
	);
};

export default WishlistItem;
