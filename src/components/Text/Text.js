import style from "./Text.module.css";

const Text = ({ styleClass, children }) => {
  return (
    <p
      className={
        styleClass === undefined || "" ? style.mainStyle : style[styleClass]
      }
    >
      {children}
    </p>
  );
};
export default Text;
