import {
  BootstrapIcon,
  CssIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindIcon,
  CurlyIcon,
} from "../../assets/IconsIndex/IconsIndex";
import textJson from "../../assets/TextFile/TextFile";
import {
  Card,
  Heading,
  HeadingSection,
  Text,
} from "../../components/componentsIndex";
import style from "./Skills.module.css";

const Skills = ({ langIndex }) => {
  const cards = [
    "skills_html",
    "skills_css",
    "skills_bootStrap",
    "skills_tailwind",
    "skills_javaScript",
    "skills_react",
    "skills_git",
    "skills_gitHub",
    "skills_json",
  ];
  const icons = [
    <HtmlIcon />,
    <CssIcon />,
    <BootstrapIcon />,
    <TailwindIcon />,
    <JavascriptIcon />,
    <ReactIcon />,
    <GitIcon />,
    <GitHubIcon />,
    <CurlyIcon />,
  ];
  const result = cards.map((e, ind) => {
    return (
      <Card key={ind}>
        <>{icons[ind]}</>
        <Heading>{textJson[langIndex][e]}</Heading>
      </Card>
    );
  });
  return (
    <div id="Skills" className={style.Skills + " container"}>
      <HeadingSection
        subTitle={textJson[langIndex].skills_title}
        title={textJson[langIndex].skills_heading}
      />
      <div className={style.container}>{result}</div>
    </div>
  );
};

export default Skills;
