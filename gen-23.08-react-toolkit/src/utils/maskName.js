export default function maskName(name) {
  return name
    .split(" ")
    .map((word) => {
      return word[0] + "*".repeat(word.length - 1);
    })
    .join(" ");
}
