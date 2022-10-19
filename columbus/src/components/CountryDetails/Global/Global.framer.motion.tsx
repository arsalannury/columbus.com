import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "../AltSpellings/altSpellings.css";
import { Helper } from "../../../helper/helper";

interface GlobalInterface {
  car: {
    side: string;
    signs: string[];
  };
  currencies: any;
  population: number;
  startOfWeek: string;
  timezones: string[];
  tld: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
}

const GlobalFramerMotion: React.FC<GlobalInterface> = ({
  car,
  currencies,
  idd,
  population,
  startOfWeek,
  tld,
  timezones,
}) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  return (
    <>
      <Col className="p-4 d-flex align-items-center justify-content-center">
        <motion.div
          className="motion-div-main shadow-lg bg-white d-flex align-items-center justify-content-center"
          layoutId="global"
          layout
          onClick={() => setSelected("global")}
        >
          <motion.p className="motion-p-main text-dark m-0 text-center">
            global
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
              exit={{ opacity: 0, borderRadius: 0 }}
            >
              <motion.button
                onClick={() => setSelected(undefined)}
                className="position-absolute bg-secondary border-0 motion-btn-close"
              >
                <i className="text-white bi bi-x"></i>
              </motion.button>
              <motion.p className="text-center text-dark m-0 p-2">
                global information
              </motion.p>
              <motion.hr className="border border-dark text-dark m-0" />
              <motion.p className="text-secondary" style={{paddingLeft:"2rem"}}>startOfWeek: {startOfWeek}</motion.p>
              <motion.p className="text-secondary" style={{paddingLeft:"2rem"}}>population: {Helper.SortNumbers(population)}</motion.p>
              <motion.ul>
                <li className=" m-0 text-secondary list-group-item d-inline">
                  tld:
                </li>
                {tld?.map((value, index) => (
                  <motion.li
                    className="py-2 text-secondary m-0 list-group-item d-inline ms-2"
                    key={index}
                  >
                    {value}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.ul>
                <li className=" m-0 list-group-item d-inline text-secondary">
                  timezones:
                </li>
                {timezones?.map((value, index) => (
                  <motion.li
                    className="py-2 text-secondary m-0 list-group-item d-inline  ms-2"
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

export default GlobalFramerMotion;
