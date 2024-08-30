import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Fragment, useRef } from "react";
import { toast } from "react-toastify";

const WishlistDetails = ({
	viewDetailsOpen,
	setViewDetailsOpen,
	item,
	indx,
	setEditModeOpen,
	wishlist,
	setWishlist,
}) => {
	const cancelButtonRef = useRef(null);

	// console.log(indx);
	// console.log(item);
	console.log(wishlist);
	console.log(setWishlist);
	const handleDelete = (event) => {
		if (confirm("Are you sure?")) {
			const updatedList = wishlist?.filter(
				(wishlistItem) => wishlistItem?.id != item?.id
			);
			console.log(updatedList);

			setWishlist(updatedList);

			toast.error("Item deleted");
			setViewDetailsOpen(false);
		}
	};

	return (
		<Transition.Root show={viewDetailsOpen} as={Fragment}>
			<Dialog
				as="td"
				className="relative z-100"
				initialFocus={cancelButtonRef}
				onClose={setViewDetailsOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-100"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
								<div>
									<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="size-6 text-indigo-900"
										>
											<path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
											<path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
										</svg>
									</div>
									<div className="absolute right-0 top-0  pr-4 pt-4 sm:block">
										<button
											type="button"
											className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => setViewDetailsOpen(false)}
										>
											<span className="sr-only">Close</span>
											<XMarkIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
									</div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title
											as="h3"
											className="text-base font-semibold leading-6 text-gray-900"
										>
											Wishlist details
										</Dialog.Title>
										<div className="mt-2 text-black gap-5 flex flex-col justify-center justify-items-center">
											<span className="mx-64 lg:mx-0"></span>

											<div>
												<span className="text-xl font-extrabold">
													Title:{" "}
												</span>
												<span className="text-lg">
													{item?.title}
												</span>
											</div>
											<div className="flex flex-row items-center justify-center gap-5">
												<span className="text-xl font-extrabold">
													Link:{" "}
												</span>
												{item?.link ? (
													<Link
														href={item?.link}
														target="_blank"
														className="hover:underline text-violet-900 hover:text-blue-700"
													>
														View item
													</Link>
												) : (
													<p className="text-red-500">
														No link found
													</p>
												)}
											</div>

											<div className="flex flex-row items-center justify-center gap-5">
												{" "}
												<span className="text-xl font-extrabold">
													Status:{" "}
												</span>
												<span className="text-lg">
													<p
														className={
															item?.status
																? "text-green-600"
																: "text-red-600"
														}
													>
														{item?.status ? "Done" : "Pending"}
													</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 items-center gap-2"
										onClick={() => {
											setViewDetailsOpen(false);
											setEditModeOpen(true);
										}}
									>
										<span>Edit</span>
										<PencilIcon
											className="h-4 w-4 hover:scale-110"
											aria-hidden="true"
										/>
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-red-500 sm:col-start-1 sm:mt-0  items-center gap-2"
										onClick={handleDelete}
										ref={cancelButtonRef}
									>
										<span>Delete</span>
										<TrashIcon
											className="h-4 w-4 hover:scale-110"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default WishlistDetails;
