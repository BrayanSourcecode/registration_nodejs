
import  express  from "express";
import {dirname, join} from "path"
import {fileURLToPath} from "url";
import indexRoutes from "./routes/index.js";
import backendRoutes from "./routes/backend/registro.js";


const app=express();
// se saca el directorio de nuestro proyecto para utilizarlo
const __DIR__=dirname(fileURLToPath(import.meta.url));
// se establece el motor de plantillas 
app.set("view engine",'ejs');


// middleware

// se inicializa el servidor
app.listen(3500);

// se establece las carpeta que tendra los archivos estaticos
app.use(express.static(join(__DIR__,"public")));
// ruta de formulario osea la index

app.use(indexRoutes);
app.use(backendRoutes);