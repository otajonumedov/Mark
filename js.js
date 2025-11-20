// Markdownni HTMLga aylantirish (oddiy versiya)
function markdownToHTML(md) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*?)\*/gim, "<i>$1</i>")
    .replace(/\n$/gim, "<br>");
}

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Real vaqt rejimida HTMLga aylantirish
editor.addEventListener("input", () => {
  preview.innerHTML = markdownToHTML(editor.value);
});

// localStorage ga saqlash
function saveNote() {
  localStorage.setItem("markdownNote", editor.value);
  alert("Saqlandi!");
}

// localStorage dan yuklash
function loadNote() {
  const saved = localStorage.getItem("markdownNote");
  if (saved) {
    editor.value = saved;
    preview.innerHTML = markdownToHTML(saved);
  } else {
    alert("Saqlangan yozuv yo'q.");
  }
}

// O'chirish
function clearNote() {
  localStorage.removeItem("markdownNote");
  editor.value = "";
  preview.innerHTML = "";
}
