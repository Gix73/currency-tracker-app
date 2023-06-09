import CandleStickChart from "@components/CandleStickChart/CandleStickChart";
import { PropTypes } from "prop-types";
import {
  ChartContainer,
  ChartWrapper,
  CurrencyContainer,
  ImgContainer,
  Option,
  SelectWrapper,
  StyledSpan,
  TimelineWrapper,
  ValueSelector,
} from "./styled";

const TimelinePage = ({
  candleData,
  onCurrencyChange,
  chartCurrency,
  exchangeValues,
}) => {
  function handleCurrencyChange(e) {
    onCurrencyChange(e.target.value);
  }

  return (
    <TimelineWrapper>
      <SelectWrapper>
        <ValueSelector value={chartCurrency} onChange={handleCurrencyChange}>
          <Option value={"BTC"}>Bitcoin</Option>
          <Option value={"ETH"}>Ethereum</Option>
        </ValueSelector>
      </SelectWrapper>
      <ChartWrapper>
        <CurrencyContainer id="currency-id">
          <ImgContainer urlImg={exchangeValues[chartCurrency].img} />
          <StyledSpan>{exchangeValues[chartCurrency].name}</StyledSpan>
        </CurrencyContainer>
        <ChartContainer>
          <CandleStickChart candleData={candleData} />
        </ChartContainer>
      </ChartWrapper>
    </TimelineWrapper>
  );
};

TimelinePage.propTypes = {
  candleData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onCurrencyChange: PropTypes.func,
  chartCurrency: PropTypes.string,
  exchangeValues: PropTypes.object,
};

export default TimelinePage;
