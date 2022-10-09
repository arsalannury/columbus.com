import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/fetchCountryData";
import {
  Row,
  Col,
  Spinner,
  Container,
  Image,
  ListGroup,
} from "react-bootstrap";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import { AxiosResponse } from "axios";
import "./country.css";
import AltSpellingsFramerMotion from "../CountryDetails/AltSpellings/AltSpellings.framer.motion";
import CountryDetailHOC from "../HOC/CountryDetailHOC";

const CountryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountryData(id);
  const AxiosResponseObject = data as AxiosResponse<any, any>;
  const dataArray = AxiosResponseObject?.data[0];

  console.log(AxiosResponseObject);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  if (isError) {
    return <ErrorBoundryPage />;
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="country-container-blur">
          <Container fluid className="flags-bootstarp-container">
            <Row>
              <Col md={dataArray?.coatOfArms.png ? 6 : 12}>
                <Image
                  src={dataArray?.flags.png}
                  className="country-flag"
                  alt="country-flag.png"
                />
              </Col>
              {dataArray?.coatOfArms.png && (
                <Col md={6} className="coat-of-arms-column">
                  <Image
                    src={dataArray?.coatOfArms.png}
                    className="country-coatOfArms"
                    alt="country-coatOfArms.png"
                  />
                </Col>
              )}
            </Row>
          </Container>

          <Row>
            {/* <CountryDetailHOC dataOption={dta } /> */}
          </Row>
        </div>
      </div>
    </>
  );
};

export default CountryPage;

// <Col md={dataArray?.coatOfArms.png ? 6 : 12}>
// <ListGroup horizontal={"md"} className="my-3">
//   <ListGroup.Item
//     className="list-group-item-alt-spellings text-secondary"
//     variant="primary"
//   >
//     alt spellings
//   </ListGroup.Item>
//   {dataArray?.altSpellings.map(
//     (name: string, index: number) => (
//       <ListGroup.Item
//         className="list-group-item-alt-spellings"
//         key={index}
//       >
//         {name}
//       </ListGroup.Item>
//     )
//   )}
// </ListGroup>
// </Col>
