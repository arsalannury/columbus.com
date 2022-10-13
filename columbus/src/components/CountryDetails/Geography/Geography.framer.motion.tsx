import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "../AltSpellings/altSpellings.css";
import { Helper } from "../../../helper/helper";

interface IProps {
    borders: string[];
    continents : string[];
    landlocked : boolean;
    independent : boolean;
}

const GeographyFramerMotion: React.FC<IProps> = ({
    borders,continents,independent,landlocked
}) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          layoutId="geography"
          layout
          onClick={() => setSelected("geography")}
        >
          <motion.p className="motion-p-main text-dark m-0 text-center">
           geography
          </motion.p>
        </motion.div>
      </Col>
      <AnimatePresence>
        {selected && (
          <motion.div className="w-100 h-50 motion-div-modal d-flex align-items-center position-fixed justify-content-center">
            <motion.div
              layout
              className="motion-div-presence position-relative shadow-lg bg-white "
              layoutId={selected}
              initial={{ opacity: 0, borderRadius: 0 }}
              animate={{ opacity: 1, borderRadius: "2rem" }}
              exit={{ opacity: 0, borderRadius: 0 }}
            >
              <motion.button
                onClick={() => setSelected(undefined)}
                className="position-absolute bg-secondary border-0 motion-btn-close"
              >
                <i className="text-white bi bi-x"></i>
              </motion.button>
              <motion.p className="text-center text-dark m-0 p-2">
              Geography Detail
              </motion.p>
              <motion.hr className="border border-dark text-dark m-0" />
              <motion.div className="d-flex align-items-center justify-content-around">
              <motion.span className="text-secondary">independent: {Helper.ConvertBooleanToYesNo(independent)}</motion.span>
              <motion.span className="text-secondary">landlocked: {Helper.ConvertBooleanToYesNo(landlocked)}</motion.span>
              </motion.div>
              <motion.p className="text-left text-secondary mb-0 ms-3 pt-2" >continents: {continents && continents[0]}</motion.p>
              <motion.ul className="d-flex align-items-center justify-content-around p-0 flex-wrap">
                <motion.p className="text-left text-secondary mb-0">borders: </motion.p>
                {borders?.map((value, index) => (
                  <motion.li className="text-secondary m-0 list-group-item  mr-3" style={{fontSize:".8em"}} key={index}>{value}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeographyFramerMotion;
