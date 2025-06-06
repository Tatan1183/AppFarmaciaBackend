// 🚀 Configuración y puesta en marcha del servidor Express para la API de Farmacia

import express from "express"; // 🕸️Framework web para Node.js
import dotenv from "dotenv"; // 🌿Para manejar variables de entorno
import cors from "cors"; // 🌐Middleware para habilitar CORS
import connectDB from "./config/db.js"; // 🔗Función para conectar con la base de datos MongoDB

// 📦 Importación de rutas para los distintos recursos
import medicamentosRoutes from "./routes/medicamentos.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

dotenv.config(); // ⚙️ Carga variables de entorno desde archivo .env

// 🛡️ Middleware para permitir solicitudes desde otros orígenes (CORS)
app.use(cors());

// 📥 Middleware para parsear cuerpos de solicitudes en formato JSON
app.use(express.json());

// 🔌 Establecer conexión con la base de datos MongoDB
connectDB();

// 🛣️ Configuración de rutas para las diferentes entidades de la API
app.use("/api/medicamentos", medicamentosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/empleados", empleadosRoutes);

// 📍 Definición del puerto para el servidor
const port = process.env.PORT || 4000;

// 📡 Ruta raíz para verificar que la API está funcionando
app.get("/", (req, res) => {
  res.send("API de Farmacia funcionando");
});

// 🎧 Inicio del servidor Express escuchando en el puerto definido
app.listen(port, () => {
  console.log(`🚀 Servidor en http://localhost:${port}`);
});