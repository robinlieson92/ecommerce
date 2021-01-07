import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Cart from '../components/cartpage/cart';

const CartPage = () => {
  return (
    <Layout title="Purchase History">
      <Cart />
    </Layout>
  );
}

export default CartPage;