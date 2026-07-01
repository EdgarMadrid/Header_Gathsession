import "./Navbar.scss";

export function Navbar() {
  return `
    <nav class="navbar">

      <div class="navbar__logo">
        <img src="/src/assets/icons/GathSession.png" alt="Logo" />
      </div>

      <button class="navbar__toggle" id="navbarToggle">☰</button>

      <ul class="navbar__links" id="navbarMenu">

        <li class="navbar__item">
          <a href="#" class="navbar__link">Home</a>
        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">Features</a>
        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">Blog</a>
        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">Contact</a>
        </li>

        <li class="navbar__item">
          <a href="#" class="navbar__link">About Us</a>
        </li>

      </ul>

    </nav>
  `;
}
