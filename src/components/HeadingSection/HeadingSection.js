import style from "./HeadingSection.module.css";
import { Heading, Text } from "../componentsIndex";
const HeadingSection = ({ title, subTitle }) => {
  return (
    <div className={style.headingSection}>
      <Text styleClass="secondStyle">{subTitle}</Text>
      <Heading styleClass="secondStyle">{title}</Heading>
    </div>
  );
};

export default HeadingSection;
