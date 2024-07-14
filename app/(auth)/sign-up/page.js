import SocialLogins from "../login/_components/social-logins";
import { SignupForm } from "./_components/signup-form";

const SignUpPage = () => {
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
