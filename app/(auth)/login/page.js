import { auth } from "@/auth";
import { LoginForm } from "./_components/login-form";
import SocialLogins from "./_components/social-logins";
import { redirect } from "next/navigation";
import DemoUserInfo from "./_components/DemoUserInfo";

const LoginPage = async () => {
	const session = await auth();
	if (session?.user) {
		redirect("/wishlist");
	}
	return (
		<>
			<div className="w-full flex-col h-screen flex items-center justify-center">
				<DemoUserInfo />
				<div className="container">
					<LoginForm />
					<SocialLogins />
				</div>
			</div>
		</>
	);
};

export default LoginPage;
