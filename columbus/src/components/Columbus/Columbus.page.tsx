import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import "./columbus.css";
import CardPage from "../Card/Card.page";
import { useAllData } from "../../hooks/fetchAllData";
import { Spinner } from "react-bootstrap";
import { AxiosResponse } from "axios";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import { CountryInterface } from "../../Interface/CountryInterface";

const ColumbusPage: React.FC = () => {
  const columnRef = useRef<HTMLDivElement>(null);
  const { data, isError, isLoading } = useAllData();
  let dataTypeAny = (data as any)?.data;
  const [dataType, setDataType] = useState<any[]>([]);

  const handleScrollSave = (scroll: number): void => {
    localStorage.setItem("scrollTop", JSON.stringify(scroll));
  };

  const handleSearch = (searchedValues: string): void => {
    if (searchedValues.trim().length === 0 || searchedValues.length === 0) {
      setDataType([]);
      return;
    } else {
      const filteredDataType = dataTypeAny.filter(
        (country: CountryInterface) => {
          return country.name.official
            .toLowerCase()
            .includes(searchedValues.toLowerCase());
        }
      );
      setDataType(filteredDataType);
    }
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("scrollTop")) {
      if (columnRef !== null) {
        columnRef!.current?.scrollTo(
          0,
          JSON.parse(localStorage.getItem("scrollTop")!)
        );
      }
    }
  }, []);

  if (isError) {
    return <ErrorBoundryPage />;
  }

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }
  // console.log(data)
  return (
    <>
      <Container fluid className="columbus_container ">
        <Row className="columbus_row">
          <Col lg={6}>
            <section className="introduce_setction">
              <h1 className="columbus-h1">Columbus.com</h1>
              <p className="main_title">search about all countries</p>
              <div className="search-container">
                <i className="bi bi-search"></i>
                <input
                  onInput={(event: any) => handleSearch(event.target.value)}
                  className="search-input"
                  placeholder="search by name"
                  type="text"
                />
              </div>
            </section>
          </Col>

          <Col
            onScroll={(event: any) => {
              handleScrollSave(event.target.scrollTop);
            }}
            lg={6}
            ref={columnRef}
            className="column-scrollable"
          >
            {dataType && dataType.length === 0
              ? dataTypeAny.map((country: any, index: number) => (
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
                ))
              : dataType.map((country: any, index: number) => (
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
