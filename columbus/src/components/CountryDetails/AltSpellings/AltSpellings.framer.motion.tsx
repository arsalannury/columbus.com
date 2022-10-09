import React, { useState } from "react";
import { AnimatePresence, AnimatePresenceProps, motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "./altSpellings.css";
import { AltSpellingsInterface } from "../../../Interface/AltSpellingsInterface";

const AltSpellingsFramerMotion: React.FC<AltSpellingsInterface> = ({
  altSpellings,
}) => {
  const [selectedId, setSelectedId] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          layoutId="alt-spellings"
          layout
          onClick={() => setSelectedId("alt-spellings")}
        >
          <motion.p className="motion-p-main text-dark text-center">
            alt spellings
          </motion.p>
        </motion.div>
      </Col>
      <AnimatePresence>
        {selectedId && (
          <motion.div className="v-100 h-100 motion-div-modal d-flex align-items-center justify-content-center">
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
                <i className="text-white bi bi-x"></i>
              </motion.button>
              <motion.p className="text-center text-dark">
                Alt Spellings country
              </motion.p>
              <motion.hr className="border border-dark text-dark" />
              <motion.ul>
                {altSpellings.map((value, index) => (
                  <motion.li className="text-dark list-group-item" key={index}>{value}</motion.li>
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
