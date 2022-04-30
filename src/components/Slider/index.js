import {useState} from "react";
import Container from '../Container';
import Heading from '../Heading';
import s from './Slider.module.scss';

const Slider = () => {
    const [value, setValue] = useState(1);
    const handleClick = () => {
        const val = value +1;
       setValue(val);
    }

    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading level={1}> Marvel Cards </Heading>
                    <Heading level={2}> {value} </Heading>
                    <div className={s.call}>
                        <button className={s.button} onClick={handleClick}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;
