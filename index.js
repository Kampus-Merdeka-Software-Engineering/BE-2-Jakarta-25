import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import beritaRoutes from "./routes/beritas-routes.js";
import userRoutes from "./routes/users-routes.js";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/berita", beritaRoutes);
app.use("/users", userRoutes);

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    console.log(err);

    res.status(500).json({
        message: "Internal Server Error",
    });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});