import React, { useLayoutEffect, useState } from "react";

export const App = () => {
  const [Search, setSearch] = useState('kochi')
  
  useLayoutEffect(() => {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    return () => {};
  }, []);

  return (
    <div className="bg-zinc-400 max-w-[2350px] h-screen px-2  pt-[20%] sm:pt-[10%] md:pt-[7%]  ">
      <div className=" mx-auto max-w-[600px] text-center shadow-2xl ">
        <div className="p-2">
          <input
            className="min-w-[10rem] sm:w-[30rem] text-xl sm:text-2xl font-semibold px-4 py-6 outline-none hover:outline hover:outline-orange-500 duration-500 rounded-full shadow "
            type="text"
            placeholder="Enter Place..."
          />
        </div>
        <div className="py-16 text-white hover:text-orange-500 duration-700 cursor-default">
          <h2 className="text-4xl font-bold uppercase ">Chennai 5.2 C</h2>
          <div className="flex justify-center items-center ">
            <p>min : 5.2 Cel</p>
            <p className="mx-2">|</p>
            <p>max : 5.2 Cel</p>
          </div>
        </div>
      </div>
    </div>
  );
};
