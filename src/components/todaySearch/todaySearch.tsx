import React, { ChangeEvent, FC } from "react";
import {
  Close,
  Container,
  SearchBtn,
  SearchDiv,
  SearchHistory,
  SearchInput,
  SearchResult,
} from "./todaySearch.styles";

type TodaySearchProps = {
  setIsSearch: (type: boolean) => void;
  city: string;
  setCity: (type: string) => void;
  fetchGeo: (type: string) => void;
  geo: any;
  searchInputs: string[];
  setSearchInputs: (type: string[]) => void;
};

const TodaySearch: FC<TodaySearchProps> = ({
  setIsSearch,
  city,
  setCity,
  fetchGeo,
  geo,
  searchInputs,
  setSearchInputs,
}) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCity(value);
  };

  const searchAction = () => {
    if (!city) return;
    fetchGeo(city);
    setSearchInputs([city, ...searchInputs]);
  };

  return (
    <Container>
      <Close>
        <span onClick={() => setIsSearch(false)}>&#10005;</span>
      </Close>
      <SearchDiv>
        <span className="material-symbols-outlined">search</span>
        <SearchInput
          type="text"
          required
          name="city"
          onChange={handleChange}
          placeholder="Search for places"
        />
        <SearchBtn onClick={() => searchAction()}>Search</SearchBtn>
      </SearchDiv>
      {geo && (
        <>
          <SearchResult>
            <p>{geo ? geo.name : "London"}</p>
            <span>{">"}</span>
          </SearchResult>
          <SearchHistory>
            {searchInputs
              .slice(0, 3)
              .reverse()
              .map((input, index) => (
                <p key={index}>{input}</p>
              ))}
          </SearchHistory>
        </>
      )}
    </Container>
  );
};

export default TodaySearch;
