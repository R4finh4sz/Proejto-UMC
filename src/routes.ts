import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryConstroller";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { AutenticateUserController } from "./controller/autentication/AutenticateUserController";


const router = Router();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const createCategoryController  = new CreateCategoryController();
const listCategoryController  = new ListCategoryController();
const autenticateUserService = new AutenticateUserController();

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.post("/category", createCategoryController.handle);
router.get("/category", listCategoryController.handle);
router.post("/login", autenticateUserService.handle);

export {router} 