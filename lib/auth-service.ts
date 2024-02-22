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
import { error } from "console";
import { revalidatePath } from "next/cache";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self?.id) {
    return;
  }

  const user = await db.user.findUnique({
    where: { externalUserId: self?.id },
  });

  if (!user) {
    throw new Error("Not found");
  }

  return user;
};

export const getSelfByUsername = async (username: string) => {

  const user = await db.user.findUnique({
    where: { username }
  });


  if (!user?.id) {
    throw new Error("User not found");
  }

  return user;
};