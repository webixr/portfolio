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
      <MainButton styleClass="iconButtonActive" link="#Header" target={"_self"}>
        <HomeIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#About" target={"_self"}>
        <UserIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Skills" target={"_self"}>
        <CodeIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Portfolio" target={"_self"}>
        <BriefIcon />
      </MainButton>
      <MainButton styleClass="iconButton" link="#Contact" target={"_self"}>
        <MessageIcon />
      </MainButton>
    </nav>
  );
};

export default Menu;
