"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
	const [error, setError] = useState("");
	const router = useRouter();

	async function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		// try {
		// 	// const response = await credntialLogin(formData);

		// 	if (response?.error) {
		// 		console?.error(response?.error);
		// 		setError(response?.error);
		// 	} else {
		// 		router.push("/courses");
		// 	}
		// } catch (e) {
		// 	console.error(e.message);
		// 	setError("An unexpected error occurred. Please try again.");
		// }
	}

	return (
		<Card className="mx-auto max-w-sm w-full bg-gray-100 dark:bg-gray-400">
			<CardHeader>
				<CardTitle className="text-indigo-950 text-2xl text-center">
					Login
				</CardTitle>
				<CardDescription className="text-center dark:text-indigo-950">
					Enter your email below to login to your account
				</CardDescription>
				{error && <div className="text-red-600">{error}</div>}
			</CardHeader>
			<CardContent>
				<form onSubmit={onSubmit}>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email" className="text-indigo-950">
								Email
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								className="bg-slate-200 text-indigo-950"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password" className="text-indigo-950">
									Password
								</Label>
							</div>
							<Input
								id="password"
								name="password"
								type="password"
								className="bg-slate-200"
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full dark:bg-indigo-800 dark:hover:bg-indigo-900 text-slate-100 bg-indigo-600 hover:bg-indigo-700 "
						>
							Login
						</Button>
					</div>
				</form>
				<div className="mt-4 text-center text-sm">
					Don&apos;t have an account?{" "}
					<p>
						<Link
							href="/sign-up"
							className="font-bold text-indigo-500 dark:text-indigo-950 hover:underline"
						>
							Register
						</Link>
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
