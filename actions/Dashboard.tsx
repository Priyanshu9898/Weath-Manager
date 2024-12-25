// "use server";

// import { DB } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";

// export async function createAccount(data) {
//   try {
//     const { userId } = await auth();

//     console.log(userId);

//     if (!userId) {
//       throw new Error("Unauthorized!!");

//     }

//     // Create account
//     const user = await DB.user.findUnique({
//       where: {
//         clerkUserId: userId,
//       },
//     });

//     if (!user) {
//       throw new Error("User not found");
//     }

//     const account = await DB.account.create({
//       data: {
//         userId: user.id,
//       },
//     });

//     return account;

//   } catch (error) {
//     console.error(error);
//   }
// }
