import PropTypes from "prop-types";
import s from './Biography.module.scss';
import {BIO} from '../../constants/bio'
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

const Biography = ({id}) => {
    return (
        <div className={s.root}>
            <Container>
                {
                    BIO[id].map((item) => {
                        switch (item.type) {
                            case 'h1':
                                return <Heading level={1}> {item.text} </Heading>
                            case 'h2':
                                return <Heading level={2}> {item.text} </Heading>
                            case 'paragraph':
                                return <Text element={'p'}> {item.text} </Text>
                            case 'img':
                                return <div className={s.imgWrap}> <img src={item.src} alt = "hero pic"/> </div>
                            default:
                                return <Text> {item.text} </Text>
                        }
                    })
                }
            </Container>

        </div>)
}

Biography.propTypes = {
    id: PropTypes.number,
};

export default Biography;