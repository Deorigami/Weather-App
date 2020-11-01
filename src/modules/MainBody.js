import React, { forwardRef, useImperativeHandle } from "react";
import "./MainBody.css";
import cloudy from "../assets/icon/try.png";

const MainBody = forwardRef(({ weather }, ref) => {
  const days = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
    "Minggu",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  useImperativeHandle(ref, () => ({
    condition,
  }));

  const condition = () => {
    if (weather.weather[0].id <= 232) {
      return "thunderstorm";
    } else if (weather.weather[0].id <= 321) {
      return "drizzle";
    } else if (weather.weather[0].id <= 531) {
      if (weather.weather[0].id <= 504) {
        return "lightRain";
      } else if (weather.weather[0].id === 511) {
        return "freezingRain";
      } else if (weather.weather[0].id <= 531) {
        return "heavyRain";
      }
    } else if (weather.weather[0].id <= 622) {
      return "snow";
    } else if (weather.weather[0].id === 800) {
      return "clearSky";
    } else if (weather.weather[0].id <= 804) {
      return "cloudy";
    }
  };

  return (
    <div className="mainBody">
      <div className="cityInfo">
        <h1>{weather.name}</h1>
      </div>
      <div className="dateInfo">
        <h5>
          {days[date.getDay()] +
            ", " +
            date.getDate() +
            " - " +
            months[date.getMonth()] +
            " - " +
            date.getFullYear()}
        </h5>
      </div>
      <div className="tempInfo">
        <h1>{Math.round(weather.main.temp)}°c</h1>
        <div className={"best " + condition()}>
          <img src={cloudy} alt="x" />
        </div>
        <p>{`${Math.round(weather.main.temp_min)}°C / ${Math.round(
          weather.main.temp_max
        )}°C`}</p>
      </div>
    </div>
  );
});

export default MainBody;
