import React, { Dispatch, SetStateAction } from "react";

interface Props {
  buttonText: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ToggleButton: React.FC<Props> = ({ buttonText, state, setState }) => {
  return <button onClick={() => setState(!state)}>{buttonText}</button>;
};

export default ToggleButton;
