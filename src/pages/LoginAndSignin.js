import React, { useState } from "react";
import "../styles/loginAndSignupModules.css";
import {
  BUTTON_LABEL1,
  HEADER_LABEL1,
  HEADER_LABEL2,
  HEADER_LABEL3,
  HEADER_LABEL4,
  HEADER_LABEL5,
  HEADER_LABEL6,
  INPUT_LABEL1,
  INPUT_LABEL2,
  INPUT_LABEL3,
} from "../constant/loginAndSignupConstant";
import style from "../styles/loginAndSignin.module.css";

function LoginAndSignin() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className={`${active ? style.wrapper.active : style.wrapper}`}>
        <span className={style.rotate_bg}></span>
        <span className={style.rotate_bg2}></span>

        <div className={style.form_box.login}>
          ,
          <h2 className={style.title.animation} style={{ "--i": 0, "--j": 21 }}>
            {HEADER_LABEL1}
          </h2>
          <form action="#">
            <div
              className={style.input_box.animation}
              style={{ "--i": 1, "--j": 22 }}
            >
              <input type="text" required />
              <label for="">{INPUT_LABEL1}</label>
              <i className="bx bxs-user"></i>
            </div>

            <div
              className={style.input_box.animation}
              style={{ "--i": 2, "--j": 23 }}
            >
              <input type="password" required />
              <label for="">{INPUT_LABEL2}</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button
              type="submit"
              className={style.btn.animation}
              style={{ "--i": 3, "--j": 24 }}
            >
              {BUTTON_LABEL1}
            </button>

            <div
              className={style.linkTxt.animation}
              style={{ "--i": 5, "--j": 25 }}
            >
              <p>
                {HEADER_LABEL6}
                <a
                  href="#"
                  className={style.register_link}
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {HEADER_LABEL4}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className={style.info_text.login}>
          <h2 className={style.animation} style={{ "--i": 0, " --j": 20 }}>
            {HEADER_LABEL2}
          </h2>
          <p className={style.animation} style={{ "--i": 1, "--j": 21 }}>
            {HEADER_LABEL3}
          </p>
        </div>

        <div className={style.form_box.register}>
          <h2 className={style.title.animation} style={{ "--i": 17, "--j": 0 }}>
            {HEADER_LABEL4}
          </h2>

          <form action="#">
            <div
              className={style.input_box.animation}
              style={{ "--i": 18, "--j": 1 }}
            >
              <input type="text" required />
              <label for="">{INPUT_LABEL1}</label>
              <i className={style.bx.bxs_user}></i>
            </div>

            <div
              className={style.input_box.animation}
              style={{ "--i": 19, "--j": 2 }}
            >
              <input type="email" required />
              <label for="">{INPUT_LABEL3}</label>
              <i className={style.bx.bxs_envelope}></i>
            </div>

            <div
              className={style.input_box.animation}
              style={{ "--i": 20, "--j": 3 }}
            >
              <input type="password" required />
              <label for="">{INPUT_LABEL2}</label>
              <i className={style.bx.bxs_lock_alt}></i>
            </div>

            <button
              type="submit"
              className={style.btn.animation}
              style={{ "--i": 21, "--j": 4 }}
            >
              {HEADER_LABEL4}
            </button>

            <div
              className={style.linkTxt.animation}
              style={{ "--i": 22, "--j": 5 }}
            >
              <p>
                {HEADER_LABEL5}{" "}
                <a
                  href="#"
                  className={style.login_link}
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {HEADER_LABEL1}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className={style.info_text.register}>
          <h2 className={style.animation} style={{ "--i": 17, "--j": 0 }}>
            {HEADER_LABEL2}
          </h2>
          <p className={style.animation} style={{ "--i": 18, "--j": 1 }}>
            {HEADER_LABEL3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignin;
