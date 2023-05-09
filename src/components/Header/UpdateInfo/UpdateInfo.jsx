import { memo } from "react";
import { Span, UpdateImg, UpdateWrapper, UpdaterContainer } from "./styled";

const UpdateInfo = () => {
  return (
    <UpdateWrapper>
      <UpdaterContainer>
        <UpdateImg />
        <Span>Última atualização às 23:59h</Span>
      </UpdaterContainer>
    </UpdateWrapper>
  );
};

export default memo(UpdateInfo);
