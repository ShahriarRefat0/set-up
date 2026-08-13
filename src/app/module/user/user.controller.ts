import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { UserService } from "./user.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

//    Create user
const createUser = catchAsync(async (req: Request, res: Response) => {

  const avatarBuffer = req.file?.buffer;

  const result = await UserService.createUser(req.body, avatarBuffer);
  ApiResponse.success(res, "User created successfully", result, 201);
});

//    Get all users
const getAllUsers = catchAsync(async (_req: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  ApiResponse.success(res, "Users fetched successfully", result);
});


//    Get single user
const getUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.params.id as string);
  ApiResponse.success(res, "User fetched successfully", result);
});

//   Update user avatar
 
//    Delete user avatar
const deleteUserAavatar = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUserAvatar(req.params.id as string);
  ApiResponse.success(res, "User fetched successfully", result);
});
export const UserController = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserAavatar
};
