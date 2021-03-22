import { Card, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap"
import colors from "../../colors.json";

const Roster = ({ party }) => {

    return (
        <div className="container">
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Roster</h1>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {party.map((member, index) => (
                    <Col key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Card style={{ width: '15rem' }}>
                            <ListGroup className="list-group-flush" style={{ borderColor: colors["2blue"] }}>
                                <ListGroupItem style={{ backgroundColor: colors["2blue"], color: "white", fontSize: 1.3 + "rem" }}>{member.pName ? member.pName : "Empty slot"}</ListGroupItem>
                            </ListGroup>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </div>
    )

}

export default Roster;