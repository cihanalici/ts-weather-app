import React, { FC } from "react";
import { getImg } from "../../helpers";
import { listItem } from "../../types";
import {
  Card,
  DailyImage,
  DateText,
  DownRange,
  Range,
  UpRange,
} from "./dayCard.styles";

type DayCardProps = {
  cardItem: listItem;
  units: string;
};

const DayCard: FC<DayCardProps> = ({ cardItem, units }) => {

  const { weather, main, dt_txt } = cardItem;
  const { icon } = weather?.[0] || {};

  //change dt_txt to date like Friday, 5 June
  const date = new Date(dt_txt!).toDateString();
  const day = date.split(" ")[0];
  const month = date.split(" ")[1];
  const dayNum = date.split(" ")[2];

  return (
    <Card>
      <DateText>{day}, {parseInt(dayNum)} {month}</DateText>
      <DailyImage src={getImg(icon)} />
      <Range>
        <UpRange>{main.temp.toFixed(0)}{units === "metric" ? "°C" : "℉"}</UpRange>
        <DownRange>{main.feels_like.toFixed(0)}{units === "metric" ? "°C" : "℉"}</DownRange>
      </Range>
    </Card>
  );
};

export default DayCard;
