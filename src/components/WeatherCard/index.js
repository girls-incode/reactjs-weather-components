import React from 'react';
import Location from './Location';
import Condition from './Condition';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const WeatherCard = ({ temp, status, city, country, getWeather }) => {
  let bg = '',
    highColor = 0,
    lowColor = 0;

  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = Math.abs(highColor - 100);
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = Math.abs(highColor - 100);
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 5px !important;
    padding: 10px 0;
    border-radius: 10px;
    background: ${bg};
    .wi {
      margin: 10px 0;
      font-size: 1.9rem;
      text-shadow: 2px 2px 9px #555;
      color: white;
    }
  `;
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location city={city} country={country} getWeather={getWeather} />
        <i className={'wi wi-' + status}></i>
        <Condition temp={temp} status={status} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
