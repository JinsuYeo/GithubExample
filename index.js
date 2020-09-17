const title = document.querySelector("#title");

const CLICKED_COLOR = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_COLOR);
}
/* const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
} */

function init() {
  title.addEventListener("click", handleClick);
}

init();

/* function handleOffline() {
  title.innerHTML = "Connect wifi";
}
function handleOnline() {
  title.innerHTML = "Welcome back!";
} */
/* 
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
 */
