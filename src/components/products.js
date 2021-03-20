import React from 'react';
import { withPoc } from '../services/poc';

const Products = ({ data, loading, error }) => {
  if(loading){
    return <h1>LOADING</h1>
  }

  if(error || !data) {
    console.log('error >>>>>>>>', error);
    return <h1>DEU MERDA</h1>
  }

  console.log('data >>>>>>>>', data);
  return <h1>FOI, MANO</h1>
}

export default withPoc(Products);
