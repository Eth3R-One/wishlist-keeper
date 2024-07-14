import { getUserByEmail } from "@/app/actions/userActions";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
	const { firstName, lastName, email, password } = await request.json();

	try {
		await dbConnect();

		const user = await getUserByEmail(email);
		if (user) {
			return new NextResponse("", {
				status: 403,
				statusText: "User with provided email exists",
			});
			// throw new Error("User with provided email exists");
		}
		const hashedPass = await bcrypt.hash(password, 5);

		const newUser = {
			name: `${firstName} ${lastName}`,
			email,
			password: hashedPass,
		};

		const createdUser = await userModel.create(newUser);

		return new NextResponse("User has been created", { status: 201 });
	} catch (err) {
		console.log(err);
		return new NextResponse(err, { status: 500 });
	}
};
