import { prisma } from "../../lib/prisma.js";

//  Create user 
const createUser = async (
  payload: {
    name: string;
    email: string;
    password: string;
  }
) => {

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    },
  });

  return user;
};


//  Get all users
const getAllUsers = async () => {
  return prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
};


//  Get single user
const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("User not found");
  return user;
};

//  Update user avatar


//  Delete user avatar


export const UserService = {
  createUser,
  getAllUsers,
  getUserById,
};
