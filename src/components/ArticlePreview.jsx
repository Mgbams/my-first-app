import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { cropText } from '../utils';
import { Link } from 'react-router-dom';

const ArticlePreview = (props) =>
  <Card>
    <Card.Body>
      <Card.Title>{props.title || "Titre de carte"}</Card.Title>
      <Card.Text>
        {cropText(props.text)}...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">
        Lire plus
      </Button>
    </Card.Footer>
  </Card>
;

export default ArticlePreview
