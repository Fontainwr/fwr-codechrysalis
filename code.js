// Fetch news headlines and display them
function fetchAndDisplayNews(topic) {
    dataSource.getNews(topic)
        .then(news => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Clear previous news items
            news.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;
                newsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

// Fetch weather information and display it
function fetchAndDisplayWeather(city) {
    dataSource.getWeather(city)
        .then(weather => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.textContent = `Current Temperature: ${weather.temperature}°C`;
            const forecast = document.createElement('p');
            forecast.textContent = `Next 24 Hours - Temperature: ${weather.forecast[0]}°C, Rainfall: ${weather.forecast[1]} mm`;
            weatherInfo.appendChild(forecast);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}

// Enable test mode
dataSource.enableTestMode();

// Display news headlines
fetchAndDisplayNews('business');

// Display weather information
fetchAndDisplayWeather('tokyo');
