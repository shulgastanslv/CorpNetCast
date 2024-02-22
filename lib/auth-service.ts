import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const useUser = () => {
  auth()
    .then((session) => {
      const user = session?.user;
      return user;
    })
    .catch((error) => {
      console.error('Error fetching user data', error);
      return null;
    });
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};


import { db } from "@/lib/db";
import { error } from "console";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self?.id) {
    throw new Error("Unauthorized");
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
  const self = await currentUser();

  const user = await db.user.findUnique({
    where: { username }
  });


  if (!user?.id) {
    throw new Error("User not found");
  }

  return user;
};