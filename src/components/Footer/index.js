import Container from '../Container';
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.root}>
      <Container>
        <div className={s.footerWrap}>
          Coded with
          <span className={s.heart}></span>
          by Tolcheev
        </div>
        <span className={s.footerR}>
            ® it-course.online
        </span>
        </Container>
    </footer>
  )
}

export default Footer;