import React from 'react';
import { Layout, ArticleList } from '../components';
import { articles } from '../data';

const Search = (props) => {
  const argument = props.match.params.argument;
  const selectedArticles = articles.filter((article) => 
  article.title.toLocaleLowerCase().includes(argument) || article.text.toLocaleLowerCase().includes(argument)
  );

  return (
    <Layout>
      <h1>Recherche</h1>
      <h2>Articles correspondent au terme de recherce: {argument}</h2>
      <ArticleList articles={selectedArticles} />
    </Layout>
  );
}

export default Search;