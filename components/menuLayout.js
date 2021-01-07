import { Row, Col } from "antd";
import {
  HomeOutlined,
  PictureOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./homepage/home.module.scss";

const MenuLayout = () => {
  return (
    <Row className={styles.menuFooter}>
      <Col span={6}>
        <Link href="/home">
          <div className={styles.menuIcon}>
            <HomeOutlined style={{ fontSize: 24 }} />
            Home
          </div>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/login">
          <div className={styles.menuIcon}>
            <PictureOutlined style={{ fontSize: 24 }} />
            Feed
          </div>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/cart">
          <div className={styles.menuIcon}>
            <ShoppingCartOutlined style={{ fontSize: 24 }} />
            Cart
          </div>
        </Link>
      </Col>
      <Col span={6} className={styles.menuIcon}>
        <Link href="/wishlist">
          <div className={styles.menuIcon}>
            <UserOutlined style={{ fontSize: 24 }} />
            Profile
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default MenuLayout;
