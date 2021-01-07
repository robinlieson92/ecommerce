import React, { useEffect, useState } from 'react';
import { Row, Col, PageHeader, Typography, Button } from "antd";
import { useRouter } from 'next/router';
import {
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled
} from "@ant-design/icons";
import styles from './product.module.scss';
import _ from "lodash";

const Product = ({listProduct}) => {
  const { Text } = Typography;
  const router = useRouter();
  const [productDetail, setProductDetail] = useState({});
  const [LoveStatus, setLoveStatus] = useState(0);

  useEffect(() => {
    getProductDetail(router.query.id);
  }, [listProduct]);

  useEffect(() => {
    const wishlistStorage = JSON.parse(sessionStorage.getItem("dataWishList"));
    if (LoveStatus === 1) {
      if (!wishlistStorage) {
        sessionStorage.setItem("dataWishList", JSON.stringify([productDetail]));
      } else {
        wishlistStorage.unshift(productDetail);
        sessionStorage.setItem("dataWishList", JSON.stringify(wishlistStorage));
      }
    }
  }, [LoveStatus]);

  const getProductDetail = (id) => {
    if ((id !== null) && (listProduct.length !== 0)) {
      const product = listProduct.find( product => (product.id === id) );
      setProductDetail(product);
      setLoveStatus(product.loved);
    }
  }

  const onClickLove = () => {
    LoveStatus === 0 ? setLoveStatus(1) : setLoveStatus(0);
  }

  const onBackPage = () => {
    router.push('/home');
  }

  const onAddBuy = () => {
    const purchaseStorage = JSON.parse(sessionStorage.getItem("dataCart"));
    if (!purchaseStorage) {
      sessionStorage.setItem("dataCart", JSON.stringify([productDetail]));
    } else {
      purchaseStorage.unshift(productDetail);
      sessionStorage.setItem("dataCart", JSON.stringify(purchaseStorage));
    }
    router.push('/cart');
  }
  
  return (
    <div>
      <Row justify="center" style={{minWidth: '420px'}}>
        <Col span={24}>
          <Row className={styles.header}>
            <PageHeader
              className={styles.pageHeader}
              onBack={onBackPage}
              title="Product Detail"
            />
          </Row>

          <Row justify="center" style={{ padding: 20 }}>
            <Col>
              <Row>
                <img src={productDetail.imageUrl} style={{maxWidth: 250}}/>
              </Row>
            </Col>
            <Col span={24} style={{ marginTop: 10 }}>
              <Row style={{fontSize: 20}}>
                <Col span={20}>
                  <Text strong>{productDetail.title}</Text>
                </Col>
                <Col span={4}>
                  <span style={{ marginRight: 15 }}><ShareAltOutlined /></span>
                  <span onClick={() => onClickLove(!LoveStatus)}>{ LoveStatus === 0 ? <HeartOutlined /> : <HeartFilled style={{ color: 'red' }} /> }</span>
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{ marginTop: 20 }}>
              <Row>
                { productDetail.description }
              </Row>
              <Row justify="space-between" style={{ marginTop: 15 }}>
                <Text strong>{productDetail.price}</Text>
                <Button type="primary" onClick={onAddBuy}>Buy</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Product;