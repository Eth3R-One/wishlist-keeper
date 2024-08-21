import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import { userModel } from "./models/user-model";
import mongoClientPromise from "./database/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth({
	trustHost: true,
	...authConfig,
	adapter: MongoDBAdapter(mongoClientPromise, {
		databaseName: process.env.ENVIRONMENT,
	}),
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				if (credentials == null) return null;

				try {
					const user = await userModel
						.findOne({
							email: credentials?.email,
						})
						.lean();

					if (user) {
						const isMatch = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isMatch) {
							return user;
						} else {
							console.error("password mismatch");
							throw new Error("Check your password");
						}
					} else {
						console.error("User not found");
						throw new Error("User not found");
					}
				} catch (err) {
					console.error(err);
					throw err;
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},
		async session({ session, user, token }) {
			session.user.id = token?.id;
			return session;
		},
	},
});
