import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function WorkCard({ project }) {
  return (
    <Col key={Math.random}>
      <Card className="bg-primary mb-4">
        <Card.Img variant="top" src="works/insta_ui_clone.png" />
        <Card.Body>
          <Card.Title className="text-primary">{project.title}</Card.Title>
          <Card.Text>
            <span>Github</span> | <span>Demo</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default WorkCard;
