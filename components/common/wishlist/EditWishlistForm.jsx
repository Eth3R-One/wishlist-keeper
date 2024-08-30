"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Pen } from "lucide-react";
import { Fragment, useRef } from "react";
import { toast } from "react-toastify";

const EditWishlistForm = ({
	editModeOpen,
	setEditModeOpen,
	item,
	indx,
	add,
	wishlist,
	setWishlist,
}) => {
	const cancelButtonRef = useRef(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const titleLength = formData.get("title").trim().length;
		if (titleLength == 0) {
			toast.error("What? Title can't be space only!!");
			return;
		}

		if (add) {
			setWishlist([
				...wishlist,
				{
					id: Date.now(),
					title: formData.get("title"),
					title: formData.get("title"),
					link: formData.get("link"),
					status: formData.get("done") ? true : false,
				},
			]);
		} else {
			const newData = {
				...item,
				title: formData.get("title"),
				title: formData.get("title"),
				link: formData.get("link"),
				status: formData.get("done") ? true : false,
			};

			const newWishlist = wishlist.map((prevItem) => {
				if (prevItem?.id == item?.id) {
					return newData;
				} else {
					return prevItem;
				}
			});

			setWishlist(newWishlist);
		}

		toast.success(`Item ${add ? "Added" : "Updated"}`);
		setEditModeOpen(false);
	};

	return (
		<Transition.Root show={editModeOpen} as={Fragment}>
			<Dialog
				as="td"
				className="relative z-10 "
				initialFocus={cancelButtonRef}
				onClose={setEditModeOpen}
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
					<div className="fixed inset-0 bg-indigo-200 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto ">
					<div className=" flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-indigo-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
								<div>
									<div className="mx-auto flex h-12 w-12 items-center justify-center border border-indigo-700 rounded-full ">
										<Pen className="text-indigo-700" />
									</div>
									<div className="absolute right-0 top-0  pr-4 pt-4 sm:block">
										<button
											type="button"
											className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											onClick={() => setEditModeOpen(false)}
										>
											<span className="sr-only">Close</span>
											<XMarkIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
									</div>
									<div className="mt-3 sm:mt-5">
										<Dialog.Title
											as="h3"
											className=" text-3xl font-semibold leading-6 text-center text-indigo-900"
										>
											{`${add ? "Add" : "Update"} Wishlist Details`}
										</Dialog.Title>
										<form className="mt-2" onSubmit={handleSubmit}>
											<div>
												<label
													htmlFor="title"
													className="block justify-start text-xl pt-2 font-medium leading-6 text-indigo-900"
												>
													Title
												</label>
												<div className="relative mt-2 rounded-md shadow-sm">
													<input
														type="title"
														name="title"
														id="title"
														defaultValue={item?.title}
														className="lock w-full rounded-md border-0 py-1.5 pl-10 text-indigo-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
														placeholder="Enter title"
														required
													/>
												</div>
											</div>

											<div>
												<label
													htmlFor="link"
													className="block justify-start text-xl pt-2 font-medium leading-6 text-indigo-900"
												>
													Product Link
												</label>
												<div className="relative mt-2 rounded-md shadow-sm">
													<input
														type="link"
														name="link"
														id="link"
														defaultValue={item?.link}
														className="block w-full rounded-md border-0 py-1.5 pl-10 text-indigo-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white "
														placeholder="Enter product link . . ."
													/>
												</div>
											</div>

											<div className="flex items-center gap-2 justify-items-center">
												<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
													<div className="mt-4 sm:col-span-2 sm:mt-0">
														<div className="max-w-lg space-y-6">
															<div className="relative flex gap-x-3">
																<div className="flex h-6 items-center">
																	<fieldset>
																		<input
																			id="done"
																			name="done"
																			type="checkbox"
																			className="h-4 w-4 rounded-lg border-gray-300 focus:ring-indigo-600 "
																		/>
																	</fieldset>
																</div>
																<div className="text-sm leading-6">
																	<label
																		htmlFor="done"
																		className="font-medium text-indigo-900"
																	>
																		Done
																	</label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
												<button
													type="submit"
													className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold  hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2"
												>
													{add ? "Add" : "Update"}
												</button>
												<button
													type="button"
													className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
													onClick={() => setEditModeOpen(false)}
													ref={cancelButtonRef}
												>
													Cancel
												</button>
											</div>
										</form>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default EditWishlistForm;
