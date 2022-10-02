import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Helper } from "../../helper/helper";
import { CardProps } from "../../Interface/CardInterface";
import "./card.css";

const CardPage: React.FC<CardProps> = ({
  coatOfArms,
  officialName,
  bul,
  languages,
  maps,
  flags,
  independent,
  translations,
  population,
}) => {
  const bulArray: any[] = bul && Object.entries(bul);
  const languageArray: any[] = languages && Object.entries(languages);

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="w-100">
          <Card className="flex-row mt-3 card-main rounded-0 overflow-hidden">
            <Card.Img
              variant="top"
              src={coatOfArms.png ? coatOfArms.png : flags?.png}
              loading="lazy"
              className="card-img"
            />
            <Card.Body>
              <Card.Title className="text-muted">{officialName}</Card.Title>
              <Card.Title className="text-muted">
                {translations.per?.official}
              </Card.Title>
              <div className="d-flex align-items-end justify-content-end mb-2">
                <a target="_blank" href={maps.googleMaps}>
                  <img
                    className="maps-icon"
                    src="map-icon.png"
                    alt="icon-map-png"
                  />
                </a>
              </div>
              <div>
                <i className="bi bi-translate text-dark"></i>
                {languageArray !== undefined &&
                  languageArray.map((array: any[], index: number) => {
                    return (
                      <span
                        key={index}
                        className="text-muted language-parag px-2"
                      >
                        {array[1]}
                      </span>
                    );
                  })}
              </div>
              <div>
                <p className="text-muted independent-parag">
                  independent: {Helper.ConvertBooleanToYesNo(independent)}
                </p>
                <p className="text-muted independent-parag">
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



 {/* {bulArray !== undefined &&
                  bulArray.map((array: any[], index: number) => {
                    return array.map((object: any, index: number) => (
                      <Card.Text key={index} className="text-muted">
                        {object.official}
                      </Card.Text>
                    ));
                  })} */}
