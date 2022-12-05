import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getForecast } from "../helpers";
import { forecastType, GeoType, listItem } from "../types";

const useForecast = () => {
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [city, setCity] = useState("istanbul");
  //units=imperial fahreneit
  const [units, setUnits] = useState("metric");
  const [searchInputs, setSearchInputs] = useState<string[]>([]);
  const [geo, setGeo] = useState<GeoType | null>({
    lat: 36.7978381,
    lon: 34.6298391,
    name: "Mersin",
  });


  const fetchGeo = useCallback(
    async (city: string) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      setGeo({
        lat: res.data.coord.lat,
        lon: res.data.coord.lon,
        name: res.data.name,
      });
    },
    [units]
  );


  const handleLocation = () => {
    if(!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setGeo({
          lat: latitude,
          lon: longitude,
          name: "Current Location",
        });
        
      });
    }
  };


  useEffect(() => {
    if (geo) {
      // getForecast(geo, units).then((res) => console.log(res));
       getForecast(geo, units).then((res) => {

        const customData = {
          name: res.city.name,
          //split list to 5 days
          list: res.list.filter((item: listItem) =>
            item.dt_txt.includes("12:00:00")
          ),
        };
        setForecast(customData)
       });
    }
  }, [units, geo]);

  return {
    forecast,
    geo,
    city,
    setCity,
    fetchGeo,
    searchInputs,
    setSearchInputs,
    setUnits,
    units,
    setGeo,
    handleLocation
  };
};

export default useForecast;
