import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import useWeather from "../hooks/useWeather";

function Home() {
    const { weather, loading, error, searchHistory, handleSearch } = useWeather();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Weather Dashboard</h1>
                
                <SearchBar onSearch={handleSearch} />
                
                {loading ? <Loader /> : error ? (
                    <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                ) : weather && <WeatherCard weather={weather} />}

                {!!searchHistory.length && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
                        <div className="flex gap-2 flex-wrap">
                            {searchHistory.map((city, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSearch(city)}
                                    className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-50 shadow-sm transition-all hover:shadow"
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
