import style from "./Header.module.css";
import { Text, Heading, MainButton } from "../../components/componentsIndex";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WorldIcon,
} from "../../assets/IconsIndex/IconsIndex";
import textJson from "../../assets/TextFile/TextFile";
const Header = ({ langIndex, langEvent }) => {
  return (
    <header id="Header" className={style.header + " container"}>
      <div className={style.heading}>
        <Text>{textJson[langIndex].header_hello}</Text>
        <Heading>{textJson[langIndex].header_heading}</Heading>
        <Text styleClass="secondStyle">
          {textJson[langIndex].header_jobTitle}
        </Text>
        <div className={style.buttons}>
          <MainButton link="../../assets/images/background.jpg" download>
            {textJson[langIndex].header_DownloadCV}
          </MainButton>
          <MainButton styleClass="secondStyle">
            {textJson[langIndex].header_letsTalk}
          </MainButton>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.socialButtons}>
          <MainButton styleClass={"socialButton"}>
            <FacebookIcon />
          </MainButton>
          <MainButton
            link="https://twitter.com/webixr"
            styleClass={"socialButton"}
          >
            <TwitterIcon />
          </MainButton>
          <MainButton styleClass={"socialButton"}>
            <LinkedinIcon />
          </MainButton>
          <span className={style.bar}></span>
        </div>
        <div className={style.imageSection}>
          <span className={style.imageCover}></span>
          <span className={style.image}></span>
        </div>
        <div className={style.socialButtons}>
          <MainButton
            styleClass={"socialButton"}
            onclick={langEvent}
            link="change language"
          >
            <WorldIcon />
          </MainButton>
          <span className={style.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
