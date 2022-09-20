import React, { ReactNode } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import "./columbus.css";
import CardPage from "../Card/Card.page";
import { useAllData } from "../../hooks/fetchAllData";
import {Spinner} from 'react-bootstrap';

const ColumbusPage: React.FC = () => {
  const { data, isError, isLoading, isFetching, error } = useAllData();
  const errorBoundry = error as ReactNode;

  if (isError) {
    return (
      <>
        <h1>{errorBoundry}</h1>
        <p>check your internet connection</p>
      </>
    )
  }

  if(isLoading) {
   return <Spinner animation="grow" variant="light" /> 
  }

  return (
    <>
      <Container fluid className="columbus_container ">
        <Row className="columbus_row">
          <Col lg={6}>
            <section className="introduce_setction">
              <h1>Columbus.com</h1>
              <p className="main_title">search about all countries</p>
              <p>copyright 2022-2023</p>
            </section>
          </Col>
          <Col lg={6}>
            <CardPage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ColumbusPage;
