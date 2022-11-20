import {Router} from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const router = Router();
const urlencoded=bodyParser.urlencoded({extended:false});

router.post("/backend/registro",urlencoded,(req,res)=>{
// recibimos las 3 variables con body paser
    let name=req.body.name;
    let email= req.body.email;
    let password=req.body.password;
// let user=/[0-9]/;  
  if(name.match(/[0-9 ''()]/)){
        res.send("el campo name es numerico");
    }else{
        res.send("no se encontraron numeros");
    }
    
});

export default router

 