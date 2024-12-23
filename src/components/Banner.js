import React from "react";
import "../styles/banner.modules.css";

function Banner() {
  return (
    <div className="bannerContainer">
      <h1>CSS Grid - Photo Collage</h1>

      <section className="collage">
        <div>
          <img
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
            alt="Alt text for the image"
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6"
            alt="Alt text for the image"
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e"
            alt="Alt text for the image"
          />
        </div>

        <div aria-hidden="true"></div>

        <div>
          <img
            src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg"
            alt="Alt text for the image"
          />
        </div>

        <div aria-hidden="true"></div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
            alt="Alt text for the image"
          />
        </div>

        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6"
            alt="Alt text for the image"
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1524492926121-4723520d78d9"
            alt="Alt text for the image"
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
            alt="Alt text for the image"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
