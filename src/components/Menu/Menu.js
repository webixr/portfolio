import { MainButton } from "../componentsIndex";
import {
  HomeIcon,
  UserIcon,
  CodeIcon,
  BriefIcon,
  MessageIcon,
} from "../../assets/IconsIndex/IconsIndex.js";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={style.navBar}>
      <MainButton styleClass="iconButtonActive" link="#Header">
        <HomeIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#About">
        <UserIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Skills">
        <CodeIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Portfolio">
        <BriefIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Contact">
        <MessageIcon />
      </MainButton>
    </nav>
  );
};

export default Menu;
