"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogins = () => {
	return (
		<>
			<div className="text-center text-md mt-3 text-gray-500 dark:text-slate-200">
				or Signup with
			</div>
			<div className="flex justify-center gap-2">
				<Button
					className="mt-4 py-2  bg-green-500 hover:bg-green-600 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
					onClick={async () => {
						await signIn("google", {
							callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/wishlist`,
						});
					}}
				>
					<div className="rounded-md">
						<span className="flex w-full items-center justify-center gap-3 rounded-md b px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
							<span className="bg-white p-1 rounded-lg">
								<Image
									src={"/google.png"}
									height={24}
									width={24}
									alt="google image"
								/>
							</span>
							<span className="text-sm font-semibold leading-6 text-white ">
								Google
							</span>
						</span>
					</div>
				</Button>
			</div>
		</>
	);
};

export default SocialLogins;
