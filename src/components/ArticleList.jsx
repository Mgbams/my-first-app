import React from 'react';
import { ArticlePreview } from '.';
import data from '../data/articles';

const ArticleList = () =>
  <section className="card-list">
    {data.map( (item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
      />
    )}
  </section>
;

export default ArticleList;
