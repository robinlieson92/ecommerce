import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import ProductDetail from '../components/productpage/product';
import { useRouter } from 'next/router';

import { connect } from "react-redux";

const ProductPage = ({productData}) => {
  const router = useRouter();
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (productData.length === 0) {
      router.push('/home');
    }
    setListProduct((productData || {}).productPromo || []);
  }, [productData]);

  return (
    <Layout title="Product Detail">
      <ProductDetail listProduct={listProduct}/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.productsReducer
})

const mapDispatchToProps = (dispatch) => ({ 
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);