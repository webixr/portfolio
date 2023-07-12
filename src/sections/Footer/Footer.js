import textJson from "../../assets/TextFile/TextFile";
import { Heading, Text } from "../../components/componentsIndex";
import style from "./Footer.module.css";

const Footer = ({ langIndex }) => {
  return (
    <footer className={style.footer}>
      <Heading>{textJson[langIndex].footer_title}</Heading>
      <Text>{textJson[langIndex].footer_copyRight}</Text>
    </footer>
  );
};

export default Footer;
