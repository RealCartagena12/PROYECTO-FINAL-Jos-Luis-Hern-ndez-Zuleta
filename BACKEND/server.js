const express = require("express");
const cors = require("cors"); 
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/backend.routes");
const jugadorRoutes = require("./routes/jugador.routes");

// Cargar variables de entorno
dotenv.config();

// Crear app
const app = express();



// CORS 
app.use(cors({
    origin: ["http://127.0.0.1:5500", "null"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));



// Parseo JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas API
app.use("/api/users", userRoutes);
app.use("/api/jugadores", jugadorRoutes);


// Comprobar estado del server
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date() });
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

