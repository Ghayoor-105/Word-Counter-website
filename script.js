let ourText = document.getElementById("text-area");
ourText.addEventListener("input", function () {

  let character = document.getElementById("character");
  let words = document.getElementById("words");
  let sentence = document.getElementById("sentence");
  let paragraph = document.getElementById("paragraph");

  let totalText = ourText.value;
  let totalChar = totalText.length;
  character.innerHTML = totalChar;

  let totalWords = totalText.split(" ").length - 1;
  words.innerHTML = totalWords;

  let totalSentence = totalText.split(".").length - 1;
  sentence.innerHTML = totalSentence;

  let totalParagraph = totalText.split("\n").length - 1;
  paragraph.innerHTML = totalParagraph;
});
