import NextAuth from "next-auth"
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import { getUserById } from "./lib/user-service";
import authConfig from "./auth.config";
import { randomUUID } from "crypto";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {}
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      

      if (account?.provider !== "credentials") return true;

      if(!user.id) return false;

      const existingUser = await getUserById(user.id);

      if (!existingUser?.id) return false;

      return true;
    },
    async session({ token, session }) {
    //   if (token.sub && session.user) {
    //     session.user.id = token.sub;
    //   }

    //   if (token.role && session.user) {
    //     session.user.role = token.role as UserRole;
    //   }

    //   if (session.user) {
    //     session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
    //   }

    //   if (session.user) {
    //     session.user.username = token.name;
    //     session.user.email = token.email;
    //     session.user.isOAuth = token.isOAuth as boolean;
    //   }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getUserById(
        existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.username = existingUser.username;
      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
