import React from "react";
import { Card } from "../../components/Card/Card";
import { useApis } from "../../hooks/useApis";
import "./Location.scss";

const API_URL =
  "https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json";

export function Location() {
  const { isLoading, error, data } = useApis(API_URL);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>"An error has occurred: " + error</h1>;

  return (
    <div className="column">
      {data?.["@graph"].map((item: any) => {
        return <Card card={item} key={item.id} />;
      })}
    </div>
  );
}
