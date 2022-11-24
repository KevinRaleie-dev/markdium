import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authProviders: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID as string, // add clientId from .env
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET as string // add clientSecret from .env
        }),
    ],
}

export default NextAuth(authProviders)