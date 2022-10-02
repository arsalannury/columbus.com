import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import "./columbus.css";
import CardPage from "../Card/Card.page";
import { useAllData } from "../../hooks/fetchAllData";
import { Spinner } from "react-bootstrap";
import { AxiosError, AxiosResponse } from "axios";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";

const ColumbusPage: React.FC = () => {
  const { data, isError, isLoading, isFetching, error } = useAllData();
  const errorBoundry = error as AxiosError;
  const dataType = data as AxiosResponse;

  if (isError) {
    return (
         <ErrorBoundryPage />
    );
  }
  console.log(data);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  return (
    <>
      <Container fluid className="columbus_container ">
        <Row className="columbus_row">
          <Col lg={6}>
            <section className="introduce_setction">
              <h1 className="columbus-h1">Columbus.com</h1>
              <p className="main_title">search about all countries</p>
              <p>copyright 2022-2023</p>
            </section>
          </Col>
          <Col
            lg={6}
            style={{ overflowY: "scroll", height: "100%", zIndex: "1" }}
          >
            {dataType.data.map((country: any, index: number) => (
              <CardPage
                key={index}
                coatOfArms={country.coatOfArms}
                officialName={country.name.official}
                bul={country.name.nativeName}
                languages={country.languages}
                maps={country.maps}
                flags={country.flags}
                independent={country.independent}
                translations={country.translations}
                population={country.population}
                region={country.region}
                common={country.name.common}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(ColumbusPage);
