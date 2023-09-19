import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import wall from 'react-bootstrap/wall.jpg';
// import wall from './Component/wall.jpg';
// import 'wall';
function Product() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1693146261069-0a6f70b6d3c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;