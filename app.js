const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT: ", PORT);
});

app.post("/status", async (req, res) => {
    const { city } = req.body;
    
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    res.send(city);
});
