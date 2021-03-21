import { Col, Row, Form, Button } from "react-bootstrap";
import Avatar from "../Avatar"

const CharacterCreate = ({ changeGender, gender }) => {

    return (
        <>
            <div className="container">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Avatar />
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
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Check
                                                onChange={() => changeGender("male")}
                                                type="radio"
                                                label="Male"
                                                name="gender"
                                                id="male"
                                                checked={gender === "male"}
                                            />
                                            <Form.Check
                                                onChange={() => changeGender("female")}
                                                type="radio"
                                                label="Female"
                                                name="gender"
                                                id="female"
                                                checked={gender === "female"}
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
                                            <Form.Check type="radio" label="Knight" name="Jobs" id="Knight" />
                                            <Form.Check type="radio" label="Mage" name="Jobs" id="Mage" />
                                            <Form.Check type="radio" label="Ranger" name="Jobs" id="Ranger" />
                                            <Form.Check type="radio" label="Warrior" name="Jobs" id="Warrior" />
                                            <Form.Check type="radio" label="Thief" name="Jobs" id="Thief" />
                                            <Form.Check type="radio" label="Druid" name="Jobs" id="Druid" />
                                            <Form.Check type="radio" label="Monk" name="Jobs" id="Monk" />
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