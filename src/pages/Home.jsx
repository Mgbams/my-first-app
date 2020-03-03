import React from 'react';
import { Layout, ArticleList } from '../components';
import { articles } from '../data';

const Home = (props) =>
  <Layout>
    <h1>Mon beau blog</h1>
    <h2>Liste des articles</h2>
    <ArticleList articles={articles} />
  </Layout>
;

export default Home;
