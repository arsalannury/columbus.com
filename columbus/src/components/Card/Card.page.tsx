import React from "react"
import { Row,Col,Card } from "react-bootstrap"
import "./card.css"


const CardPage: React.FC = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="w-100">
          <Card className="flex-row mt-3 card-main rounded-0">
            <Card.Img variant="top" src="favicon.ico" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
  )
}

export default CardPage