"use server";

import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";

export async function getUserByEmail(email) {
	try {
		await dbConnect();
		const user = await userModel.findOne({ email }).lean();
		return user;
	} catch (err) {
		throw err;
	}
}
