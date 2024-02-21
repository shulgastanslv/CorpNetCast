import { auth } from "@/auth";


export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  // if (!self || !self.name) {
  //   throw new Error("Unauthorized");
  // }

  const user = await db.user.findUnique({
    where: { externalUserId: self.id },
  });

  if (!user) {
    throw new Error("Not found");
  }

  return user;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  const user = await db.user.findUnique({
    where: { username }
  });

  if (!user) {
    throw new Error("User not found");
  }


  return user;
};