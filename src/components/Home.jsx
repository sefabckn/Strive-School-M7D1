import Card from 'react-bootstrap/Card'
import {Nav, Container, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, setState } from 'react';
import reactDom from 'react-dom';
const Home = async () =>{
    
    const [query, setQuery] = useState();
    
    try {
        let fetchingData = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=' + 'frontend' + '&limit=10')
        if(!fetchingData.ok){
            const message = `An error has occured: ${fetchingData.status}`;
            throw new Error(message)
        }
        const jobs = await fetchingData.json()
        return jobs

    } catch (error) {
        console.log(error)
    }
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
                    value ={setQuery}
                    onChange={(e)=> setQuery({query:e.target.value})}
                    />
                    <Button variant="outline-success" >Search</Button>
                </Form>
                </Container>
            </Navbar>
 
  

            <h1>Here is your Job Search Results: </h1>
            

        

        </>
    )




}
export default Home