import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname,'public')));

app.get('/', (req,res) => {
    res.render('login')
}); 

app.get('/inicio', (req, res) => {
    res.render('inicio'); 
});

app.post('/resultados', (req, res) => {
    const { servicio,tiposervicio, ubicacion, potencia, frecuencia, altura, ganancia,pregunta } = req.body;
    res.redirect(`/mostrar?servicio=${servicio}&tiposervicio=${tiposervicio}&ubicacion=${ubicacion}&potencia=${potencia}&frecuencia=${frecuencia}&altura=${altura}&ganancia=${ganancia}&pregunta=${pregunta}`);
});

app.get('/mostrar', (req, res) => {
    const { servicio,tiposervicio, ubicacion, potencia, frecuencia, altura, ganancia,pregunta } = req.query;
    res.render('resultados', { servicio, tiposervicio, ubicacion, potencia, frecuencia, altura, ganancia, pregunta });
});

app.listen(process.env.PORT || 3000);
console.log(`Servidor ejecutandose en el puerto ${process.env.PORT || 3000}`);