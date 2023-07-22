import textJson from '../../assets/TextFile/TextFile'
import { HeadingSection, MainButton, Text } from '../../components/componentsIndex'
import style from './Portfolio.module.css'

const Portfolio = ({langIndex}) => {
    const card = [
        {
            name: "agency landing page",
            img: require("../../assets/images/agency landing.png"),
        },
        {
            name: "digital marketing",
            img: require("../../assets/images/digital marketing.png"),
        },
        {
            name: "insurance page",
            img: require("../../assets/images/insurance.png"),
        },
        {
            name: "next invest",
            img: require("../../assets/images/next invest.png"),
        },
        {
            name: "studio design",
            img: require("../../assets/images/studio design.png"),
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
        <HeadingSection
            subTitle={textJson[langIndex].portfolio_title}
            title={textJson[langIndex].portfolio_heading}
        />
      <div className={style.container}>{result}</div>
    </div>
  )
}

export default Portfolio