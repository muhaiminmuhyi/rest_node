import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getPacar, postPacar } from "../controllers/Pacar.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.get('/pacar', verifyToken, getPacar);
router.post('/users', Register);
router.post('/pacar', postPacar);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;