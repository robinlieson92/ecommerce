import { Col, Row, Typography } from 'antd';
import styles from './home.module.scss';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import Link from 'next/link';

const ProductCard = ({ dataProduct }) => {
  const { Text } = Typography;
  return (
    <Col span={20}>
      {
        dataProduct.map(product => {
          return (
            <Link href={{ pathname: '/product-detail', query: {id: product.id} }} key={product.id}>
              <Row className={styles.cardProduct}>
                <Col>
                  <Row>
                    <img src={product.imageUrl} style={{maxWidth: 250}}/>
                  </Row>
                </Col>
                <Col span={24} style={{ marginTop: 5 }}>
                  <Row style={{fontSize: 20}}>
                    <Col span={22}>
                      <Text strong>{product.title}</Text>
                    </Col>
                    <Col span={2}>
                      <span>{ product.loved === 0 ? <HeartOutlined /> : <HeartFilled style={{ color: 'red' }} /> }</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Link>
          )
        })
      }
    </Col>
  )
}

export default ProductCard;