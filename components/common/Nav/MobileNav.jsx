"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
				<Button variant="link" size="icon" className="md:hidden">
					<MenuIcon />
				</Button>
			</SheetTrigger>

			<SheetContent side="left" onClick={(e) => setOpen(!open)}>
				<div className="flex flex-col items-start">
					{navBarlinks.map((item, index) => (
						<Link
							href={item?.link}
							key={index}
							onClick={() => {
								setOpen(false);
							}}
							className="gap-2 py-1"
						>
							{item?.name}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
