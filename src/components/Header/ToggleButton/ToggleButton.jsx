import { useState } from "react";
import { Input, StyledLabel } from "./styled";

const ToggleButton = () => {
  const [switchState, setSwitchState] = useState(true);

  function handleOnChange() {
    setSwitchState(!switchState);
  }

  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <Input id="checkbox" checked={switchState} onChange={handleOnChange} />
    </StyledLabel>
  );
};

export default ToggleButton;
