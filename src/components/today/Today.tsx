import React, { FC, useState } from "react";
import { forecastType, GeoType } from "../../types";

import TodayData from "../todayData/todayData";
import TodaySearch from "../todaySearch/todaySearch";
import { TContainer } from "./today.styles";

type TProps = {
  forecast: forecastType;
  city: string;
  setCity: (type: string) => void;
  fetchGeo: (type: string) => void;
  geo: GeoType | null;
  searchInputs: string[];
  setSearchInputs: (type: string[]) => void;
  units: string;
  handleLocation: () => void;
};

const Today: FC<TProps> = ({
  forecast,
  city,
  setCity,
  fetchGeo,
  geo,
  searchInputs,
  setSearchInputs,
  units,
  handleLocation,
}) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <TContainer>
      {isSearch ? (
        <TodaySearch
          setIsSearch={setIsSearch}
          city={city}
          setCity={setCity}
          fetchGeo={fetchGeo}
          geo={geo}
          searchInputs={searchInputs}
          setSearchInputs={setSearchInputs}
        />
      ) : (
        <TodayData
          forecast={forecast}
          setIsSearch={setIsSearch}
          units={units}
          handleLocation={handleLocation}
        />
      )}
    </TContainer>
  );
};

export default Today;
