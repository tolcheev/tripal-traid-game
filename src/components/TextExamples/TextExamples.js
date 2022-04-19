import PropTypes from "prop-types";
import Container from "../Container";
import s from '../Container/Container.module.css';
import Text from "../Text";

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