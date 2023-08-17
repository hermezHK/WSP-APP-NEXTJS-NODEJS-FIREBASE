import { Router } from "express";
import { checkUser, getAllUsers, onBoardUser } from "../controllers/AuthController.js";


//authentication route
const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);

export default router;