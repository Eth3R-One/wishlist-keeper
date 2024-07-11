"use server";

import { signIn, signOut } from "@/auth";
import { dbConnect } from "@/service/mongo";

export async function doSignOut() {
	await signOut({
		callbackUrl: `${process.env.BASE_URL}/login`,
	});
}

export async function doSignInWithGoogle() {
	await dbConnect();
	await signIn("google", { callbackUrl: `${process.env.BASE_URL}/wishlist` });
}
