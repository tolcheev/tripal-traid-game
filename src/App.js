import "./App.module.scss";
import s from './App.module.scss'
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import TextExamples from "./components/TextExamples";
import Container from "./components/Container";
import Heading from "./components/Heading";
import CharacterCard from "./components/CharacterCard";
import {useState} from "react";
import Biography from "./pages/Biography";
import {CHARACTERS} from "./constants/CHARACTERS";

function App() {
    const [characters, setCharacters] = useState(CHARACTERS);
    const [characterId, setCharacterId] = useState(null);

    const handleLikeClick = (id) => {
        setCharacters((prevState) => prevState.map(item => {
            if (id === item.id) {
                return Object({
                    ...item,
                    isLike: !item.isLike,
                })
            }
            return item
        }))
    };

    const handleReadBioClick = (id) => {
        setCharacterId(id)
    }


    return (
        <>
            <Header/>
            <Slider/>
            {
                characterId !== null ?
                    <Biography id = {characterId} /> : (
                        <section className={s.cardSection}>
                            <Container>
                                <div className={s.cardTitle}>
                                    <Heading backline black>
                                        Marvel Cards
                                    </Heading>
                                    <Heading level={2} black>
                                        Collect your best five 🖐
                                    </Heading>
                                    <TextExamples/>
                                </div>
                                <div className={s.cardWrap}>
                                    {
                                        characters.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <CharacterCard
                                                        id={item.id}
                                                        name={item.name}
                                                        src={item.thumbnail.path}
                                                        description={item.description}
                                                        humanName={item.humanName}
                                                        isLike={item.isLike}
                                                        onLikeClick={handleLikeClick}
                                                        onReadBio={handleReadBioClick}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Container>
                        </section>
                    )}
            <Footer />
        </>
    );
}

export default App;
