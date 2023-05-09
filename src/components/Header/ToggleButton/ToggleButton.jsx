import { useEffect, useState } from "react";
import { Input, StyledLabel } from "./styled";

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

export default ToggleButton;
