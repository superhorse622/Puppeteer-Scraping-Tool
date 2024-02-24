import express from 'express';
import scrapeZillow from './src/index';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.post("/status", async (req, res) => {
    const { city } = req.body;
    
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    try {
        await scrapeZillow(city);
        res.json({ message: 'Scraping completed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    res.send(city);
});
