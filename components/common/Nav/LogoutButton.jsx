"use client";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const LogoutButton = () => {
	return (
		<button
			onClick={() => {
				signOut({
					callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
				});
				toast.info("User logged out!");
			}}
			className="p-1 bg-rose-600 rounded-md px-2 text-white"
		>
			Log out
		</button>
	);
};

export default LogoutButton;
