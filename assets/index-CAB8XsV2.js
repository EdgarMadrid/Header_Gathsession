(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = `/Header_Gathsession/icons/Message.svg`,
  t = `/Header_Gathsession/icons/Post.svg`,
  n = `/Header_Gathsession/icons/Week_Schedule.svg`;
function r() {
  return `
    <section class="card">

      <div class="card__item">
        <img class="card__icon" src="${e}" alt="Message" />
        <span class="card__text">Build Community</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="${t}" alt="Schedule" />
        <span class="card__text">Share Events</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="${n}" alt="Post" />
        <span class="card__text">Get Information</span>
      </div>

    </section>
  `;
}
var i = `/Header_Gathsession/image/handsome-serious-calm.png`,
  a = `/Header_Gathsession/image/pretty-young-asian-woman.png`,
  o = `/Header_Gathsession/image/positive-dark-skinned.png`,
  s = `/Header_Gathsession/image/positive-smiling-handsome.png`,
  c = `/Header_Gathsession/image/vertical-shot-of-young.png`;
function l() {
  return `
    <section class="headerGallery">

        <img class="headerGallery__img" src="${i}" alt="Foto">
        <img class="headerGallery__img" src="${a}" alt="Foto">
        <img class="headerGallery__img" src="${o}" alt="Foto">
        <img class="headerGallery__img" src="${s}" alt="Foto">
        <img class="headerGallery__img" src="${c}" alt="Foto">

    </section>
  `;
}
var u = `/Header_Gathsession/icons/GathSession.png`;
function d() {
  return `
    <nav class="navbar">

      <div class="navbar__logo">
        <img src="${u}" alt="Logo" />
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
var f = `/Header_Gathsession/icons/Arrow.svg`;
function p() {
  return `
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
          <img class="title__icon" src="${f}" alt="">
        </a>

      </div>

    </section>
  `;
}
function m() {
  return `
    <header class="header">

      <div class="header__container">


        ${d()}
        ${l()}
        ${p()}
        ${r()}

      </div>

    </header>
  `;
}
document.querySelector(`#app`).innerHTML = `
  ${m()}
`;
var h = document.querySelector(`#navbarToggle`),
  g = document.querySelector(`#navbarMenu`);
(h.addEventListener(`click`, (e) => {
  (e.stopPropagation(), g.classList.toggle(`active`));
}),
  document.addEventListener(`click`, (e) => {
    g.contains(e.target) ||
      h.contains(e.target) ||
      g.classList.remove(`active`);
  }));
