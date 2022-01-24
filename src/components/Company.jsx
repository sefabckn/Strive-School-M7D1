import { useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useEffect } from "react"

const Company = ({ jobOffers, setJobOffers }) => {
    const [companyData, setCompanyData] = useState('')
    const params = useParams()
    
    useEffect(()=>{
        fetchCompany()
    }, [])

    const fetchCompany = async () => {
        try {
            let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyName}`)
            if (response.ok) {
                let companyDetails = await response.json()
                console.log(companyDetails)
                setCompanyData(companyDetails.data)
            } else {
                console.log('Error')
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Container >
                <Row>
                    <Col xs={12} md={6}>
                        <ListGroup>
                            {/* {
                                companyData.map((company) => {
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto justify-content-center align-items-center">
                                            <div className="fw-bold">{company.title}</div>
                                            <span>{company.details}</span>
                                            <Button variant="primary">Add To Fav</Button>{' '}
                                        </div><hr />
                                    </ListGroup.Item>
                                })
                            } */}
                        </ListGroup>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default Company