import Container from '../Container';
import Heading from '../Heading';
import Text from "../Text";
import s from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>

                    <Heading level={1}>
                        Marvel Cards
                    </Heading>

                    <Heading level={2}>
                        Collect your best five
                    </Heading>

                    <Text element={'div'} italic>
                        Тема: «Трагический катарсис: методология и особенности»
                    </Text>

                    <Text element={'p'} italic={true} disabled>
                        Прекрасный реферат создан нейроночкой яднуха
                    </Text>

                    <Text element={'span'}>
                        Дедуктивный метод индуктивно творит даосизм. Исчисление предикатов, конечно, преобразует примитивный гедонизм. Страсть рассматривается закон исключённого третьего, хотя в официозе принято обратное. Адаптация осмысленно транспонирует примитивный даосизм.
                        Дистинкция, следовательно, непредвзято индуцирует данный даосизм. Закон внешнего мира, конечно, понимает под собой дуализм. Суждение, по определению, понимает под собой принцип восприятия.
                        Знак естественно осмысляет бабувизм. Мир решительно порождает и обеспечивает из ряда вон выходящий дуализм, tertium nоn datur. Суждение философски контролирует субъективный гравитационный парадокс.
                    </Text>

                    <div className={s.call}>
                        <button className={s.button}>Wow</button>
                    </div>

                </Container>
            </div>
        </section>
    )
}


export default Slider;
