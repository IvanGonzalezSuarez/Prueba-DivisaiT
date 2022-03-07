import { TiWeatherCloudy } from "react-icons/ti";
import { FaSearchLocation } from "react-icons/fa";
import { MenuCard, MenuItem } from "../types/types";
import profile from "../resources/profile.jpg";

export const card: MenuCard = {
  id: "card01",
  displayName: "Iván González Suárez",
  title: "Developer",
  imgUrl: profile
};

export const items: MenuItem[] = [
    {
      id: "1",
      label: "Weather",
      icon: TiWeatherCloudy,
      url: "/weather", 
    },
    {
      id: "2",
      label: "Location",
      icon: FaSearchLocation,
      url: "/location",
    }
  ];

