import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col, Badge } from "react-bootstrap";
import "../AltSpellings/altSpellings.css";
import { Helper } from "../../../helper/helper";

interface PublicInterface {
  // car: {
  //   side: string;
  //   signs: string[];
  // };
  // currencies: any;
  startOfWeek: string;
  timezones: string[];
  postalCode: { format: string; regex?: string };
  idd: {
    root: string;
    suffixes: string[];
  };
}

const PublicFramerMotion: React.FC<PublicInterface> = ({
  idd,
  startOfWeek,
  timezones,
  postalCode,
}) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4 d-flex align-items-center justify-content-center">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          layoutId="public"
          layout
          onClick={() => setSelected("public")}
        >
          <motion.p className="motion-p-main text-dark m-0 text-center">
            public
          </motion.p>
        </motion.div>
      </Col>
      <AnimatePresence>
        {selected && (
          <motion.div className="w-100 h-50 motion-div-modal d-flex align-items-center justify-content-center position-fixed">
            <motion.div
              layout
              className="motion-div-presence position-relative shadow-lg bg-white "
              layoutId={selected}
              initial={{ opacity: 0, borderRadius: 0 }}
              animate={{ opacity: 1, borderRadius: "2rem" }}
              exit={{ opacity: 0, borderRadius: 0 }}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(undefined)}
                className="position-absolute bg-secondary border-0 motion-btn-close"
              >
                <i className="text-white bi bi-x"></i>
              </motion.button>
              <motion.p className="text-center text-dark m-0 p-2">
                public information
              </motion.p>
              <motion.hr className="border border-dark text-dark m-0" />
              <motion.p
                className="text-secondary pt-2"
                style={{ paddingLeft: "2rem" }}
              >
                startOfWeek: <Badge bg="primary">{startOfWeek}</Badge>
              </motion.p>
              <motion.p
                style={{ paddingLeft: "2rem" }}
                className="text-secondary m-0 mb-3"
              >
                postalCodeFormat:{" "}
                <>{postalCode?.format ? postalCode?.format : "----"}</>
              </motion.p>
              <motion.ul>
                <li className=" m-0 text-secondary list-group-item d-inline">
                  idd:
                </li>
                <motion.li className="py-2 text-secondary m-0 list-group-item d-inline ms-2">
                  {idd?.root}
                  {idd?.suffixes[0]}
                </motion.li>
              </motion.ul>
              <motion.ul>
                <li className=" m-0 list-group-item d-inline text-secondary">
                  timezones:
                </li>
                {timezones?.map((value, index) => (
                  <motion.li
                    className="py-2 text-secondary m-0 list-group-item d-inline ms-2"
                    style={{ fontSize: ".8em" }}
                    key={index}
                  >
                    {value}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PublicFramerMotion;
