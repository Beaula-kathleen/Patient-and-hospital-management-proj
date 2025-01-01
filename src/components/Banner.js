import React from "react";
import styles from "../styles/banner.module.css";
import {
  BANNERCONTENT1,
  BANNERCONTENT2,
  BANNERCONTENT3,
  BANNERCONTENT4,
} from "../constant/home";

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <div className="banner-heading">
          <h2>
            Every good thing
            <br />
            starts with good
            <br />
            health
          </h2>
        </div>

        <div className="banner-subheading">
          <p>
            We are here to serve people with patient centered-care to deliver
            outstanding healthcare for better lives.
          </p>
        </div>
      </div>
      <br/>
      <section className={styles.collage}>
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
      </section>
    </div>
  );
}

export default Banner;
