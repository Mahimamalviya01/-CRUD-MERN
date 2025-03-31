import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
          <Nav className="m-auto">
            <Nav.Link href="/user">AllData</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/add-data ">AddData</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/create">CrudOps</NavDropdown.Item>
            </NavDropdown>
            <Row className=' gx-5 '>
          <Col lg="1" className='my-2 m-sm-auto'>
            <Button type="submit" href='/signup'>SignUp</Button>
          </Col>
          <Col  lg="1"  className='my-2 me-sm-auto' >
            <Button type="submit" href='login'>LogIn</Button>
          </Col>
          </Row>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;