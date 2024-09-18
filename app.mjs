import express from "express";

const app = express();

app.get("/profiles", (req, res) => {
    return res.json({
        "data":  {
            "name": "john",
            "age": 20
        }
    });
});
