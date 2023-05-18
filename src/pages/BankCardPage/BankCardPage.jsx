import { memo, useMemo, useRef, useState } from "react";
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
import MapGL from "@components/MapGL/MapGL";
import { banks } from "@constants/banksCoord";
import search_icon from "@assets/search.svg";
import { PropTypes } from "prop-types";

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
    const filteredCurrencies = currencies.filter((e) =>
      e.toLowerCase().includes(searchData.toLowerCase())
    );

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
    return banks.reduce((markers, e) => {
      if (e.currencies.includes(inpRef.current.value.toLowerCase())) {
        return [...markers, [e.longitude, e.latitude]];
      }
      return [...markers];
    }, []);
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

BankCardPage.propTypes = {
  exchangeValues: PropTypes.object,
};

export default memo(BankCardPage);
