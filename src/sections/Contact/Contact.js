import {
  GmailIcon,
  MessageIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../../assets/IconsIndex/IconsIndex";
import textJson from "../../assets/TextFile/TextFile";
import {
  Card,
  Heading,
  HeadingSection,
  MainButton,
  Text,
} from "../../components/componentsIndex";
import style from "./Contact.module.css";

const Contact = ({ langIndex }) => {
  const cardsData = [
    {
      icon: <GmailIcon />,
      heading: textJson[langIndex].contact_email,
      title: textJson[langIndex].contact_emailAddress,
      link: "mailto:webixr1@gmail.com",
    },
    {
      icon: <WhatsappIcon />,
      heading: textJson[langIndex].contact_whatsApp,
      title: textJson[langIndex].contact_whatsAppAddress,
      link: "https://wa.link/dii1bk",
    },
    {
      icon: <TwitterIcon />,
      heading: textJson[langIndex].contact_twitter,
      title: textJson[langIndex].contact_twitteAddressr,
      link: "https://twitter.com/webixr",
    },
  ];
  const result = cardsData.map((e, ind) => {
    return (
      <Card key={ind} className={style.card}>
        <>{e.icon}</>
        <Heading>{e.heading}</Heading>
        <Text>{e.title}</Text>
        <a href={e.link}>{textJson[langIndex].contact_heading}</a>
      </Card>
    );
  });
  return (
    <div id="Contact" className={style.contact + " container"}>
      <HeadingSection
        subTitle={textJson[langIndex].contact_title}
        title={textJson[langIndex].contact_heading}
      />
      <div className={style.container}>
        <div className={style.formContainer}>
          <form
            className={style.form}
            action="https://formsubmit.co/webixr1@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from webixr page."
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className={style.formInputs}>
              <label htmlFor="fullName">
                {textJson[langIndex].contact_formFullName}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder={textJson[langIndex].contact_formFullName}
                required
              />
            </div>
            <div className={style.formInputs}>
              <label htmlFor="email">
                {textJson[langIndex].contact_formEmail}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={textJson[langIndex].contact_formEmail}
                required
              />
            </div>
            <div className={style.formInputs}>
              <label htmlFor="message">
                {textJson[langIndex].contact_formMessage}
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                defaultValue={textJson[langIndex].contact_formMessage}
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value={textJson[langIndex].contact_formSendButton}
            />
          </form>
        </div>
        <div className={style.cards}>{result}</div>
      </div>
    </div>
  );
};

export default Contact;
