import { useState } from "react";
import {
  AmountInput,
  CloseBtn,
  ExchangeWrapper,
  InpSpan,
  InpWrapper,
  ModalContainer,
  ModalWrapper,
  ResWrapper,
  StyledDiv,
  StyledOption,
  StyledSelect,
  TitleSpan,
} from "./styled";

const ModalConverter = ({
  closeHandler,
  show,
  exchangeData,
  chooseList,
  data,
}) => {
  const [amount, setAmount] = useState(1);
  const [to, setTo] = useState("usd");

  function convert() {
    return (
      "" + ((1 / data[exchangeData.from]) * (1 * data[to]) * amount).toFixed(9)
    );
  }

  return (
    <ModalWrapper
      onClick={() => {
        closeHandler(false);
      }}
      show={show}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={closeHandler} />
        <TitleSpan>Converter</TitleSpan>
        <ExchangeWrapper>
          <InpWrapper>
            <InpSpan>Amount</InpSpan>
            <AmountInput
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </InpWrapper>
          <InpWrapper>
            <InpSpan>From</InpSpan>
            <StyledDiv>{exchangeData.from}</StyledDiv>
          </InpWrapper>
          <InpWrapper>
            <InpSpan>To</InpSpan>
            <StyledSelect value={to} onChange={(e) => setTo(e.target.value)}>
              {chooseList.map((e) => {
                return (
                  <StyledOption key={e} value={e}>
                    {e}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </InpWrapper>
        </ExchangeWrapper>
        <ResWrapper>
          <InpSpan>Convertation:</InpSpan>
          <InpSpan>{data ? convert() : ""}</InpSpan>
        </ResWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ModalConverter;
