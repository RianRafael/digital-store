import Carousel from 'better-react-carousel'
import styles from './styles.module.scss'
import tenis from "./tenis1.png"
import ornament from "./Ornament.png"
import Botao from '../Botao'



const Banner = () => {


  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: '12px',
        width: '12px',
        background: isActive ? "#C92071" : "#CCCCCC",
        borderRadius: "50%",
        position: 'relative',
        top: '-53px',
      }}
    ></span>
  )


  return (

    <div className={styles.bannerContainer}>
      <Carousel cols={1}
        rows={1}
        gap={10}
        showDots={true}
        dot={MyDot}
        loop={true}
        containerStyle={{ height: "681px" }}
        hideArrow={true}

      >
        <Carousel.Item >
          <div className={styles.divItemCarousel}>
            <div className={styles.divTextoCarouselItem}>
              <h2 className={styles.informativoTexto}>Melhores ofertas personalizadas</h2>
              <h1 className={styles.mainTextoCarousel}>Queima de stoque Nike 🔥</h1>
              <p className={styles.descricaoTextoCarousel}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>
            <div className={styles.divImageCarouselItem}>
              <img src={tenis} />
            </div>
            <div style={{ width: '140px', height: '140px', padding: '0px', margin: '0px', position: 'absolute', top: '78px', right: '37px', }}>
              <img src={ornament} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className={styles.divItemCarousel}>
            <div className={styles.divTextoCarouselItem}>
              <h2 className={styles.informativoTexto}>Melhores ofertas personalizadas</h2>
              <h1 className={styles.mainTextoCarousel}>Queima de stoque Nike 🔥</h1>
              <p className={styles.descricaoTextoCarousel}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>
            <div className={styles.divImageCarouselItem}>
              <img src={tenis} />
            </div>
            <div className={styles.divOrnamentCarousel}>
              <img src={ornament} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className={styles.divItemCarousel}>
            <div className={styles.divTextoCarouselItem}>
              <h2 className={styles.informativoTexto}>Melhores ofertas personalizadas</h2>
              <h1 className={styles.mainTextoCarousel}>Queima de stoque Nike 🔥</h1>
              <p className={styles.descricaoTextoCarousel}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>
            <div className={styles.divImageCarouselItem}>
              <img src={tenis} />
            </div>
            <div className={styles.divOrnamentCarousel}>
              <img src={ornament} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner