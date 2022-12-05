export type GeoType = {
  lon: number;
  lat: number;
  name: string;
};

export type name = string | null;
export type main = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};
export type weather = { description: string; icon: string; main: string };
export type wind = { speed: number; gust: number; deg: number };

export type listItem = {
  dt: number;
  dt_txt: string;
  main: main;
  weather: weather[];
  wind: wind;
  pop: number;
  visibility: number;
};

export type forecastType = {
  name: name;
  list: listItem[];
} | null;
