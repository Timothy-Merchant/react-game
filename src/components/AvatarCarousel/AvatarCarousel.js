import { Carousel } from "react-bootstrap";
import mage from '../assets/Mage.png';
import ranger from '../assets/Ranger.png';
import knight from '../assets/Knight.png';
import druid from '../assets/Druid.png';
import warrior from '../assets/Warrior.png';
import thief from '../assets/Thief.png';
import monk from '../assets/Monk.png';

const AvatarCarousel = () => {

    const imageSize = {
        width: 150 + "px",
    }

    return (
        <>
            <div className="container">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img style={imageSize} className="d-block w-100" src={druid} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={knight} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={mage} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={monk} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={ranger} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={thief} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={warrior} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

        </>
    )

}

export default AvatarCarousel;