import React from "react";
import { ProximosDia, WeatherTypes } from "../../types/types";
import "./WeatherVisor.scss";

interface weatherDataProps {
  visor: WeatherTypes | undefined;
}

interface todayProps {
  nombre: string | undefined;
  temperatura_actual: string | undefined;
  description: string | undefined;
  max: string | undefined;
  min: string | undefined;
}

const Today = ({
  nombre,
  temperatura_actual,
  description,
  max,
  min,
}: todayProps) => {
  return (
    <div className="today">
      <h2>{nombre}</h2>
      <h1>{temperatura_actual + "º"}</h1>
      <h3>{description}</h3>
      <h3>{"Máx: " + max + "º Mín: " + min + "º"}</h3>
    </div>
  );
};

interface weekProps {
  week: ProximosDia[] | undefined;
}

const Week = ({ week }: weekProps) => {
  return (
    <div className="week">
      <h2>Información de los proximos 6 días</h2>
      <table>
        <tbody>
          {week ? (
            week.map((day, key) => {
              return (
                <tr key={key}>
                  <td>{parseDateToDay(day["@attributes"].fecha)}</td>
                  <td>
                    {"Máx: " +
                      day.temperatura.minima +
                      "º - Mín: " +
                      day.temperatura.minima +
                      "º"}
                  </td>
                </tr>
              );
            })
          ) : (
            <div>No data</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

const parseDateToDay = (date: string | any) => {
  let transformDate = new Date(date).getDay();

  return WeekDays(transformDate);
};

const WeekDays = (num: number | any) => {
  const day: any = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    0: "Domingo",
  };
  return day[num];
};

export const WeatherVisor = ({ visor }: weatherDataProps) => {
  return (
    <div className="WeatherVisor">
      <div className="box">
        <div className="content"></div>
        <Today
          nombre={visor?.municipio.NOMBRE_PROVINCIA}
          temperatura_actual={visor?.temperatura_actual}
          description={visor?.stateSky.description}
          max={visor?.temperaturas.max}
          min={visor?.temperaturas.min}
        />
        <Week week={visor?.proximos_dias} />
      </div>
    </div>
  );
};
