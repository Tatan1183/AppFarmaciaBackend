import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import medicamentosRoutes from "./routes/medicamentos.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la BD
connectDB();

// Rutas
app.use("/api/medicamentos", medicamentosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/empleados", empleadosRoutes);

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API de Farmacia funcionando");
});

app.listen(port, () => {
  console.log(`🚀 Servidor en http://localhost:${port}`);
});

