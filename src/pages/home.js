import React from 'react';
import Title from '../components/test-component';
import { Link } from 'react-router-dom';

const Home = () => (
  <Title><Link to="/produtos">Welcome home, Erick!!!!</Link></Title>
);

export default Home;