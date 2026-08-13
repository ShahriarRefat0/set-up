import { prisma } from "../../lib/prisma.js";
import { upload } from "../../middleware/multer.middelware.js";
import { deleteImage, uploadImage } from "../../utils/r2.js";

//  Create user 
const createUser = async (
  payload: {
    name: string;
    email: string;
    password: string;
  },
  avatarBuffer?: Buffer,
) => {

  let avatarKey: string | null = null;
  let avatarUrl: string | null = null;

  if (avatarBuffer) {
    const uploaded = await uploadImage(avatarBuffer, {folder: "profiles"})
    avatarKey = uploaded.key;
    avatarUrl = uploaded.url;
  }


  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      avatarKey: avatarKey,
      avaterUrl: avatarUrl, 
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
const deleteUserAvatar = async (id: string) => {

  const existing = await prisma.user.findUnique({ where: { id } });

  if (!existing) throw new Error("User not found");

  await deleteImage(existing.avatarKey);
  
  const user = await prisma.user.update({
    where:{id},
    data:{
      avatarKey: null,
      avaterUrl: null
    }
  })

  return user;
};

//  Delete user avatar


export const UserService = {
  createUser,
  getAllUsers,
  getUserById,
deleteUserAvatar
};
