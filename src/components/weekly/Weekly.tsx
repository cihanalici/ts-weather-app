import React, { FC } from "react";
import { metersToMiles } from "../../helpers";
import { forecastType } from "../../types";
import DayCard from "../dayCard/dayCard";
import {
  Celcius,
  Content,
  Contents,
  DayCards,
  DegreeDiv,
  Fahreneit,
  Footer,
  Heading,
  InnerText,
  Outer,
  Text,
  WContainer,
} from "./weekly.styles";

type WProps = {
  forecast: forecastType;
  units: string;
  setUnits: React.Dispatch<React.SetStateAction<string>>;
};

const Weekly: FC<WProps> = ({ forecast, setUnits, units }) => {
  const { list } = forecast || {};
  const { main, wind, visibility } = list?.[0] || {};

  return (
    <WContainer>
      <DegreeDiv>
        <Celcius onClick={() => setUnits("metric")}>℃</Celcius>
        <Fahreneit onClick={() => setUnits("imperial")}>℉</Fahreneit>
      </DegreeDiv>
      <DayCards>
        {list?.slice(1, 5)?.map((item, index) => (
          <DayCard key={index} cardItem={item} units={units} />
        ))}
      </DayCards>
      <Heading>Today’s Hightlights </Heading>
      <Contents>
        <Content>
          <Text>Wind status</Text>
          <InnerText>
            <span>{wind?.speed.toFixed(1)}</span>mph
          </InnerText>
          <Outer>WSW</Outer>
        </Content>
        <Content>
          <Text>Humidity</Text>
          <InnerText>
            <span>{main?.humidity}</span>%
          </InnerText>
        </Content>
        <Content>
          <Text>Visibility</Text>
          <InnerText>
            <span>{metersToMiles(visibility!)}</span>miles
          </InnerText>
        </Content>
        <Content>
          <Text>Air Pressure</Text>
          <InnerText>
            <span>{main?.pressure}</span>mb
          </InnerText>
        </Content>
        <Footer>created by <a href="https://github.com/Deadburn">Cihan</a> - devChallenges.io</Footer>
      </Contents>
    </WContainer>
  );
};

export default Weekly;
