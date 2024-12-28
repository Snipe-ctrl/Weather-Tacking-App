const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

const API_KEY = process.env.WEATHER_API_KEY;
const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/97338/?key=${API_KEY}`;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/weather', async (req, res) => {
    
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            console.error(`Failed to catch weather data: ${response.statusText}`);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }

        const data = await response.json();
        console.log('Weather API response: ', data);

        const todayISO = new Date().toISOString().split('T')[0];
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

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});