
import  express  from "express";
import {dirname, join} from "path"
import {fileURLToPath} from "url";

const app=express();
// se saca el directorio de nuestro proyecto para utilizarlo
const __dirname= dirname(fileURLToPath(import.meta.url));
// se establece el motor de plantillas 
app.set("view engine",'ejs');
// se inicializa el servidor
app.listen(3500);

//  se establece las carpeta que tendra los archivos estaticos
app.use(express.static(join(__dirname,"public")));


app.get ("/",(req,res)=>res.render("index"));
console.log(__dirname); 
console.log(__dirname); 