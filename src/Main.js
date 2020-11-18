import React from 'react';
import WeatherEngine from './components/WeatherEngine';

const Main = () => {
  return (
    <main className='app'>
      <WeatherEngine location='madrid' />
      <WeatherEngine location='paris' />
      <WeatherEngine location='dubai' />
    </main>
  );
};

export default Main;
