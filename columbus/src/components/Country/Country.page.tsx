import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/fetchCountryData";
import {
  Row,
  Col,
  Spinner,
  Container,
  Image,
} from "react-bootstrap";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import { AxiosResponse } from "axios";
import "./country.css";
import AltSpellingsFramerMotion from "../CountryDetails/AltSpellings/AltSpellings.framer.motion";
import CapitalFramerMotion from "../CountryDetails/Capital/Capital.framer.motion";
import GeographyFramerMotion from "../CountryDetails/Geography/Geography.framer.motion";
import PublicFramerMotion from "../CountryDetails/Public/Public.framer.motion";
import PaperComponent from "../CountryDetails/Paper/Paper.component";

const CountryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountryData(id);
  const AxiosResponseObject = data as AxiosResponse<any, any>;
  const dataArray = AxiosResponseObject?.data[id === "China" ? 3 : 0];
 
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
              <Col className="d-flex align-items-center justify-content-center">
                <Image
                  src={dataArray?.flags.png}
                  className="country-flag"
                  alt="country-flag.png"
                />
              </Col>
            </Row>
          </Container>

          <Row>
            <AltSpellingsFramerMotion altSpellings={dataArray?.altSpellings} />
            <CapitalFramerMotion
              capitalInfo={dataArray?.capitalInfo}
              capital={dataArray?.capital}
            />
            <GeographyFramerMotion
              borders={dataArray?.borders}
              continents={dataArray?.continents}
              independent={dataArray?.independent}
              landlocked={dataArray?.landlocked}
              subregion={dataArray?.subregion}
            />

            <PublicFramerMotion
              idd={dataArray?.idd}
              startOfWeek={dataArray?.startOfWeek}
              timezones={dataArray?.timezones}
              postalCode={dataArray?.postalCode}
            />
          </Row>
          <PaperComponent
           area={dataArray?.area}
           unMember={dataArray?.unMember}
           common={dataArray?.name.common}
           fifa={dataArray?.fifa}
           coatOfArms={dataArray?.coatOfArms}
           car={dataArray?.car}
           demonyms={dataArray?.demonyms}
           currencies={dataArray?.currencies}
           gini={dataArray?.gini}
          />
        </div>
      </div>
    </>
  );
};

export default CountryPage;

