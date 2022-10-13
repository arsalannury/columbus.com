import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "../AltSpellings/altSpellings.css";

interface IProps {
    capitalInfo : {latlng:string[]};
    capital : string[];
}

const CapitalFramerMotion: React.FC<IProps> = ({
    capitalInfo,capital
}) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          layoutId="capital"
          layout
          onClick={() => setSelected("capital")}
        >
          <motion.p className="motion-p-main text-dark m-0 text-center">
           capital
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
                Capital Detail
              </motion.p>
              <motion.hr className="border border-dark text-dark m-0" />
              <motion.p className="text-center text-secondary m-0 pt-2" >{capital && capital[0]}</motion.p>
              <motion.ul>
                {capitalInfo?.latlng.map((value, index) => (
                  <motion.li className="text-secondary m-0 list-group-item pt-4" style={{fontSize:".8em"}} key={index}>{value}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CapitalFramerMotion;
