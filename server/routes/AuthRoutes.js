import { Router } from "express";
import { checkUser, onBoardUser } from "../controllers/AuthController.js";


//authentication route
const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);

export default router;