import {Router} from "express";
import comtroller from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", controller.get);

export default userRouter;
