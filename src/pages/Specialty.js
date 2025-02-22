import React, { useState } from "react";
import { content } from "../constant/specialty";
import "../styles/specialty.module.css";

function Specialty() {
  const [items, setItems] = useState(content);

  const handleNext = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };
  const handlePrev = () => {
    setItems((prev) => {
      const last = items[items.length - 1];
      const rest = items.slice(0, items.length - 1);
      return [last, ...rest];
    });
  };
  const handleClick = (index) => {
    setItems((prev) => {
      const first = items[index-1];
      const middle = items.slice(index , items.length);
      const last = items.slice(0, index-1);
      return [first, ...middle, ...last];
    });
  };

  return (
    <div>
      <div class="container">
        <div class="slide">
          {console.log(items)
          }
          {items.map((item, index) => (
            <>
              <div
                class="item"
                id={index}
                style={{
                  backgroundImage: `url(${item.background})`,
                }}
                onClick={() => handleClick(index)}
              >
                <div class="content">
                  <div class="name">{item.name}</div>
                  <div class="des">{item.des}</div>
                  <button>See More</button>
                </div>
              </div>
            </>
          ))}
        </div>

        <div class="button">
          <button
            class="prev"
            onClick={() => {
              handlePrev();
            }}
          >
            &lt;
          </button>
          <button
            class="next"
            onClick={() => {
              handleNext();
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
