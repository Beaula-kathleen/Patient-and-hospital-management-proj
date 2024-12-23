import React from "react";
import "../styles/banner.modules.css";
import {
  BANNERCONTENT1,
  BANNERCONTENT2,
  BANNERCONTENT3,
  BANNERCONTENT4,
} from "../constant/home";

function Banner() {
  return (
    <div className="bannerContainer">
      <h1>CSS Grid - Photo Collage</h1>

      <section className="collage">
        {BANNERCONTENT1.map((ele, index) => (
          <div id={index}>
            <img src={ele} alt="Alt text for the image" />
          </div>
        ))}

        <div aria-hidden="true"></div>

        <div>
          <img src={BANNERCONTENT2} alt="Alt text for the image" />
        </div>

        <div aria-hidden="true"></div>

        <div>
          <img src={BANNERCONTENT3} alt="Alt text for the image" />
        </div>

        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <>
          {BANNERCONTENT4.map((ele, index) => (
            <div id={index}>
              <img src={ele} alt="Alt text for the image" />
            </div>
          ))}
        </>

        {/* <div>
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
        </div> */}
      </section>
    </div>
  );
}

export default Banner;
