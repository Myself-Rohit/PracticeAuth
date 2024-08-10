import express from "express";
import { loginRoute, signupRoute } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupRoute);
router.post("/signin", loginRoute);

export default router;
