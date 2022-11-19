import {Router} from "express";

const router = Router();

router.post("/backend/registro",(req,res)=>res.render("registro"));

export default router

