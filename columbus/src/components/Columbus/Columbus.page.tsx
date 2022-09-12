import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row,Col } from 'react-bootstrap'
import './columbus.css'

const ColumbusPage: React.FC = () => {
  return (
    <>
    <Container fluid className='columbus_container'>
         <Row>
            <Col xl="6" sm="12" xs="12">
               
            </Col>
            <Col xl="6" sm="12" xs="12">

            </Col>
         </Row>
    </Container>
    </>
  )
}

export default ColumbusPage