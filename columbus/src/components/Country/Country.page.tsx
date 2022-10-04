import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/fetchCountryData";
import { Row, Col, Spinner, Container, Image  } from "react-bootstrap";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import { AxiosResponse } from "axios";
import "./country.css";
import { CountryInterface } from "../../Interface/CountryInterface";

const CountryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountryData(id);
  const dataType = data as AxiosResponse;
  console.log(dataType.data);

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
        <div className="country-container">
          {/* <Container>
            {
              dataType?.data.map((country:CountryInterface) => (
               <Row>
                <Col><Image rounded src={country.flags.png} alt="country-flag.png" /></Col>
               </Row>
              ))
            }
          </Container> */}
        </div>
      </div>
    </>
  );
};

export default CountryPage;
