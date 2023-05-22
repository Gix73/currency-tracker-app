import { useEffect, useState } from "react";
import { Input, StyledLabel } from "./styled";
import { PropTypes } from "prop-types";

const ToggleButton = ({ toggleTheme }) => {
  const [switchState, setSwitchState] = useState(true);

  useEffect(() => {
    switchState ? toggleTheme("dark") : toggleTheme("light");
  }, [switchState]);

  function handleOnChange() {
    setSwitchState(!switchState);
  }

  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <Input id="checkbox" checked={switchState} onChange={handleOnChange} />
    </StyledLabel>
  );
};

ToggleButton.propTypes = {
  toggleTheme: PropTypes.func,
};

export default ToggleButton;
