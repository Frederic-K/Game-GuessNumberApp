export default function CheckAnswer(answer, magicNumber) {
  let response
  if (answer > magicNumber) {
    response = 'hight'
  } else if (answer < magicNumber) {
    response = 'low'
  } else if (answer === magicNumber) {
    response = 'win'
  } else {
    response = 'invalid'
  }

  return response
}
