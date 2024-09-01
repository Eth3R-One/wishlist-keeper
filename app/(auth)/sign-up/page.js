import { auth } from "@/auth";
import SocialLogins from "../login/_components/social-logins";
import { SignupForm } from "./_components/signup-form";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
	const session = await auth();
	if (session?.user) {
		redirect("/wishlist");
	}
	return (
		<div className="w-full flex-col h-screen flex items-center justify-center">
			<div className="container">
				<div className="bg-gray-100 mx-auto max-w-sm dark:bg-gray-200 rounded  border border-rose-300 my-5">
					<p className="text-rose-600 text-center">{`There's a demo user info given in login page`}</p>
				</div>
				<SignupForm />
				<SocialLogins />
			</div>
		</div>
	);
};

export default SignUpPage;
