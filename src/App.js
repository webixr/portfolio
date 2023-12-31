import { useState } from "react";
import "./App.css";

import {
  About,
  Contact,
  Footer,
  Header,
  OverLay,
  Portfolio,
  Skills,
} from "./sections/sectionsIndex";

function App() {
  const [lang, setLang] = useState(1);

  const changeLang = (e) => {
    e.preventDefault();
    setLang((l) => (l === 0 ? l + 1 : l - 1));
    lang === 0 ? (document.dir = "rtl") : (document.dir = "ltr");
  };
  return (
    <>
      <OverLay />
      <Header langIndex={lang} langEvent={changeLang} />
      <About langIndex={lang} />
      <Skills langIndex={lang} />
      <Portfolio langIndex={lang} />
      <Contact langIndex={lang} />
      <Footer langIndex={lang} />
    </>
  );
}

export default App;
