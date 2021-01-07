import React, { useEffect, useState } from 'react';
import { Avatar, Row, Col, PageHeader, List } from "antd";
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './wishlist.module.scss';

const WishList = () => {
  const router = useRouter();
  const [dataWishlist, setdataWishlist] = useState([]);

  useEffect(() => {
    const storageWishlist = JSON.parse(sessionStorage.getItem('dataWishList'));
    storageWishlist ? setdataWishlist(storageWishlist) : setdataWishlist([]);
  }, []);

  const onBackPage = () => {
    router.push('/home');
  }
  
  return (
    <div>
      <Row justify="center" style={{minWidth: '420px'}}>
        <Col span={24}>
          <Row className={styles.header}>
            <PageHeader
              className={styles.pageHeader}
              onBack={onBackPage}
              title="Wishlist"
            />
          </Row>

          <Row justify="center" style={{ padding: 20 }}>
            <List
              itemLayout="horizontal"
              style={{ width: '100%' }}
              dataSource={dataWishlist}
              renderItem={item => (
              <List.Item style={{ cursor: 'pointer' }}>
                <Link href={{ pathname: '/product-detail', query: {id: item.id} }}>
                  <a style={{ width: '100%' }}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.imageUrl} size="large" />}
                      title={item.title}
                      description={
                        <div>{item.price}</div>
                      }
                    />
                  </a>
                </Link>
              </List.Item>
              )}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default WishList;