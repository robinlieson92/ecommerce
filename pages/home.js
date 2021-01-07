import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Home from '../components/homepage/home';
import { getProductData } from "../redux/actions/productActions";
import { connect } from "react-redux";

const HomePage = ({getProductData, isLoading, productData}) => {
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Layout title="HomePage">
      <Home isLoading={isLoading} productData={productData}/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.productsReducer
})

const mapDispatchToProps = (dispatch) => ({ 
  getProductData: () => dispatch(getProductData())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);