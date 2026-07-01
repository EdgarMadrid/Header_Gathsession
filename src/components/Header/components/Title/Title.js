import "./Title.scss";

export function Title() {
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
          <img class="title__icon" src="/src/assets/icons/Arrow.svg" alt="">
        </a>

      </div>

    </section>
  `;
}
