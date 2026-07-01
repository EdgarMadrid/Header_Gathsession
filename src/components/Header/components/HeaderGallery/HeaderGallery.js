import "./HeaderGallery.scss";
import handsomeImg from "/image/handsome-serious-calm.png";
import prettyImg from "/image/pretty-young-asian-woman.png";
import positiveImg from "/image/positive-dark-skinned.png";
import smilingImg from "/image/positive-smiling-handsome.png";
import youngImg from "/image/vertical-shot-of-young.png";

export function HeaderGallery() {
  return `
    <section class="headerGallery">

        <img class="headerGallery__img" src="${handsomeImg}" alt="Foto">
        <img class="headerGallery__img" src="${prettyImg}" alt="Foto">
        <img class="headerGallery__img" src="${positiveImg}" alt="Foto">
        <img class="headerGallery__img" src="${smilingImg}" alt="Foto">
        <img class="headerGallery__img" src="${youngImg}" alt="Foto">

    </section>
  `;
}
