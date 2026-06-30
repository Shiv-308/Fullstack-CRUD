import express from "express"
import cors from "cors"
import connectDB from "./connect.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()
const PORT = 5000

app.use(express.json());
app.use(cors());

connectDB();

app.use("/users", userRoutes);

app.get("/check", (req, res) =>{
    res.send("Backend Running ..");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})