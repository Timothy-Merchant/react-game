import { Col, Row, Form, Button } from "react-bootstrap";
import AvatarCarousel from "../AvatarCarousel/AvatarCarousel"

const CharacterCreate = () => {

    return (
        <>
            <div className="container">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <AvatarCarousel />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <fieldset>
                                        <Form.Group>
                                            <Form.Label>
                                                Gender
                                            </Form.Label>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Form.Group>
                                    </fieldset>
                                </Col>
                                <Col>
                                    <fieldset>
                                        <Form.Group>
                                            <Form.Label>
                                                Job
                                    </Form.Label>
                                            <Form.Check
                                                type="radio"
                                                label="Knight"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Mage"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Ranger"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Warrior"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Thief"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Druid"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Monk"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Form.Group>
                                    </fieldset>
                                </Col>
                                <Col>
                                    <fieldset>
                                        <Form.Group>
                                            <Form.Label>
                                                Gift
                                        </Form.Label>
                                            <Form.Check
                                                type="radio"
                                                label="Holy Amulet"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Skeleton Key"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Magical Potion"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Tarot Deck"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Nothing..."
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Form.Group>
                                    </fieldset>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Button type="submit" className="btn btn-primary">Start Adventure!</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    )

}

export default CharacterCreate;