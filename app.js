import dotenv from "dotenv";

dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("this is the entry page");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
