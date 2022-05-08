import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import PropTypes from "prop-types";

import {BIO} from "../../assets/BIO";


const Biography = ({id}) => {
    if (id) {
        return (
            <Container>
                <div>
                    {
                        BIO[id].map((item, index) => {
                            if (item.type === 'img') {
                                return (
                                    <Text key={index} element={'div'}>
                                        <img src={`${item.img}`}/>

                                    </Text>
                                )
                            } else {
                                return (
                                    <Text key={index} element={item.type}>
                                        {item.text}
                                    </Text>
                                )

                            }
                        })
                    }
                </div>
            </Container>
        )
    }
}


Biography.propTypes = {
    id: PropTypes.number,
};

export default Biography;