//🌿CONEXIÓN A MONGODB PARA EL PROYECTO 'AppFarmacia'💊
// Archivo encargado de establecer la conexión a la base de datos

import mongoose from "mongoose"; // Importa Mongoose para manejar MongoDB
import dotenv from "dotenv"; // Importa dotenv para gestionar variables de entorno

/// Carga las variables del archivo .env (como MONGO_URI)
dotenv.config();

// Función asíncrona para conectar a la base de datos MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const fecha = new Date().toLocaleString(); // Obtiene la fecha y hora actual en formato local

    // Mensajes informativos en consola si la conexión es exitosa
    console.log("🟢 Conectado a MongoDB");
    console.log(
      "🎉 ¡Felicidades, estudiante UTS! Te has conectado exitosamente a la base de datos 'Farmacia'💪📚."
    );
    console.log(`📦 Proyecto: AppFarmacia`);
    console.log(`🕒 Fecha y hora: ${fecha}`);
    console.log("🚀 ¡Sigue adelante, el conocimiento es poder! 💡");
  } catch (error) {
    // Muestra error en consola si la conexión falla y termina el proceso
    console.error("🔴 Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

// Exporta la función para ser usada en otras partes del proyecto
export default connectDB;
