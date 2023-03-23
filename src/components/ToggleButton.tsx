const ToggleButton = ({
  buttonText,
  state,
  setState
}) => {
  return (
    <button
      onClick={() => setState(state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
