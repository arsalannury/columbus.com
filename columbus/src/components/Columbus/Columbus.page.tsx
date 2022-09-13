import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row,Col } from 'react-bootstrap'
import './columbus.css'

const ColumbusPage: React.FC = () => {
  return (
    <>
    <Container fluid className='columbus_container '>
         <Row className='columbus_row'>
            <Col lg={6}>
               <section className='introduce_setction'>
                  <h1>Columbus.com</h1>
                  <p className='main_title'>search about all countries</p>
                  <p>copyright 2022-2023</p>
               </section>
            </Col>
            <Col lg={6}>
               ddd
            </Col>
         </Row>
    </Container>
    </>
  )
}

export default ColumbusPage