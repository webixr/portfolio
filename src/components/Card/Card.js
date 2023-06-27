import style from "./Card.module.css";

const Card = ({ children, styleClass }) => {
  return (
    <div
      className={
        styleClass === undefined || "" ? style.mainStyle : style[styleClass]
      }
    >
      {children}
    </div>
  );
};

export default Card;
