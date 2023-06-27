import style from "./Background.module.css";

import bg from "../../assets/images/background.jpg";
const Background = () => {
  return (
    <div
      className={style.background}
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};

export default Background;
