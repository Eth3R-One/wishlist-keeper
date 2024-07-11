// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";

import { LoginForm } from "./_components/login-form";
import SocialLogins from "./_components/social-logins";

const LoginPage = () => {
	return (
		<>
			{/* <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6 mx-auto h-10 w-auto"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
								clipRule="evenodd"
							/>
						</svg>
						<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
							Sign in to your account
						</h2>
					</div>
					<div className="dark:bg-indigo-400 bg-indigo-200 px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 "
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-0 py-1.5 bg-white text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 autofill:placeholder:bg-white"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 "
								>
									Password
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 bg-white text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 autofill:bg-white"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>

						<div>
							<div className="relative mt-10">
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="w-full border-t border-gray-200" />
								</div>
								<div className="relative flex justify-center text-sm font-medium leading-6">
									<span className="bg-white px-6 text-gray-900">
										Or continue with
									</span>
								</div>
							</div>

							<div className="mt-6 bg-green-500 hover:bg-green-600 rounded-md">
								<a
									href="#"
									className="flex w-full items-center justify-center gap-3 rounded-md b px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
								>
									<span className="bg-white p-1 rounded-sm">
										<FcGoogle />
									</span>
									<span className="text-sm font-semibold leading-6 text-white ">
										Google
									</span>
								</a>
							</div>
						</div>
					</div>

					<p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-100">
						{`Don't have an account`}?{" "}
						<Link
							href="/sign-up"
							className="font-semibold leading-6 text-indigo-600 hover:underline dark:text-indigo-100"
						>
							Register
						</Link>
					</p>
				</div>
			</div> */}

			<div className="w-full flex-col h-screen flex items-center justify-center">
				<div className="container">
					<LoginForm />
					<SocialLogins />
				</div>
			</div>
		</>
	);
};

export default LoginPage;
