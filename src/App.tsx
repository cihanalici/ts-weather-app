import { Container } from "./App.styles";
import Today from "./components/today/Today";
import Weekly from "./components/weekly/Weekly";
import useForecast from "./hooks/useForecast";

function App() {
  const {
    forecast,
    city,
    setCity,
    fetchGeo,
    geo,
    searchInputs,
    setSearchInputs,
    setUnits,
    units,
    handleLocation,
  } = useForecast();

  return (
    <Container>
      <Today
        forecast={forecast}
        city={city}
        setCity={setCity}
        fetchGeo={fetchGeo}
        geo={geo}
        searchInputs={searchInputs}
        setSearchInputs={setSearchInputs}
        units={units}
        handleLocation={handleLocation}
      />
      <Weekly forecast={forecast} setUnits={setUnits} units={units} />

    </Container>
  );
}

export default App;
