import axios from "axios";
import React, { useEffect, useState } from "react";
import { WeatherVisor } from "../../components/WeatherVisor/WeatherVisor";
import { WeatherTypes } from "../../types/types";
import "./Weather.scss";

const API_URL = "https://www.el-tiempo.net/api/json/v2/provincias/";

export function Weather() {
  const [currentData, setCurrentData] = useState({
    id: "28",
    codProv: "28079",
  });
  const [weatherData, setWeatherData] = useState<WeatherTypes>();
  const [loading, setLoading] = useState<boolean>(true);

  const peticion = async () => {
    await axios
      .get(API_URL + currentData.id + "/municipios/" + currentData.codProv)
      .then((response) => {  
        setWeatherData(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    peticion();
    
    return () => setLoading(true);
  }, [currentData]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="Weather">
      <WeatherVisor visor={weatherData} />
    </div>
  );
}
