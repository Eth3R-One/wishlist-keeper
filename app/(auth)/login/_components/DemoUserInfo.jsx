"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

/**
 * user:demo@wishlist.com
 * pass:1234
 */
const USER_EMAIL = "demo@wishlist.com";
const USER_PASSWORD = "1234";

const DemoUserInfo = () => {
	return (
		<div className="m-10">
			<Card className="mx-auto max-w-sm w-full opacity-80 bg-gray-50">
				<CardHeader>
					<CardDescription className="text-center text-l dark:text-indigo-950">
						Credentials of a demo user is given below
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email" className="text-indigo-950">
								Email
							</Label>

							<span
								className="flex justify-between border rounded-md bg-blue-200"
								title="Copy Demo User Email"
								onClick={() => {
									navigator.clipboard.writeText(USER_EMAIL);
									toast.success("Demo email copied");
								}}
							>
								<p className="text-green-700 p-2 rounded-md font-bold cursor-pointer">
									{USER_EMAIL}
								</p>
								<button className="bg-blue-700 px-2 rounded text-blue-200 hover:scale-110">
									COPY
								</button>
							</span>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password" className="text-indigo-950">
									Password
								</Label>
							</div>
							<span
								className="flex justify-between border rounded-md bg-blue-200 cursor-pointer"
								title="Copy Demo User Password"
								onClick={() => {
									navigator.clipboard.writeText(USER_PASSWORD);
									toast.success("Demo password copied");
								}}
							>
								<p className="text-green-700 p-2 rounded-md font-bold">
									{USER_PASSWORD}
								</p>
								<button className="bg-blue-700 px-2 rounded text-blue-200 hover:scale-110">
									COPY
								</button>
							</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default DemoUserInfo;
