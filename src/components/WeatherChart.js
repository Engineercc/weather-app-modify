import React from 'react'
import { useState } from 'react';
import { CartesianGrid, LineChart,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts';
import { useGlobalContext } from './../context/weather_context';


const WeatherChart = () => {
  const { fiveDaysArr, days, tabCount, kelvinValue } = useGlobalContext();
    const modifiedArray = fiveDaysArr.map((item, index) => {
      let d = new Date(item[index].dt * 1000);
      let dayName = days[d.getDay()];
      const temp = Math.round(item[tabCount].main.temp - kelvinValue);
      const feelsLike = Math.round(
        item[tabCount].main.feels_like - kelvinValue
      );
      const minTemp = Math.round(item[tabCount].main.temp_min - kelvinValue);
      const maxTemp = Math.round(item[tabCount].main.temp_max - kelvinValue);
      const humidity = item[tabCount].main.humidity;
      const time = item[index].dt_txt.slice(11, 16);
      return {
        currentDay: dayName,
        time: time,
        temperature: temp,
        humidity: humidity,
        feelsLike: feelsLike,
        minTemp: minTemp,
        maxTemp: maxTemp,
      };
    });
  return (
    <LineChart
      width={1000}
      height={500}
      data={modifiedArray}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="minTemp"
        name="Min. Temperature"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="maxTemp"
        name="Max. Temperature"
        stroke="#82ca9d"
      />
    </LineChart>
  );
}

export default WeatherChart