import { Col, Row, Form, Button } from "react-bootstrap";
import Avatar from "../Avatar"
import colors from "../../colors.json"

const CharacterCreate = ({ changeGender, changeJob, gender, job }) => {

    return (
        <>
            <div className="container">
                <Form>
                    <Row>
                        <Col>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 1 + "rem"}}>
                                <h1>Create Party</h1>
                            </div>
                        </Col>
                    </Row>
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
                                            <Form.Check type="radio" label="Knight" name="Jobs" id="Knight" checked={job === "knight"} onChange={() => changeJob("knight")} />
                                            <Form.Check type="radio" label="Mage" name="Jobs" id="Mage" checked={job === "mage"} onChange={() => changeJob("mage")} />
                                            <Form.Check type="radio" label="Ranger" name="Jobs" id="Ranger" checked={job === "ranger"} onChange={() => changeJob("ranger")} />
                                            <Form.Check type="radio" label="Warrior" name="Jobs" id="Warrior" checked={job === "warrior"} onChange={() => changeJob("warrior")} />
                                            <Form.Check type="radio" label="Thief" name="Jobs" id="Thief" checked={job === "thief"} onChange={() => changeJob("thief")} />
                                            <Form.Check type="radio" label="Druid" name="Jobs" id="Druid" checked={job === "druid"} onChange={() => changeJob("druid")} />
                                            <Form.Check type="radio" label="Monk" name="Jobs" id="Monk" checked={job === "monk"} onChange={() => changeJob("monk")} />
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
                            <Row>
                                <p>Blah blah blah</p>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group style={{ display: "flex", justifyContent: "center" }}>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group style={{ display: "flex", justifyContent: "center" }}>
                                <Button type="submit" style={{
                                    width: 50 + "%",
                                    alignItems: "center",
                                    fontSize: 30 + "px",
                                    backgroundColor: colors["4tan"],
                                    borderColor: colors["4tan"]
                                }}>Add to Party</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    )

}

export default CharacterCreate;