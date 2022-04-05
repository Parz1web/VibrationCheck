/*jshint esversion: 6*/

document.getElementById("vibr").addEventListener("click", () => {
  if ("vibrate" in navigator) {
    navigator.vibrate([1000, 500, 1000, 500, 2000]);
  } else {
    alert("Видимо, без приколов");
  }
});
