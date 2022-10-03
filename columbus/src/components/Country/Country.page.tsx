import { useParams } from "react-router-dom";
import { useCountryData } from "../../hooks/fetchCountryData";
import { Row, Col, Spinner } from "react-bootstrap";
import ErrorBoundryPage from "../ErrorBoundry/ErrorBoundry.page";
import "./country.css";

const CountryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCountryData(id);
  console.log(data);

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
          <h1>gesgeef</h1>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
