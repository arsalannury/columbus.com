import React from "react";
import { Helper } from "../../../helper/helper";
import { PaperInterface } from "../../../Interface/PaperInterface";
import "./paper.css";
import AREA_ICON from "../../../images/globe.png";
import UNMEMBER_ICON from "../../../images/unMember.png";
import COUNTRY_ICON from "../../../images/country.png";
import FIFA_ICON from "../../../images/fifa.png";
import { Col, Row } from "react-bootstrap";

const GLOBAL_CLASS: string = "d-flex align-items-center justify-content-lg-center justify-content-sm-right";
const TEXT_CLASS = {
  spans: "text-dark",
};

const PaperComponent: React.FC<PaperInterface> = ({
  area,
  unMember,
  common,
  fifa,
}) => {
  return (
    <Row className="paper mt-4 p-5 bg-white ms-0">
        <Col md={3} className={GLOBAL_CLASS}>
          <img loading="lazy" src={AREA_ICON} width="35px" alt="area-icon" />
          <span className="text-secondary global-text">
            <span className={TEXT_CLASS.spans}>area:</span>{" "}
            {area && Helper.SortNumbers(area)} km
          </span>
        </Col>
        <Col md={3} className={GLOBAL_CLASS}>
          <img
            loading="lazy"
            src={UNMEMBER_ICON}
            width="35px"
            alt="unmember-icon"
          />
          <span className="text-secondary global-text">
            <span className={TEXT_CLASS.spans}>unMember:</span>{" "}
            {unMember && Helper.ConvertBooleanToYesNo(unMember)}
          </span>
        </Col>
        <Col md={3} className={GLOBAL_CLASS}>
          <img
            loading="lazy"
            src={COUNTRY_ICON}
            width="35px"
            alt="country-icon"
          />
          <span className="text-secondary global-text">
            <span className={TEXT_CLASS.spans}>name: </span> {common}
          </span>
        </Col>
        <Col md={3} className={GLOBAL_CLASS}>
          <img
            loading="lazy"
            src={FIFA_ICON}
            width="35px"
            alt="fifa-icon"
          />
          <span className="text-secondary global-text">
            <span className={TEXT_CLASS.spans}>fifa: </span> {fifa}
          </span>
        </Col>
    </Row>
  );
};

export default PaperComponent;
