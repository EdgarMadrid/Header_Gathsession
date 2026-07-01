(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <section class="card">

      <div class="card__item">
        <img class="card__icon" src="/src/assets/icons/Message.svg" alt="Message" />
        <span class="card__text">Build Community</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="/src/assets/icons/Week_Schedule.svg" alt="Schedule" />
        <span class="card__text">Share Events</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="/src/assets/icons/Post.svg" alt="Post" />
        <span class="card__text">Get Information</span>
      </div>

    </section>
  `}function t(){return`
    <section class="headerGallery">

        <img class="headerGallery__img" src="/src/assets/image/handsome-serious-calm.png" alt="Foto">
        <img class="headerGallery__img" src="/src/assets/image/pretty-young-asian-woman.png" alt="Foto">
        <img class="headerGallery__img" src="/src/assets/image/positive-dark-skinned.png" alt="Foto">
        <img class="headerGallery__img" src="/src/assets/image/positive-smiling-handsome.png" alt="Foto">
        <img class="headerGallery__img" src="/src/assets/image/vertical-shot-of-young.png" alt="Foto">

    </section>
  `}function n(){return`
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
  `}function r(){return`
    <section class="title">

      <h1 class="title__heading">
        Build your best community starting from here.
      </h1>

      <p class="title__description">
        Meet and communicate with the best people to run projects, events or other
        activities in a more effective and fun way
      </p>

      <div class="title__actions">

        <a href="#" class="title__button title__button--primary">
          Get Started
        </a>

        <a href="#" class="title__button title__button--secondary">
          Learn More
          <img class="title__icon" src="/src/assets/icons/Arrow.svg" alt="">
        </a>

      </div>

    </section>
  `}function i(){return`
    <header class="header">

      <div class="header__container">


        ${n()}
        ${t()}
        ${r()}
        ${e()}

      </div>

    </header>
  `}document.querySelector(`#app`).innerHTML=`
  ${i()}
`;var a=document.querySelector(`#navbarToggle`),o=document.querySelector(`#navbarMenu`);a.addEventListener(`click`,e=>{e.stopPropagation(),o.classList.toggle(`active`)}),document.addEventListener(`click`,e=>{o.contains(e.target)||a.contains(e.target)||o.classList.remove(`active`)});