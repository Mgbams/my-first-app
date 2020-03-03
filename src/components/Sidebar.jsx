import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { articles, categories } from '../data';
import { Link } from 'react-router-dom';

const SidebarSection = (props) =>
  <section>
    <h2>{props.title}</h2>
    <ListGroup>
      {props.items.map( (item, index) =>
        <ListGroup.Item key={`link${index}`}>
          <Link to={`/${props.type}/${index}`}>
            {item}
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  </section>
;

const Sidebar = () =>
  <aside>
    <SidebarSection
      title="Articles"
      type="article"
      items={articles.map( (item) => item.title )}
    />
    <SidebarSection
      title="Catégories"
      type="category"
      items={categories.map( (item) => item.name )}
    />
  </aside>
;

export default Sidebar;