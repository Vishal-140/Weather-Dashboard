const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (city) => {
    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        if (!response.ok) {
            const errorMessages = {
                404: "City not found. Please check the city name.",
                401: "API key error. Please check your configuration."
            };
            throw new Error(errorMessages[response.status] || "Failed to fetch weather data. Please try again later.");
        }

        const data = await response.json();
        if (!data?.main || !data.weather?.[0]) {
            throw new Error("Invalid data received from weather service");
        }

        return {
            city: data.name,
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity,
            wind: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

export default fetchWeather;
