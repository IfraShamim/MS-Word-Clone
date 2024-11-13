// Bold
document.getElementById("bold").addEventListener("click", bold);
function bold() {
  let editor = document.getElementById("textarea");
  editor.style.fontWeight =
    editor.style.fontWeight === "bold" ? "normal" : "bold";
}

// Italic
document.getElementById("italic").addEventListener("click", italic);
function italic() {
  let editor = document.getElementById("textarea");
  editor.style.fontStyle =
    editor.style.fontStyle === "italic" ? "normal" : "italic";
}

// Underline
document.getElementById("underline").addEventListener("click", underline);
function underline() {
  let editor = document.getElementById("textarea");
  editor.style.textDecoration =
    editor.style.textDecoration === "underline" ? "none" : "underline";
}

// Font Family
function fontFamily(selectedFont) {
  let editor = document.getElementById("textarea");
  editor.style.fontFamily = selectedFont;
}

// Large
document.getElementById("large").addEventListener("click", large);
let fontSize = 16;
function large() {
  fontSize += 2;
  if (fontSize > 48) fontSize = 48;
  let editor = document.getElementById("textarea");
  editor.style.fontSize = `${fontSize}px`;
}
// Small
document.getElementById("small").addEventListener("click", small);
function small() {
  fontSize -= 2;
  if (fontSize < 16) fontSize = 16;
  let editor = document.getElementById("textarea");
  editor.style.fontSize = `${fontSize}px`;
}
// Font Case
function fontCase(caseType) {
  const editor = document.getElementById("textarea");
  let text = editor.value;

  switch (caseType) {
    case "UPPERCASE":
      editor.value = text.toUpperCase();
      break;
    case "lowercase":
      editor.value = text.toLowerCase();
      break;
    case "Capitalize":
      editor.value = text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      break;
  }
}
// Font Color
function fontColor(selectedColor) {
  const editor = document.getElementById("textarea");
  editor.style.color = selectedColor;
}
// Remove
document.getElementById("clear").addEventListener("click", clear);
function clear() {
  document.getElementById("textarea").value = "";
}
// Count Letter
document.getElementById("length").addEventListener("click", length);
function length() {
  const editor = document.getElementById("textarea");
  alert(`Number of length: ${editor.value.length}`);
}
// Count Word
document.getElementById("word").addEventListener("click", word);
function word() {
  const editor = document.getElementById("textarea");
  const words = editor.value.trim().split(/\s+/).filter(Boolean);
  alert(`Number of Words: ${words.length}`);
}
//   Align Left
document.getElementById("left").addEventListener("click", left);
function left() {
  const editor = document.getElementById("textarea");
  editor.style.textAlign = "left";
}
//   Align Right
document.getElementById("right").addEventListener("click", right);
function right() {
  const editor = document.getElementById("textarea");
  editor.style.textAlign = "end";
}
//   Align Center
document.getElementById("center").addEventListener("click", center);
function center() {
  const editor = document.getElementById("textarea");
  editor.style.textAlign = "center";
}
//   Align Justify
document.getElementById("justify").addEventListener("click", justify);
function justify() {
  const editor = document.getElementById("textarea");
  editor.style.textAlign = "justify";
}
// Vowels & Consonant Count
document.getElementById("count").addEventListener("click", count);

function count() {
  const editor = document.getElementById("textarea");
  const str = editor.value;
  const vowels = str.match(/[aeiouAEIOU]/g);
  const vowelCount = vowels ? vowels.length : 0;
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
  const consonantCount = consonants ? consonants.length : 0;

  alert(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}
// Highlighter
document.getElementById("highlighter").addEventListener("click", highlighter);
function highlighter(selectedColor){
  const editor = document.getElementById("textarea");
  editor.style.backgroundColor = selectedColor;
}
