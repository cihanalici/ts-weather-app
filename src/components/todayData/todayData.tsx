import React, { FC } from "react";
import { getImg } from "../../helpers";
import { forecastType } from "../../types";
import {
  Button,
  Celcius,
  City,
  DateText,
  Header,
  ImgDiv,
  LIcon,
  Text,
} from "./todayData.styled";

type TodayProps = {
  setIsSearch: (type: boolean) => void;
  forecast: forecastType;
  units: string;
  handleLocation: () => void;
};

const TodayData: FC<TodayProps> = ({
  setIsSearch,
  forecast,
  units,
  handleLocation,
}) => {
  const { name, list } = forecast || {};

  const { weather, main, dt_txt } = list?.[0] || {};
  const { icon, description } = weather?.[0] || {};

  //change dt_txt to date like Friday, 5 June
  const date = new Date(dt_txt!).toDateString();
  const day = date.split(" ")[0];
  const month = date.split(" ")[1];
  const dayNum = date.split(" ")[2];

  return (
    <>
      <Header>
        <Button onClick={() => setIsSearch(true)}>Search for places</Button>
        <LIcon>
          <span onClick={() => handleLocation()} className="material-symbols-outlined">my_location</span>
        </LIcon>
      </Header>
      <ImgDiv>
        <img src={getImg(icon)} alt="Weather" />
      </ImgDiv>

      <Celcius>
        {main?.temp.toFixed(0)}
        <span>{units === "metric" ? "°C" : "℉"}</span>
      </Celcius>
      <Text>{description}</Text>
      <DateText>
        Today • {day}, {parseInt(dayNum)} {month}
      </DateText>
      <City>
        <span className="material-symbols-outlined">location_on</span>
        <span>{name}</span>
      </City>
    </>
  );
};

export default TodayData;
