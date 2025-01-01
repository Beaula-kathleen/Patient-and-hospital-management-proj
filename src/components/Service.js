import style from "../styles/service.module.css";
import { hospitalServices } from "../constant/home";
// import {services} from "../constant/home/hospitalServices"

const Service = () => {
  return (
    <div className={style.container}>
      {hospitalServices.map((service, index) => (
        <div key={index} className={style.service_container}>
          <div className={style.service_icon}>
            <img src={service.image} alt="service-icon" />
          </div>

          <div className={style.service_head}>
            <h5>{service.name}</h5>
          </div>

          <div className={style.service_body}>
            <p>{service.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
