import "./Card.scss";

export function Card() {
  return `
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
  `;
}
