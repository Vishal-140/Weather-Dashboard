import { useState } from "react"; 
import fetchWeather from "../utils/fetchWeather";

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchHistory, setSearchHistory] = useState(
        () => JSON.parse(localStorage.getItem("searchHistory") || "[]")
    );

    const getWeather = async (query) => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchWeather(query);
            setWeather(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (city) => {
        await getWeather(city);
        if (!error) {
            const updatedHistory = [city, ...searchHistory.filter(item => item !== city)].slice(0, 5);
            setSearchHistory(updatedHistory);
            localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
        }
    };

    return { weather, loading, error, searchHistory, handleSearch };
};

export default useWeather;