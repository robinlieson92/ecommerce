import React, { useEffect, useState, useRef } from 'react';
import { Avatar, Row, Col, Input, List } from "antd";
import { useRouter } from 'next/router';
import {
  HeartTwoTone,
  SearchOutlined
} from "@ant-design/icons";
import Link from 'next/link';
import MenuLayout from '../menuLayout';
import styles from './search.module.scss';

const Search = ({productData}) => {
  const router = useRouter();
  const searchRef = useRef(null);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(productData);
    if (productData.length === 0) {
      router.push('/home');
    }
    searchRef.current.focus();
    setSearchProduct((productData || {}).productPromo || []);
  }, [productData]);

  const searchListProduct = () => {
    const list = searchQuery === "" ? [] : searchProduct.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase())).map(item => {
      item = {
        ...item
      };
      return item;
    })
    return list
  }

  const onChangeSearch = (e) => {
    setSearchQuery(e.target.value)
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
                ref={searchRef}
                value={searchQuery}
                onChange={onChangeSearch}
              />
            </Col>
          </Row>

          <Row justify="center">
            <List
              itemLayout="horizontal"
              style={{ width: '100%' }}
              dataSource={searchListProduct()}
              renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.imageUrl} size="large" />}
                  title={item.title}
                  description={
                    <div>{item.price}</div>
                  }
                />
              </List.Item>
              )}
            />
          </Row>

          <MenuLayout></MenuLayout>
        </Col>
      </Row>
    </div>
  );
}

export default Search;