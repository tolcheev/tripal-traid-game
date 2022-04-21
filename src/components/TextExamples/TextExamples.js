import PropTypes from "prop-types";
import Container from "../Container";
import Text from "../Text";
import s from "./TextExamples.module.css";

const TextExamples = () => {
    return (
        <Container className={s.sliderContent}>

            <Text element={'div'}>
                дивный контейнер
            </Text>
            
            <Text element={'p'}>
                Параграф классический
            </Text>
            
            <Text element={'span'}>
                Спан падаван
            </Text>

        </Container>
    )
}

TextExamples.propTypes = {
    children: PropTypes.node,
}

export default TextExamples;