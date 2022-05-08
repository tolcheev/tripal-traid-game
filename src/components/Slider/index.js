import {useState} from "react";
import Container from '../Container';
import Heading from '../Heading';
import s from './Slider.module.scss';
import Button from "../Button";

function Greeting() {
    return (
        <div>
            <center>
                Приветствуем
            </center>
        </div>
    )
}

const Slider = () => {
    const [isShow, setShow] = useState(true)
    const handleClick = () => {
        setShow(prevState => !prevState)
    }

    switch (!isShow) {
        case true:
            return <Greeting/>
        case false:
            return (
                <section className={s.section}>
                    <div className={s.slider}>
                        <Container className={s.sliderContent}>
                            <Heading level={1}> Marvel Cards </Heading>
                            <Heading level={2}>
                            </Heading>
                            <div className={s.call}>
                                <Button onClick={handleClick}>
                                    waw
                                </Button>
                            </div>
                            <Button onClick={handleClick} isBlack={true}>
                                not waw
                            </Button>
                        </Container>
                    </div>
                </section>)
    }
}

export default Slider;
