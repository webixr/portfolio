import style from "./Heading.module.css";

// بناء عنصر و تحديد الكلاس ستايل عن الانشاء

const Heading = ({ styleClass, children }) => {
  return (
    <h1
      className={
        styleClass === undefined || "" ? style.mainStyle : style[styleClass]
      }
    >
      {children}
    </h1>
  );
};

export default Heading;
