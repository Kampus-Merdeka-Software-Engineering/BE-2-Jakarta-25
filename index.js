import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import beritaRoutes from "./routes/beritas-routes.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/berita", beritaRoutes);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.all('/*', (request, response) => {
    response.status(404);
    response.json({
        message: "niatnya nanti buat halaman yang ga ada route",
    });
});