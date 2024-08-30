import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./work-card.css";

function WorkCard({ project }) {
  return (
    <Col key={Math.random}>
      <Card className="bg-primary mb-4">
        <Card.Img variant="top" src={`works/${project?.img}.png`} />
        <Card.Body>
          <Card.Title className="text-primary title">
            {(project?.title || "") + " "}
            <a href={project?.demo} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="icon text-primary"
              />
            </a>
          </Card.Title>
          <Card.Text>
            <a href={project?.git} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon icon-20 text-primary"
              />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default WorkCard;
