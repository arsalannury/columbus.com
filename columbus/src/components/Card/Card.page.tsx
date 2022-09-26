import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { CardProps } from "../../Interface/CardInterface";
import "./card.css";

const CardPage: React.FC<CardProps> = ({ coatOfArms, officialName, bul }) => {
  const bulArray: any[] = bul && Object.entries(bul);
  // console.log(bulArray);

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="w-100">
          <Card className="flex-row mt-3 card-main rounded-0">
            <Card.Img
              variant="top"
              src={coatOfArms.png}
              loading="lazy"
              className="card-img"
            />
            <Card.Body>
              <Card.Title className="text-muted">{officialName}</Card.Title>
              <>
                {/* {bulArray !== undefined &&
                  bulArray.map((array: any[], index: number) => {
                    return array.map((object: any, index: number) => (
                      <Card.Text key={index} className="text-muted">
                        {object.official}
                      </Card.Text>
                    ));
                  })} */}
              </>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CardPage;
