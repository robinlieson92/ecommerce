import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Search from '../components/searchpage/search';

import { connect } from "react-redux";

const SearchPage = ({productData}) => {
  return (
    <Layout title="Search">
      <Search productData={productData}/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  ...state.productsReducer
})

const mapDispatchToProps = (dispatch) => ({ 
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);