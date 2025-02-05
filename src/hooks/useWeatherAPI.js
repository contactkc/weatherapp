import { useState } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const useWeatherAPI = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );

      if (!res.ok) {
        throw new Error('Could not fetch weather data');
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, error, loading, fetchWeather };
};

export default useWeatherAPI;
