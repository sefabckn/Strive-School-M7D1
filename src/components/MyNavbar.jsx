import {Nav, Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'

const MyNavbar = () =>{

    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Find a Job</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
 
  
</>
    )
}
export default MyNavbar