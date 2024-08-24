import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link>Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>My Works</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
