import "./Card.scss";
import messageIco from "/icons/Message.svg";
import postIco from "/icons/Post.svg";
import scheduleIco from "/icons/Week_Schedule.svg";

export function Card() {
  return `
    <section class="card">

      <div class="card__item">
        <img class="card__icon" src="${messageIco}" alt="Message" />
        <span class="card__text">Build Community</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="${postIco}" alt="Schedule" />
        <span class="card__text">Share Events</span>
      </div>

      <div class="card__item">
        <img class="card__icon" src="${scheduleIco}" alt="Post" />
        <span class="card__text">Get Information</span>
      </div>

    </section>
  `;
}
