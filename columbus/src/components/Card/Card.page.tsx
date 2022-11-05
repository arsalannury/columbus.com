import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { Helper } from "../../helper/helper";
import { CardProps } from "../../Interface/CardInterface";
import { Link } from "react-router-dom";
import "./card.css";

const CardPage: React.FC<CardProps> = ({
  coatOfArms,
  officialName,
  languages,
  maps,
  flags,
  independent,
  translations,
  population,
  region,
  common,
}) => {
  const languageArray: any[] = languages && Object.entries(languages);

  return (
    <>
      <Row xs={1} md={2} className="g-4 row-card">
        <Col className="w-100">
          <Card className="flex-lg-row flex-md-row flex-xl-row flex-column mt-3 card-main rounded-0 overflow-hidden">
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              to={`/country/${common}`}
            >
              <Card.Img
                variant="top"
                alt="coat-of-arm"
                src={coatOfArms.png ? coatOfArms.png : flags?.png}
                loading="lazy"
                className="card-img"
              />
            </Link>

            <Card.Body>
              <Card.Title className="text-muted">{officialName}</Card.Title>
              <Card.Title className="text-muted">
                {translations.per?.official}
              </Card.Title>
              <div className="google-map-container p-0 d-flex align-items-end justify-content-end mb-2">
                <a rel="noreferrer"  target="_blank" href={maps.googleMaps}>
                  <img
                    className="maps-icon"
                    src="map-icon.png"
                    alt="location"
                  />
                </a>
              </div>
              <div className="d-none d-md-inline d-lg-inline d-xl-inline">
                <i className="bi bi-translate text-dark"></i>
                {languageArray !== undefined &&
                  languageArray.map((array: any[], index: number) => {
                    return (
                      <span
                        key={index}
                        title="language-span-element"
                        className="text-muted language-parag px-2"
                      >
                        {array[1]}
                      </span>
                    );
                  })}
              </div>
              <div>
                <p className="region text-muted language-parag mt-2">
                  <i style={{ marginRight: "7px" }} className="bi bi-globe"></i>
                  {region}
                </p>
                <p className="d-none d-md-block d-lg-block d-xl-block text-muted independent-parag">
                  independent:{" "}
                  <Badge title="badge-title" pill bg={independent ? "success" : "danger"}>
                    {Helper.ConvertBooleanToYesNo(independent)}
                  </Badge>
                </p>
                <p className="d-none d-md-block d-lg-block d-xl-block text-muted independent-parag">
                  population: {Helper.SortNumbers(population)}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CardPage;
