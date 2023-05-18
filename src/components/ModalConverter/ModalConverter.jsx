import { useState } from "react";
import { PropTypes } from "prop-types";
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

  const convert = () =>
    "" + ((1 / data[exchangeData.from]) * (1 * data[to]) * amount).toFixed(9);

  function handlePropagation(e) {
    e.stopPropagation();
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleConvertTo(e) {
    setTo(e.target.value);
  }

  return (
    <ModalWrapper
      onClick={() => {
        closeHandler(false);
      }}
      show={show}
    >
      <ModalContainer id="modal-container" onClick={handlePropagation}>
        <CloseBtn onClick={closeHandler} />
        <TitleSpan>Converter</TitleSpan>
        <ExchangeWrapper>
          <InpWrapper>
            <InpSpan>Amount</InpSpan>
            <AmountInput type="text" value={amount} onChange={handleAmount} />
          </InpWrapper>
          <InpWrapper>
            <InpSpan>From</InpSpan>
            <StyledDiv>{exchangeData.from}</StyledDiv>
          </InpWrapper>
          <InpWrapper>
            <InpSpan>To</InpSpan>
            <StyledSelect value={to} onChange={handleConvertTo}>
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
          <InpSpan id="conv-res">{data ? convert() : ""}</InpSpan>
        </ResWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

ModalConverter.propTypes = {
  data: PropTypes.object,
  closeHandler: PropTypes.func,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  exchangeData: PropTypes.object,
  chooseList: PropTypes.array,
};

export default ModalConverter;
