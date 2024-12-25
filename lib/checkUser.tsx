import { currentUser } from "@clerk/nextjs/server";
import { DB } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const loggedInUser = await DB.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const newUserName = `${user.firstName} ${user.lastName}`;

    const newUser = await DB.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: newUserName,
        imageUrl: user.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};
