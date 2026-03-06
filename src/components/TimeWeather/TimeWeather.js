import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './TimeWeather.css';

const AUSTIN_LAT = 30.2672;
const AUSTIN_LNG = -97.7431;
const AUSTIN_TZ = 'America/Chicago';
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

// WMO weather codes to descriptions
const weatherDescriptions = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Drizzle',
    55: 'Dense drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 80: 'Rain showers',
    81: 'Moderate showers', 82: 'Violent showers', 95: 'Thunderstorm',
};

function getWeatherDesc(code) {
    return weatherDescriptions[code] || 'Unknown';
}

function celsiusToFahrenheit(c) {
    return Math.round(c * 9 / 5 + 32);
}

function getCachedWeather(key) {
    try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (Date.now() - data.timestamp > CACHE_TTL) {
            sessionStorage.removeItem(key);
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

function setCachedWeather(key, data) {
    try {
        sessionStorage.setItem(key, JSON.stringify({ ...data, timestamp: Date.now() }));
    } catch {
        // Silently fail if sessionStorage is full
    }
}

function TimeWeather() {
    const { theme } = useContext(ThemeContext);
    const [austinTime, setAustinTime] = useState('');
    const [austinWeather, setAustinWeather] = useState(null);

    // Update Austin clock every second
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            try {
                const timeStr = now.toLocaleTimeString('en-US', {
                    timeZone: AUSTIN_TZ,
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                });
                setAustinTime(timeStr);
            } catch {
                setAustinTime(now.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                }));
            }
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // Fetch Austin weather on mount
    useEffect(() => {
        const fetchWeather = async () => {
            const cacheKey = `weather_${AUSTIN_LAT.toFixed(2)}_${AUSTIN_LNG.toFixed(2)}`;
            const cached = getCachedWeather(cacheKey);
            if (cached) {
                setAustinWeather(cached);
                return;
            }

            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${AUSTIN_LAT}&longitude=${AUSTIN_LNG}&current_weather=true&temperature_unit=celsius`
                );
                if (!res.ok) throw new Error('Weather API failed');
                const json = await res.json();
                const weather = {
                    temp: celsiusToFahrenheit(json.current_weather.temperature),
                    code: json.current_weather.weathercode,
                    desc: getWeatherDesc(json.current_weather.weathercode),
                };
                setCachedWeather(cacheKey, weather);
                setAustinWeather(weather);
            } catch {
                // Silently fail
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className="timeweather" style={{ color: theme.tertiary }}>
            <div className="timeweather--row">
                <div className="timeweather--item">
                    <span className="timeweather--city">Austin</span>
                    <span className="timeweather--separator">•</span>
                    <span className="timeweather--time">{austinTime}</span>
                    {austinWeather && (
                        <>
                            <span className="timeweather--separator">,</span>
                            <span className="timeweather--weather">
                                {austinWeather.temp}°F, {austinWeather.desc}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TimeWeather;
