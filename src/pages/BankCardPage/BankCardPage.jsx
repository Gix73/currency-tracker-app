import { useMemo, useRef, useState } from "react";
import {
  Img,
  Input,
  InputContainer,
  ItemsWrapper,
  MainWrapper,
  SearchContainer,
  SearchItem,
  SearchWrapper,
  StyledSpan,
} from "./styled";
import MapGL from "@components/BankCard/Map";
import { banks } from "@constants/banksCoord";
import search_icon from "@assets/search.svg";

const BankCardPage = ({ exchangeValues }) => {
  const [filterData, setFilterData] = useState([]);
  const [markersData, setMarkersData] = useState([]);
  const inpRef = useRef(null);

  const currencies = useMemo(
    () => Object.keys(exchangeValues),
    [exchangeValues]
  );

  function createFilterData(e) {
    const searchData = e.target.value;
    const filteredCurrencies = currencies.filter((e) => {
      return e.toLowerCase().includes(searchData.toLowerCase());
    });

    if (searchData) {
      setFilterData(filteredCurrencies);
    } else {
      setFilterData([]);
    }
  }

  function handleClear(e) {
    handleCurrency(e);
  }

  function handleCurrency(e) {
    inpRef.current.value = e.target.innerHTML;
    setFilterData([]);
    setMarkersData(getBanks());
  }

  function getBanks() {
    let markers = [];
    for (let i = 0; i < banks.length; i++) {
      if (banks[i].currencies.includes(inpRef.current.value.toLowerCase())) {
        markers.push([banks[i].longitude, banks[i].latitude]);
      }
    }
    return markers;
  }

  return (
    <MainWrapper>
      <SearchWrapper>
        <StyledSpan>Search currency in the bank</StyledSpan>
        <SearchContainer>
          <InputContainer>
            <Input
              ref={inpRef}
              placeholder="Сurrency search..."
              onChange={createFilterData}
              onClick={handleClear}
            />
            <Img src={search_icon} alt="loopa" />
          </InputContainer>
          <ItemsWrapper>
            {filterData.map((e) => (
              <SearchItem key={e} onClick={handleCurrency}>
                {e}
              </SearchItem>
            ))}
          </ItemsWrapper>
        </SearchContainer>
        <MapGL markers={markersData} />
      </SearchWrapper>
    </MainWrapper>
  );
};

export default BankCardPage;
