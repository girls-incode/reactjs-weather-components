import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/index';
import PulseLoader from 'react-spinners/PulseLoader';

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    status: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=15d0db32b7939792f42514bfab874210`
      );
      const data = await res.json();
      setWeather({
        temp: data.main.temp,
        status: data.weather[0].main,
        country: data.sys.country,
        city: data.name,
      });
    } catch (err) {
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <>
      {!error ? (
        !loading ? (
          <>
            <WeatherCard
              temp={weather.temp}
              status={weather.status}
              city={weather.city}
              country={weather.country}
              getWeather={getWeather}
            />
          </>
        ) : (
          <div className='loader'>
            <PulseLoader size={15} color='#aa0055' />
          </div>
        )
      ) : (
        <div>
          There's some error
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      )}
    </>
  );
};

export default WeatherEngine;
