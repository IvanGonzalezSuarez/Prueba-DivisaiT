import { IconType } from "react-icons";

export interface MenuItem {
  id: string;
  label: string;
  icon: IconType;
  url: string;
}

export interface MenuCard {
  id: string;
  displayName: string;
  title: string;
  imgUrl: string;
}

export interface LocationTypes {
  "@context": { [key: string]: string };
  "@graph":   Graph[];
}

export interface Graph {
  "@id":        string;
  "@type":      string;
  id:           string;
  title:        string;
  relation:     string;
  address:      Address;
  location:     LocationClass;
  organization: Organization;
}

export interface Address {
  district:         Area;
  area:             Area;
  locality:         Locality;
  "postal-code":    string;
  "street-address": string;
}

export interface Area {
  "@id": string;
}

export enum Locality {
  Madrid = "MADRID",
}

export interface LocationClass {
  latitude:  number;
  longitude: number;
}

export interface Organization {
  "organization-desc": string;
  accesibility:        string;
  schedule:            string;
  services:            string;
  "organization-name": string;
}

export interface WeatherTypes {
  municipio: Municipio;
  fecha: string;
  stateSky: StateSky;
  temperatura_actual: string;
  temperaturas: Temperaturas;
  humedad: string;
  viento: string;
  lluvia: string;
  imagen: null;
  pronostico: Pronostico;
  proximos_dias: ProximosDia[];
  breadcrumb: Breadcrumb[];
  keywords: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
  title: string;
}

export interface Municipio {
  CODIGOINE: string;
  ID_REL: string;
  COD_GEO: string;
  CODPROV: string;
  NOMBRE_PROVINCIA: string;
  NOMBRE: string;
  POBLACION_MUNI: number;
  SUPERFICIE: number;
  PERIMETRO: number;
  CODIGOINE_CAPITAL: string;
  NOMBRE_CAPITAL: string;
  POBLACION_CAPITAL: string;
  HOJA_MTN25: string;
  LONGITUD_ETRS89_REGCAN95: number;
  LATITUD_ETRS89_REGCAN95: number;
  ORIGEN_COORD: string;
  ALTITUD: number;
  ORIGEN_ALTITUD: string;
  DISCREPANTE_INE: number;
}

export interface Pronostico {
  hoy: Hoy;
  manana: Hoy;
}

export interface Hoy {
  "@attributes": HoyAttributes;
  estado_cielo: string[];
  precipitacion: string[];
  prob_precipitacion: string[];
  prob_tormenta: string[];
  nieve: string[];
  prob_nieve: string[];
  temperatura: string[];
  sens_termica: string[];
  humedad_relativa: string[];
  viento: VientoElement[];
  racha_max: string[];
}

export interface HoyAttributes {
  fecha: string;
  orto: string;
  ocaso: string;
}

export interface VientoElement {
  "@attributes": VientoAttributes;
  direccion: Direccion;
  velocidad: string;
}

export interface VientoAttributes {
  periodo: string;
}

export enum Direccion {
  C = "C",
  E = "E",
  Ne = "NE",
  O = "O",
  S = "S",
  SE = "SE",
  So = "SO",
}

export interface ProximosDia {
  "@attributes": ProximosDiaAttributes;
  prob_precipitacion: string[] | string;
  cota_nieve_prov: Array<RachaMaxElement | string> | string;
  estado_cielo: string[] | string;
  viento: VientoElement[] | PurpleViento;
  racha_max: RachaMaxElement[] | PurpleRachaMax | string;
  temperatura: HumedadRelativa;
  sens_termica: HumedadRelativa;
  humedad_relativa: HumedadRelativa;
  uv_max?: string;
}

export interface ProximosDiaAttributes {
  fecha: string;
}

export interface RachaMaxElement {
  "@attributes": VientoAttributes;
}

export interface HumedadRelativa {
  maxima: string;
  minima: string;
  dato?: string[];
}

export interface PurpleRachaMax {}

export interface PurpleViento {
  direccion: Direccion;
  velocidad: string;
}

export interface StateSky {
  description: string;
  id: string;
}

export interface Temperaturas {
  max: string;
  min: string;
}
