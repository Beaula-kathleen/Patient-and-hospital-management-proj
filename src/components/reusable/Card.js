import React from "react";
import "../../styles/cardModules.css";

function Card({ data }) {
  return (
    <div>
      <div class="card__container">
        {data.map((ele, index) => (
          <article class="card__article" id={index}>
            <img src={ele.img} alt="image" class="card__img" />

            <div class="card__data">
              <span class="card__description">{ele.dep}</span>
              <h2 class="card__title">{ele.name}</h2>
              <a href="#" class="card__button">
                Read More
              </a>
            </div>
          </article>
        ))}
        {/* <article class="card__article">
          <img src="assets/img/landscape-1.png" alt="image" class="card__img" />

          <div class="card__data">
            <span class="card__description">Vancouver Mountains, Canada</span>
            <h2 class="card__title">The Great Path</h2>
            <a href="#" class="card__button">
              Read More
            </a>
          </div>
        </article> */}
      </div>
    </div>
  );
}

export default Card;
