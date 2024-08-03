import english from "./english.json";
import german from "./german.json";
import spanish from "./spanish.json";
import turkish from "./turkish.json";

export const shuffleWord = (maxWord, language) => {

  let shuffledWord;
  switch (language) {
    case "tr":
      shuffledWord = turkish.slice(0);
      break;
    case "es":
      shuffledWord = spanish.slice(0);
      break;
    case "de":
      shuffledWord = german.slice(0);
      break;
    default:
      shuffledWord = english.slice(0);
      break;
  }
  for (let i = shuffledWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledWord[i];
    shuffledWord[i] = shuffledWord[j];
    shuffledWord[j] = temp;
  }
  return shuffledWord.slice(0, maxWord);
};
