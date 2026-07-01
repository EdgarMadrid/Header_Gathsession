import { Card } from "./components/Card/Card";
import { HeaderGallery } from "./components/HeaderGallery/HeaderGallery";
import { Navbar } from "./components/Navbar/Nadvar";
import { Title } from "./components/Title/Title";
import "./Header.scss";

export function Header() {
  return `
    <header class="header">

      <div class="header__container">


        ${Navbar()}
        ${HeaderGallery()}
        ${Title()}
        ${Card()}

      </div>

    </header>
  `;
}
