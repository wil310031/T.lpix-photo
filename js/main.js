let texte = "Photographie";
let timer;
let cmpt = 0;
let currrent;

function typewriter() {
  spanid = document.getElementById("anim");
  if (cmpt < texte.length) {
    currrent = spanid.innerHTML.substring(0, spanid.innerHTML.length - 1);
    currrent += texte.charAt(cmpt) + " ";
    spanid.innerHTML = currrent;
  } else {
    spanid.innerHTML = "";
    cmpt = -1;
  }
  cmpt++;
  setTimeout("typewriter()", 200);
}
window.onload = function () {
  typewriter();
};
