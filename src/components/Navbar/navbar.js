import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <div className="fixed-top z-1">
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link className="text-primary" href="#me">
            Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-primary" href="#works">
            My Works
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-primary" href="#contact">
            Contact Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
