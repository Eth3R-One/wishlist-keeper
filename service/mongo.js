import mongoose from "mongoose";

const MONGODB_URI = process?.env?.MONGODB_CONNECTION_STRING;
const cached = {};

export const dbConnect = async () => {
	if (!MONGODB_URI) {
		throw new Error(
			"Please define the MONGODB_URI environment variable inside .env"
		);
	}
	if (cached.connection) {
		return cached.connection;
	}
	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};
		cached.promise = mongoose.connect(MONGODB_URI, opts);
	}
	try {
		cached.connection = await cached.promise;
	} catch (e) {
		cached.promise = undefined;
		console.error(e);
		throw e;
	}

	return cached.connection;
};
