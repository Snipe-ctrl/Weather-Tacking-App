const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.get('/weather', async (req, res) => {
    const zipCode = req.query.zip || '97338';
    console.log(`Recieved zip: ${zipCode}`)
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipCode}/?key=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        console.log(`API response status: ${response.status}`);

        if (!response.ok) {
            console.error(`Failed to catch weather data: ${response.statusText}`);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }

        const data = await response.json();

        const todayISO = new Date().toLocaleDateString('en-CA');
        const todaysData = data.days.find(day => day.datetime === todayISO);

        if (!todaysData) {
            console.error('No data found for today');
            return res.status(404).json({ error: 'No data found for today' })
        }

        res.json(todaysData);
    } catch (error) {
        console.error('Error in /weather endpoint: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});