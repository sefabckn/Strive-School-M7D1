const SingleJob = () => {

    return (
        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
        <div className="ms-2 me-auto justify-content-center align-items-center">
                                                <div className="fw-bold">{job.title}</div>
                                               <div>
                                                   <Link to={`${job.company_name}`}>{job.company_name}</Link>
                                                </div>
                                                <div>
                                                    <em>Publication Date:</em> 
                                                    <span className="date1">{moment(job.publication_date).format('DD/MM/YYYY')}</span>
                                                </div>
                                                <Button variant="primary">Add To Fav</Button>{' '}
                                            </div><hr />
        </ListGroup.Item>
    )
}


export default SingleJob