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
				<SignupForm />
				<SocialLogins />
			</div>
		</div>
	);
};

export default SignUpPage;
