const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true,  // enable cookies, needed for authentication
    optionsSuccessStatus: 200  // some legacy browsers (IE11, various SmartTVs) choke on 204
}))


// import router
const router = require("./routes/ai.routes");
app.use('/ai', router);


app.get("/", (req,res) => {
    res.send(`Server is running on port ${process.env.PORT}`)
    // main("only generate the code of bubble sort in c++");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})