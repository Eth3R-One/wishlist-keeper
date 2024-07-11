import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	name: {
		required: true,
		type: String,
	},
	email: {
		required: true,
		type: String,
	},
	password: {
		required: true,
		type: String,
	},
	phone: {
		required: false,
		type: String,
	},
});

export const userModel =
	mongoose?.models?.Users ?? mongoose?.model("Users", userSchema);
