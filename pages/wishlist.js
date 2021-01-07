import React, { useEffect } from 'react';
import Layout from '../components/layout';
import WishList from '../components/wishlistpage/wishlist';

const WishListPage = () => {
  return (
    <Layout title="WishList">
      <WishList />
    </Layout>
  );
}

export default WishListPage;