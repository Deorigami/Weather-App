import React, { useState, useRef } from "react";
import "./App.css";
import MainBody from "./modules/MainBody";
import SlideUp from "./modules/SlideUp";

function App() {
  const apikey = "579ff5f77eeb5f0c6d94f2c60dabefc2";
  const ref = useRef();
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState("");
  const [formActive, setFormActive] = useState(true);
  const [humMenu, setHumMenu] = useState(false);

  const [status, setStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apikey}`;

    await fetch(weather)
      .then((r) => {
        setStatus(r.ok);
        if (r.ok) {
          return r.json();
        } else throw new Error(r.statusText);
      })
      .then((r) => setWeather(r))
      .catch((err) => alert(err));

    setFormActive(true);

    setInput("");

    // ref.current.condition();
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="humbergerMenu" onClick={() => setHumMenu(!humMenu)}>
            <div className={humMenu ? "humMenu slide" : "humMenu"}></div>
            <div className={humMenu ? "humMenu slide" : "humMenu"}></div>
            <div className={humMenu ? "humMenu slide" : "humMenu"}></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={formActive ? "form active" : "form"}
          >
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search country ..."
              value={input}
              autoComplete="off"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setCountry(input);
                } else {
                  return;
                }
              }}
            />
          </form>
        </header>

        {status && weather ? (
          <MainBody ref={ref} weather={weather} />
        ) : (
          <div className={status ? "falsy slide" : "falsy"}></div>
        )}

        <SlideUp api={apikey} country={country} />
      </div>
    </div>
  );
}

export default App;
