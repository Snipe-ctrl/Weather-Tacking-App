import '../sass/style.scss';


async function getWeather() {
    try {
        const response = await fetch('http://localhost:5001/weather');
        if (!response.ok) throw new Error('Failed to fetch weather data');
        return await response.json();
    } catch (error) {
        console.log('Error:', error.message);
    }
}

const temperatureElement = document.querySelector('.temperature');

const data = await getWeather();

temperatureElement.textContent = `${data.temp}`
