import "@/styles/main.scss";
import { Header } from "./components/Header/Header";

document.querySelector("#app").innerHTML = `
  ${Header()}
`;

const toggle = document.querySelector("#navbarToggle");
const menu = document.querySelector("#navbarMenu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
});

// cerrar al hacer click fuera
document.addEventListener("click", (e) => {
  const clickInside = menu.contains(e.target) || toggle.contains(e.target);

  if (!clickInside) {
    menu.classList.remove("active");
  }
});
