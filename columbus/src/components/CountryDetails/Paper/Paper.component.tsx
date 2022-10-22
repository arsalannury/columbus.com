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
import CURRENCY from "../../../images/currency.png";
import { Col, Row, Image } from "react-bootstrap";

const GLOBAL_CLASS: string = "d-flex align-items-center py-2";
const TEXT_CLASS = {
  spans: "text-dark",
};

const PaperComponent: React.FC<PaperInterface> = ({
  area,
  unMember,
  common,
  fifa,
  coatOfArms,
  car,
  demonyms
}) => {
  const toArray = demonyms && Object.entries(demonyms);
  console.log(demonyms);
  
  return (
    <div className="paper mt-4 p-lg-5 p-1 bg-white ms-0">
      <Row>
        <Col lg={6} sm={12} xs={12}>
          <Row className="border-bottom">
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}>
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
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}>
              <Image
                loading="lazy"
                src={UNMEMBER_ICON}
                width="35px"
                alt="unmember-icon"
                className="mx-1"
              />
              <span className="text-secondary global-text">
                <span className={TEXT_CLASS.spans}>unMember:</span>{" "}
                {unMember && Helper.ConvertBooleanToYesNo(unMember)}
              </span>
            </Col>
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}>
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
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}>
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
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}>
            <Image
                loading="lazy"
                src={PEOPLE}
                width="35px"
                alt="fifa-icon"
                className="mx-1"
              />
                <span className={TEXT_CLASS.spans}>demonyms: </span> 
                   {toArray !== undefined &&
                  toArray.map((array: any[]) => {
                    return array.map((object: any, index: number) => (
                      <span key={index} className="text-secondary global-text ms-1">
                        {console.log(object)}
                        {object[Object.keys(object)[0]]}
                      </span>
                    ));
                  })} 
            </Col>
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}></Col>
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}></Col>
            <Col md={6} xs={6} sm={6} className={GLOBAL_CLASS}></Col>
          </Row>
        </Col>
        <Col
          lg={6}
          sm={12}
          xs={12}
          className="d-flex align-items-center justify-content-center p-md-0 p-sm-5 p-5 position-relative"
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
            src={coatOfArms?.png}
            className="country-coatOfArms"
            alt="country-coatOfArms.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaperComponent;
 