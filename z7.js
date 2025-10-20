function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " ") {
      continue;
    }
    let chars = str.split("");
    chars[i] = chars[i].toUpperCase();
    result.push(chars.join(""));
  }
  return result;
}
