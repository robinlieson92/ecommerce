import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Input } from "antd";
import {
  HeartTwoTone,
  SearchOutlined,
  LoadingOutlined
} from "@ant-design/icons";
import Link from 'next/link';
import MenuLayout from '../menuLayout';
import CategorySlider from './categorySlider';
import ProductCard from './productCard';
import styles from './home.module.scss';

const Home = ({isLoading, productData}) => {
  const router = useRouter();
  const [listProduct, setListProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    setListProduct((productData || {}).productPromo || []);
    setListCategory((productData || {}).category || []);
  }, [productData]);

  const goToSearchPage = (e) => {
    e.preventDefault();
    router.push('/search');
  }
  
  return (
    <div>
      <Row justify="center" style={{minWidth: '420px'}}>
        <Col span={24}>
          <Row className={styles.header}>
            <Col span={2}>
              <Row justify="center">
                <Link href="/wishlist">
                  <HeartTwoTone style={{ fontSize: 24 }} />
                </Link>
              </Row>
            </Col>
            <Col span={20} gutter={1}>
              <Input placeholder="Search"
                prefix={<SearchOutlined/>}
                onFocus={goToSearchPage}
              />
            </Col>
          </Row>

          <Row justify="center">
            { isLoading &&
              <Col span={24} className={styles.loading}>
                <LoadingOutlined />  Loading ...
              </Col>
            }
            { !isLoading &&
              <Col>
                <Row className={styles.sliderContainer}>
                  <CategorySlider dataCategory={listCategory} />
                </Row>

                <Row className={styles.productContainer} justify="center">
                  <ProductCard dataProduct={listProduct} />
                </Row>
              </Col>
            }
          </Row>

          <MenuLayout></MenuLayout>
        </Col>
      </Row>
    </div>
  );
}

export default Home;