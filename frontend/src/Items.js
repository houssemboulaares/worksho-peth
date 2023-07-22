import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Items({e}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
         {e.password}
        </Card.Text>
        <Card.Text>
         {e.email}
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Items;