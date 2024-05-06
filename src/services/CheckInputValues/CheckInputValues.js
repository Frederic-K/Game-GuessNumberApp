export default function CheckInputValues(inputValues) {
  // Regex
  const regexTestPlayerName = (input) => {
    let regex = /[\S\s]/
    return regex.test(input)
  }

  // Errors object
  let errors = {}
  if (regexTestPlayerName(inputValues.playerName) === false) {
    errors.playerName = "Player Name can't be empty"
  }

  if (inputValues.maxNumber.length === 0 || inputValues.maxNumber <= 0) {
    errors.maxNumber = "Max number can't be empty or < 0"
  }
  return errors
}
