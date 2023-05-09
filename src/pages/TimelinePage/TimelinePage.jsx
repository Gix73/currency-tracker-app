import { useEffect, useState } from "react";
import CandleStickChart from "../../components/Timeline/Chart";
import {
  ChartContainer,
  ChartWrapper,
  CurrencyContainer,
  ImgContainer,
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
          <option value={"BTC"}>Bitcoin</option>
          <option value={"ETH"}>Ethereum</option>
        </ValueSelector>
      </SelectWrapper>
      <ChartWrapper>
        <CurrencyContainer>
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

export default TimelinePage;
