import { memo } from "react";
import { Span, UpdateImg, UpdateWrapper, UpdaterContainer } from "./styled";
import logo from "@assets/updaterImg.svg";
import { PropTypes } from "prop-types";

const UpdateInfo = ({ lastUpdate }) => {
  return (
    <UpdateWrapper>
      <UpdaterContainer>
        <UpdateImg src={logo} alt="circle" />
        <Span>Last update at {lastUpdate}</Span>
      </UpdaterContainer>
    </UpdateWrapper>
  );
};

UpdateInfo.propTypes = {
  lastUpdate: PropTypes.string,
};

export default memo(UpdateInfo);
