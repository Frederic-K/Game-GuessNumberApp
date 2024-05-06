export default function MagicNumber(maxNum) {
  let magicNumber = parseInt(Math.floor(Math.random() * maxNum) + 1)
  return magicNumber
}
