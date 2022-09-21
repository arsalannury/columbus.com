import React from "react"
import { Row,Col,Card } from "react-bootstrap"
import { CardProps } from "../../Interface/CardInterface"
import "./card.css"


const CardPage: React.FC<CardProps> = ({coatOfArms,officialName,bul}) => {
  console.log(bul);
  
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="w-100">
          <Card className="flex-row mt-3 card-main rounded-0">
            <Card.Img variant="top" src={coatOfArms.png} loading="lazy" className="card-img" />
            <Card.Body>
              <Card.Title className="text-muted" >{officialName}</Card.Title>
              <Card.Text>{bul.nativeName[0].official}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
  )
}

export default CardPage