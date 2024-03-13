import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  }

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        style={{ backgroundColor: selected ? 'rgb(209, 232, 251)' : 'white' }}
        onClick={this.handleClick}
        className= "h-100"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category} - Price: ${book.price}</Card.Text>
          <Card.Text></Card.Text>
          <Button variant="primary" className="w-100">Buy Now</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
