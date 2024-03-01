import NextAuth from "next-auth"
import UserRole from "@prisma/client";
import {PrismaAdapter} from "@auth/prisma-adapter";

import {db} from "@/lib/db";
import authConfig from "@/auth.config";
import {getUserById} from "./lib/user-service";

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                session.user.name = token.name;
                session.user.image = token.picture;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
                session.user.name = token.name;
                session.user.image = token.picture;
            }

            return session;
        },
        async jwt({token}) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;
            token.picture = existingUser.imageUrl;
            token.name = existingUser.username;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
});