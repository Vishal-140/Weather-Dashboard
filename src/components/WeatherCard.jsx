const WeatherCard = ({ weather }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{weather.city}</h2>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    className="w-20 h-20"
                />
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <p className="text-5xl font-bold text-blue-600">
                        {Math.round(weather.temp)}°C
                    </p>
                    <p className="text-lg text-gray-600 capitalize bg-blue-50 px-4 py-1 rounded-full">
                        {weather.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <p className="text-gray-500 text-sm mb-1">Humidity</p>
                        <div className="flex items-center">
                            <span className="text-2xl font-semibold text-gray-700">
                                {weather.humidity}%
                            </span>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <p className="text-gray-500 text-sm mb-1">Wind Speed</p>
                        <div className="flex items-center">
                            <span className="text-2xl font-semibold text-gray-700">
                                {(weather.wind * 3.6).toFixed(1)} km/h
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
