import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { WeatherAPIKEY } from './config/URL'

export const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [weatherData, setWeatherData] = useState({})

  useLayoutEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=${WeatherAPIKEY}`).then((res) => {
      setWeatherData(res.data)
    })
    return () => { };
  }, [searchItem]);

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchItem(searchInput)
  }

  return (
    <div className="bg-zinc-400 max-w-[2350px] h-screen px-2  pt-[20%] sm:pt-[10%] md:pt-[7%]  ">
      <div className=" mx-auto max-w-[600px] text-center shadow-2xl rounded ">
        <form className="p-2" onSubmit={handleSearch}>
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
            className="min-w-[10rem] sm:w-[30rem] text-xl sm:text-2xl font-semibold px-4 py-6 outline-none hover:outline hover:outline-orange-500 duration-500 rounded-full shadow "
            type="text"
            placeholder="Search Here..."
          />
        </form>
        {
          weatherData?.name ?
            (
              <div className="py-16 text-white hover:text-orange-500 duration-700 cursor-default">
                <h2 className="text-4xl font-bold uppercase ">{weatherData?.name} {weatherData?.main?.temp} C</h2>
                <div className="flex justify-center items-center  ">
                  <p className="capitalize font-bold" >max : {weatherData?.main?.temp_max} <span className="capitalize font-semibold ">Cel</span></p>
                  <p className="mx-2">|</p>
                  <p className="capitalize font-bold" >min : {weatherData?.main?.temp_min} <span className="capitalize font-semibold ">Cel</span></p>
                </div>
              </div>
            ) : (
              <div className="py-11 text-white font-bold text-2xl cursor-default" >
                <h1 className="capitalize ">find a destination</h1>
              </div>
            )
        }
      </div>
    </div>
  );
};
