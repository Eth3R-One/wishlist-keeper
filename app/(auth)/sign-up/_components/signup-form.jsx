"use client";
import Link from "next/link";

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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export function SignupForm() {
	const router = useRouter();
	const [error, setError] = useState();

	const [passwordMisMatchError, setPasswordMisMatchError] = useState(false);

	const handleSubmit = async (event) => {
		event?.preventDefault();
		setError(false);

		try {
			const formDate = new FormData(event?.currentTarget);
			const firstName = formDate.get("first-name");
			const lastName = formDate.get("last-name");
			const email = formDate.get("email");
			const password = formDate.get("password");
			const confirmPassword = formDate.get("confirmPassword");

			if (password != confirmPassword) {
				throw new Error("Password mismatch");
			}
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
				}),
			});

			if (response.status == 403) {
				toast.error(response?.statusText ?? "Something went wrong");
				setError(response?.statusText ?? "Something went wrong");
				// throw new Error(response?.statusText);
			}

			if (response?.status == 201) {
				toast.success("Account created. Please login now");
				router.push("/login");
			}
		} catch (err) {
			console.log(err);
			toast.error(err?.message ?? "Something went wrong");
			setError(err?.message ?? "Something went wrong");
		}
	};

	return (
		<Card className="mx-auto max-w-sm bg-gray-100 dark:bg-gray-400">
			<CardHeader>
				<CardTitle className="text-xl text-center">Sign Up</CardTitle>
				<CardDescription className="dark:text-slate-200 text-indigo-400 text-center">
					Enter your information to create an account
				</CardDescription>
			</CardHeader>

			<CardContent>
				{error && (
					<div className="text-center py-2">
						<p className="text-red-500 bg-red-100 py-1 mx-10 rounded-sm border border-red-300 dark:border-red-600">
							{error}
						</p>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="first-name">First name</Label>
								<Input
									id="first-name"
									name="first-name"
									placeholder="Max"
									required
									className="bg-slate-200 text-indigo-950 placeholder:text-slate-500"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									id="last-name"
									name="last-name"
									placeholder="Robinson"
									required
									className="bg-slate-200 text-indigo-950 placeholder:text-slate-500"
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
								className="bg-slate-200 text-indigo-950 placeholder:text-slate-500"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								className="bg-slate-200 text-indigo-950 placeholder:text-slate-500"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="confirmPassword">Confirm Password</Label>
							<Input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								className="bg-slate-200 text-indigo-950 placeholder:text-slate-500"
							/>
						</div>
						<Button
							type="submit"
							className="w-full bg-indigo-700 dark:bg-indigo-950 text-slate-50"
						>
							Create an account
						</Button>
					</div>
				</form>
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link
						href="/login"
						className="hover:underline text-indigo-950 font-bold"
					>
						Sign in
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
