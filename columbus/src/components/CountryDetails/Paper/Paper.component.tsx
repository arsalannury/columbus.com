import React from "react";
import { Helper } from "../../../helper/helper";
import { PaperInterface } from "../../../Interface/PaperInterface";
import "./paper.css";
import AREA_ICON from "../../../images/globe.png";
import UNMEMBER_ICON from "../../../images/unMember.png";
import COUNTRY_ICON from "../../../images/country.png";
import FIFA_ICON from "../../../images/fifa.png";
import LAST_LAYER from "../../../images/blob-one.svg";
import MIDDLE_LAYER from "../../../images/blob-two.svg";
import FIRST_LAYER from "../../../images/blob-three.svg";
import PEOPLE from "../../../images/people.png";
import SEDAN from "../../../images/sedan.png";
import PROFIT from "../../../images/profit.png";
import NONEIMAGE from '../../../images/there-is-no-image.png';
import CURRENCY from "../../../images/currency.png";
import { Col, Row, Image } from "react-bootstrap";
import TranslationsComponent from "../Translations/Translations.component";

const GLOBAL_CLASS: string = "d-flex align-items-center py-2";
const TEXT_CLASS = {
  spans: "text-dark",
};

const PaperComponent: React.FC<PaperInterface<any>> = ({
  area,
  unMember,
  common,
  fifa,
  coatOfArms,
  car,
  demonyms,
  currencies,
  gini,
  translations,
}) => {
  const demonymsToArray = demonyms && Object.values(demonyms);
  const currenciesToArray = currencies && Object.values(currencies);

  return (
    <div className="paper mt-4 p-lg-5 p-1 bg-white ms-0">
      <Row>
        <Col lg={6} sm={12} xs={12}>
          <Row className="border-bottom">
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={AREA_ICON}
                width="35px"
                alt="area-icon"
                className="mx-1"
              />
              <span className="text-secondary global-text">
                <span className={TEXT_CLASS.spans}>area:</span>{" "}
                {area && Helper.SortNumbers(area)} km
              </span>
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={UNMEMBER_ICON}
                width="35px"
                alt="unmember-icon"
                className="mx-1"
              />
              <span className="text-secondary global-text">
                <span className={TEXT_CLASS.spans}>unMember:</span>{" "}
                {unMember !== undefined &&
                  Helper.ConvertBooleanToYesNo(unMember)}
              </span>
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={COUNTRY_ICON}
                width="35px"
                alt="country-icon"
                className="mx-1"
              />
              <span className="text-secondary global-text">
                <span className={TEXT_CLASS.spans}>name: </span> {common}
              </span>
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={FIFA_ICON}
                width="35px"
                alt="fifa-icon"
                className="mx-1"
              />
              <span className="text-secondary global-text">
                <span className={TEXT_CLASS.spans}>fifa: </span> {fifa}
              </span>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={PEOPLE}
                width="35px"
                alt="fifa-icon"
                className="mx-1"
              />
              <span className={TEXT_CLASS.spans}>demonyms: </span>
              {demonymsToArray !== undefined &&
                demonymsToArray.map((object: any, index: number) => (
                  <span key={index} className="text-secondary global-text ms-1">
                    {object[Object.keys(object)[0]]}
                  </span>
                ))}
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={CURRENCY}
                width="35px"
                alt="currency-icon"
                className="mx-1"
              />
              <span className={TEXT_CLASS.spans}>currency: </span>
              {currenciesToArray !== undefined &&
                currenciesToArray.map((object: any, index: number) => (
                  <span key={index} className="text-secondary global-text ms-1">
                    {object["name"]} - {object["symbol"]}
                  </span>
                ))}
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={SEDAN}
                width="35px"
                alt="sedan-icon"
                className="mx-1"
              />
              <p className={`${TEXT_CLASS.spans} mb-0 ms-1`}>
                car:{" "}
                <span className="text-secondary global-text ms-1">
                  {car?.side}
                </span>
              </p>
            </Col>
            <Col md={6} xs={12} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={PROFIT}
                width="35px"
                alt="profit-icon"
                className="mx-1"
              />
              <p className={`${TEXT_CLASS.spans} mb-0 ms-1`}>
                gini:{" "}
                <span className="text-secondary global-text ms-1">
                  {gini && gini[Object.keys(gini)[0]]}
                </span>
              </p>
            </Col>
          </Row>
          <div>
            <TranslationsComponent translations={translations} />
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          xs={12}
          className="coat-layers-container d-flex align-items-center justify-content-center p-lg-0 p-sm-5 p-5 position-relative"
        >
          <Image
            loading="lazy"
            src={FIRST_LAYER}
            className="last-layer position-absolute"
          />
          <Image
            loading="lazy"
            src={MIDDLE_LAYER}
            className="middle-layer position-absolute"
          />
          <Image
            loading="lazy"
            src={LAST_LAYER}
            className="first-layer position-absolute"
          />
          <Image
            src={coatOfArms && coatOfArms.png ? coatOfArms.png : NONEIMAGE}
            className="country-coatOfArms"
            alt="country-coatOfArms.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaperComponent;
