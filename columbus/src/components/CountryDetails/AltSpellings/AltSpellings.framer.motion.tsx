import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "./altSpellings.css";
import { AltSpellingsInterface } from "../../../Interface/AltSpellingsInterface";

const AltSpellingsFramerMotion: React.FC<AltSpellingsInterface> = ({
  altSpellings,
}) => {
  const [selectedId, setSelectedId] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4 d-flex align-items-center justify-content-center">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          data-testid="motion-container"
          layoutId="alt-spellings"
          layout
          onClick={() => setSelectedId("alt-spellings")}
        >
          <motion.p className="motion-p-main text-dark m-0 text-center">
            alt spellings
          </motion.p>
        </motion.div>
      </Col>
      <AnimatePresence>
        {selectedId && (
          <motion.div className="w-100 h-50 motion-div-modal d-flex align-items-center justify-content-center position-fixed">
            <motion.div
              layout
              className="motion-div-presence position-relative shadow-lg bg-white "
              layoutId={selectedId}
              initial={{ opacity: 0, borderRadius: 0 }}
              animate={{ opacity: 1, borderRadius: "2rem" }}
              exit={{ opacity: 0, borderRadius: 0 }}
            >
              <motion.button
                onClick={() => setSelectedId(undefined)}
                className="position-absolute bg-secondary border-0 motion-btn-close"
              >
                <i data-testid="close-icon" className="text-white bi bi-x"></i>
              </motion.button>
              <motion.p data-testid="spellings-countries" className="text-center text-dark m-0 p-2">Alt Spellings country</motion.p>
              <motion.hr className="border border-dark text-dark m-0" />
              <motion.ul>
                {altSpellings?.map((value, index) => (
                  <motion.li className="py-2 text-secondary m-0 list-group-item" key={index}>{value}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AltSpellingsFramerMotion;
