import {
  Card,
  Heading,
  HeadingSection,
  MainButton,
  Text,
} from "../../components/componentsIndex";
import textJson from "../../assets/TextFile/TextFile";
import style from "./About.module.css";
import { HomeIcon } from "../../assets/IconsIndex/IconsIndex";

const About = ({ langIndex }) => {
  return (
    <div id="About" className={style.about + " container"}>
      <HeadingSection
        subTitle={textJson[langIndex].About_title}
        title={textJson[langIndex].About_heading}
      />
      <div className={style.container}>
        <div className={style.imageSection}>
          <span className={style.imageCover}></span>
          <span className={style.image}></span>
        </div>
        <div>
          <div className={style.cards}>
            <Card styleClass="mainStyle">
              <HomeIcon />
              <Heading>{textJson[langIndex].About_experienceTitle}</Heading>
              <Text styleClass="secondStyle">
                {textJson[langIndex].About_experienceSubTitle}
              </Text>
            </Card>
            <Card styleClass="mainStyle">
              <HomeIcon />
              <Heading>{textJson[langIndex].About_clientsTitle}</Heading>
              <Text styleClass="secondStyle">
                {textJson[langIndex].About_clientsSubTitle}
              </Text>
            </Card>
            <Card styleClass="mainStyle">
              <HomeIcon />
              <Heading>{textJson[langIndex].About_projectsTitle}</Heading>
              <Text styleClass="secondStyle">
                {textJson[langIndex].About_projectsSubTitle}
              </Text>
            </Card>
          </div>
          <div className={style.content}>
            <Text styleClass="secondStyle">
              {textJson[langIndex].About_description}
            </Text>
            <MainButton styleClass="secondStyle">
              {textJson[langIndex].About_letsTalk}
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
