import React, { useEffect, useState } from 'react';
import '../styles/Covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';


const Covid = () => {

    const[data,setKroData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setKroData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <Container>

                <div class="heading">  <h1><span>LIVE</span> COVID-19 TRACKER</h1></div>

                <Row className="mx-0 elem">
                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">COUNTRY</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>India</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">TOTAL RECOVERED</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>{data.recovered}</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">CONFIRMED CASES</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>{data.confirmed}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className="mx-0 elem">
                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">TOTAL DEATHS</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>{data.deaths}</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">ACTIVE CASES</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>{data.active}</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mb-4" style={{ width: '20rem', height: '14rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">LAST UPDATED</Card.Title>
                                <Button className="btnn" variant="light" style={{ fontWeight: 'bold', fontSize: 'large' }}>{data.lastupdatedtime}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Covid;