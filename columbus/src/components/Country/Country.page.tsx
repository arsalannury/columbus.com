import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/fetchCountryData";
import { Row, Col, Container } from "react-bootstrap";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import './country.css';

const CountryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountryData(id);
  console.log(data);

  if (isError) {
    return <ErrorBoundryPage />;
  }

  return (
    <>
    <Container fluid className="container d-flex align-items-center justify-content-center h-100">
       <div className="country-container">
<h1>gesgeef</h1>
       </div>
    </Container>
    </>
  )
};

export default CountryPage;
