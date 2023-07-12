import style from "./MainButton.module.css";
const MainButton = ({ children, styleClass, link, onclick, target }) => {
  return (
    <a
      className={
        styleClass === undefined || "" ? style.mainStyle : style[styleClass]
      }
      href={link === undefined || "" ? "#" : link}
      target={target === undefined || "" ? "_blank" : target}
      onClick={onclick}
    >
      {children}
    </a>
  );
};

export default MainButton;
