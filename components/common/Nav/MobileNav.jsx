"use client";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";

import { navBarlinks } from "@/links/navbarLinks";
import Link from "next/link";

export default function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			{/* This button will trigger open the mobile sheet menu */}
			<SheetTrigger asChild>
				<Button
					variant="link"
					size="icon"
					className="dark:text-indigo-950 md:hidden mx-1 "
					aria-label="menu button"
				>
					<MenuIcon className="dark:text-indigo-200" />
				</Button>
			</SheetTrigger>

			<SheetContent side="left" onClick={(e) => setOpen(!open)}>
				<VisuallyHidden.Root>
					<SheetTitle>Menu</SheetTitle>
					<SheetDescription>Mobile menu</SheetDescription>
				</VisuallyHidden.Root>
				<div className=" min-h-screen">
					<div className="flex flex-col p-10 items-start ">
						{navBarlinks.map((item, index) => (
							<Link
								href={item?.link}
								key={index}
								onClick={() => {
									setOpen(false);
								}}
								className="gap-1 text-l py-1 m-2 pl-5"
							>
								{item?.name}
							</Link>
						))}
					</div>
					<div className="sticky top-[100vh] pb-10 mb-20 pt-5">
						<div className=" flex flex-row items-center justify-center gap-5">
							<Link
								href={"/login"}
								className=" px-5 py-2 bg-indigo-600 rounded-lg text-white"
							>
								Login
							</Link>
							<Link
								href={"/sign-up"}
								className=" px-5 py-2 bg-fuchsia-600 rounded-lg text-white "
							>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
