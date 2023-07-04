import textJson from '../../assets/TextFile/TextFile'
import { HeadingSection, MainButton, Text } from '../../components/componentsIndex'
import style from './Portfolio.module.css'

const Portfolio = ({langIndex}) => {
    const card = [
        {
            name: "spa dashboard",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "spa dashboard",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "spa dashboard",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "spa dashboard",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "spa dashboard",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "portfolio",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "snake game",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "calculator",
            img: require("../../assets/images/website template image.jpg"),
        },
        {
            name: "todo list",
            img: require("../../assets/images/website template image.jpg"),
        },
    ]
    const result = card.map((e, ind) => {
        return (
            <MainButton key={ind} styleClass="portfolio-button">
                <img src={e.img} alt={`${e.name} image`} className={style.image} />
                <Text styleClass="portfolio-text">{e.name}</Text>
            </MainButton>
        )
    })
  return (
    <div id="Portfolio" className={style.portfolio + " container"}>
        
      <div className={style.container}>{result}</div>
    </div>
  )
}

export default Portfolio