import { Button, Container } from "react-bootstrap";
import "./errorBoundry.css";

const ErrorBoundryPage: React.FC = () => {
  const handleReloadClick = (): void => {
    window.location.reload();
  };
  return (
    <>
      <Container
        fluid={"xxl"}
        className=" d-flex align-items-center justify-content-center flex-column w-100 h-100"
      >
        <div className="container  d-flex align-items-center justify-content-evenly flex-column w-75 h-75 ">
        <i className="wifi-icon bi bi-wifi-off text-danger"></i>
          <h1 className="error-boundry text-dark">Data can't loaded...</h1>
          <h2 className="error-boundry text-dark">
            Chek your internet connection
          </h2>
          <Button
            onClick={handleReloadClick}
            className="error-boundry "
            variant="dark"
          >
            reload page
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ErrorBoundryPage;
