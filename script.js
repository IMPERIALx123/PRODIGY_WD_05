const apiKey =  '7d65da453e3b7a9dff231f62b4d4317d';
const button = document.getElementById('getWeather');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weatherInfo');
const message = document.getElementById('message');
const temperature = document.getElementById('temperature');
const conditions = document.getElementById('conditions');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

button.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    } else {
        message.textContent = 'Please enter a city name.';
    }
});

async function getWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
        displayWeather(data);
    } else {
        message.textContent = 'Location not found.';
        temperature.textContent = '';
        conditions.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
    }
}

function displayWeather(data) {
    message.textContent = `Weather in ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    conditions.textContent = `Conditions: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
