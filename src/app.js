import express from "express";
import employessRoutes from "./routes/employess.routes.js";
import indexRoutes from './routes/index.routes.js';


const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use('/api/', employessRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app