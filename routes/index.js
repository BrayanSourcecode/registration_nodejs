// importamos el  modulo router de expres no importamos toida la libreria
import {Router} from "express";

const router = Router();

router.get ("/",(req,res)=>res.render("index"));

router.get ("/contac",(req,res)=>res.render("contac"));


export default router;

