import { Col, Row } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './home.module.scss';

const CategorySlider = ({ dataCategory }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true
  };
  
  return (
    <Slider {...settings}>
      {
        dataCategory.map(item => {
          return (
            <div key={item.id}>
              <Row>
                <Col>
                  <Row className={styles.cardSlider}>
                    <img alt={item.imageUrl} src={item.imageUrl} style={{ maxWidth: 60 }} />
                    <div>{item.name}</div>
                  </Row>
                </Col>
              </Row>
            </div>
          )
        })
      }
    </Slider>
  )
}

export default CategorySlider;