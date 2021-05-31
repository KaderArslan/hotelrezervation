import express from "express";

import { signUp, signIn } from "../controller/admin.js";
import { createRoom, deleteRoom, getRooms, updateReservation } from "../controller/rooms.js";
import {getUsers,createUsers} from "../controller/users.js";

const router = express.Router();
//admin
router.post("/", signUp);
router.post("/", signIn);
//kullanıcı
router.post("/",createUsers);
router.get("/",getUsers);

router.get("/rooms",getRooms);
router.post("/rooms",createRoom);
router.put("/rooms/:id",updateReservation);
router.delete('/rooms/:id',deleteRoom);

export default router;
