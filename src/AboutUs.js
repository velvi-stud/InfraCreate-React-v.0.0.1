import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Row, Card, Col } from 'react-bootstrap';
import rv from './images/coop/romeo_velvi.webp.jpg'
import adr from './images/coop/alessandro_della_rocca.webp.jpg'
import ac from './images/coop/annamaria_colantuono.webp.jpg'
import em from './images/coop/emanuela_mostrato.webp.jpg'
import fc from './images/coop/fabio_cornevilli.webp.jpg'
import gr from './images/coop/gianluca_roscigno.webp.jpg'

const AboutUs = () => {
    //TODO controllare perchè non funziona About us con RUTE E LINK
    return (
        <div className='mt-2 container-fluid'>
            <Container className=''>
                <Row className="mt-5 text-left" style={{ display: "initial" }}>
                    <h1 className='display-4'> Why this App? </h1>
                    <p style={{ fontSize: "1.4em", textAlign: "initial" }}>
                        This app was born as internship project with the intent to create a 
                        support for the creation and maganagement of infrastructure using a grafic
                        approach to take an output a file (TOSCA standard) containing the topology 
                        built with this App.
                    </p>
                </Row>
                <Row className="mt-5 text-left" style={{ display: "initial" }}>
                    <h1 className='display-4'> Who are we? </h1>
                    <p style={{ fontSize: "1.4em", textAlign: "center" }}>
                        We are a team of System Management Enterprise. <br></br>
                        We are:
                    </p>
                    <Container className='container-fluid justify-content-center text-center'>
                        <Row className=' justify-content-center text-center'>

                            <Col xs={12} md={6} lg={3} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', display: 'flex' }}>
                                    <Card.Img variant="top" src={ac} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Annamaria Colantuono</Card.Title>
                                        <Card.Text>
                                            HR Specialist
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:acolantuono@sysmanagement.it">acolantuono@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={3} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', display: 'flex' }}>
                                    <Card.Img variant="top" src={adr} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Alessandro Della Rocca</Card.Title>
                                        <Card.Text>
                                            Big Data and IoT Technical Team Leader
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:adellarocca@sysmanagement.it">adellarocca@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={3} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', }}>
                                    <Card.Img variant="top" src={em} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Emanuela Mostrato</Card.Title>
                                        <Card.Text>
                                            HR Specialist
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:emostrato@sysmanagement.it">emostrato@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={3} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', display: 'flex' }}>
                                    <Card.Img variant="top" src={fc} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Fabio Cornevilli</Card.Title>
                                        <Card.Text>
                                            Research And Development Manager
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:fcornevilli@sysmanagement.it">fcornevilli@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                        <Row className=' justify-content-center text-center'>
                            <Col xs={12} md={6} lg={6} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', }}>
                                    <Card.Img variant="top" src={gr} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Gianluca Roscigno</Card.Title>
                                        <Card.Text>
                                            Data Scientist And Data Analytics Platform Engineer
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:groscigno@sysmanagement.it">groscigno@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={6} className=' container-fluid justify-content-center text-center mt-3' style={{ display: 'flex' }}>
                                <Card style={{ width: '15em', }}>
                                    <Card.Img variant="top" src={rv} height={'230em'} />
                                    <Card.Body>
                                        <Card.Title>Romeo Velvi</Card.Title>
                                        <Card.Text>
                                            Trainee Computer Science
                                        </Card.Text>
                                        <Card.Text>
                                            <a href="mailto:rvelvi-external@sysmanagement.it">rvelvi-external@sysmanagement.it</a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>

                        </Row>

                    </Container>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;