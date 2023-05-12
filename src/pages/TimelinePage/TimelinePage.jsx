import CandleStickChart from "@components/Timeline/Chart";
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
  return (
    <TimelineWrapper>
      <SelectWrapper>
        <ValueSelector
          value={chartCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
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
