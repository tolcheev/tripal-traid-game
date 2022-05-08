import {ReactComponent as Like} from "./assets/heart.svg";
import PropTypes from "prop-types";
import Heading from "../Heading";
import Text from "../Text";
import classNames from "classnames";

import s from './Character.module.scss';

const CharacterCard = ({
                           id,
                           name,
                           src,
                           humanName,
                           description,
                           isLike,
                           onLikeClick,
                           onReadBio
                       }) => {
    const handleClick = () => {
        onLikeClick && onLikeClick(id)
    }

    const handleReadBioClick = () => {
        onReadBio && onReadBio(id)
        console.log('her')
    }

    return (
        <div className={s.root}>
            <img src={src} alt={name} className={s.cardImage}/>
            <div className={s.cardDetails}>
                <Heading className={s.cardName} level={2} black>
                    {name}
                </Heading>
                <Heading className={s.cardHumanName} level={4}>
                    {humanName}
                </Heading>

                <Text element={'div'} className={s.cardDescription}>
                    {description}
                </Text>

                <div className={s.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={classNames(s.like, {
                            [s.active]: isLike
                        })}>
                        <Like/>
                    </div>
                </div>

                <div onClick={handleReadBioClick}>
                    <a href='#' >Read bio</a>
                </div>

            </div>
        </div>
    )
}

CharacterCard.defaultProps = {
    isLike: false,
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
    onReadBio: PropTypes.func,
}

export default CharacterCard;