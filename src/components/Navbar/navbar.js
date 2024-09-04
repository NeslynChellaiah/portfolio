import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed-top z-1">
      <Nav className="justify-content-center" defaultActiveKey="/#me">
        <Nav.Item>
          <Nav.Link
            className="text-primary"
            onClick={(e) => {
              scrollToSection("me");
            }}
          >
            Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-primary"
            onClick={() => scrollToSection("works")}
          >
            My Works
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-primary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
