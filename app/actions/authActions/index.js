"use server";

import { signIn, signOut } from "@/auth";
import { dbConnect } from "@/service/mongo";

export async function doSignOut() {
	await signOut({
		callbackUrl: `${process.env.BASE_URL}/login`,
	});
}

export async function doSignInWithGoogle() {
	try {
		await dbConnect();
		await signIn("google", {
			callbackUrl: `${process.env.BASE_URL}/wishlist`,
		});
	} catch (err) {
		console.log(err);
	}
}

export async function credntialLogin(formData) {
	try {
		await dbConnect();
		const response = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});
		return response;
	} catch (err) {
		err;
		// throw err;
	}
}
