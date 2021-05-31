import express from 'express';

import {
    getUsers, createUser
  } from "../controllers/users.js";

//router oluşturduk ve exspressten routeri çağırdık
const router = express.Router()

router.get("/", getUsers)
router.post("/", createUser)

export default router;
//module.exports = router