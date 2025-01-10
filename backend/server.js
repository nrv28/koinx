const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/apiRoutes");
const fetchCryptoData = require("./jobs/fetchCryptoData");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello Working Perfectly");
});
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

// Run the background job every 2 hours
setInterval(fetchCryptoData, 2 * 60 * 60 * 1000);

// Initial fetch on server start
fetchCryptoData();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
