import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // const toRotate = [ " Programador web", " Software Developer" ];
  const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     // tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // // const tick = () => {
  // //   let i = loopNum % toRotate.length;
  // //   let fullText = toRotate[i];
  // //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  // //   setText(updatedText);

  // //   if (isDeleting) {
  // //     setDelta(prevDelta => prevDelta / 2);
  // //   }

  // //   if (!isDeleting && updatedText === fullText) {
  // //     setIsDeleting(true);
  // //     setIndex(prevIndex => prevIndex - 1);
  // //     setDelta(period);
  // //   } else if (isDeleting && updatedText === '') {
  // //     setIsDeleting(false);
  // //     setLoopNum(loopNum + 1);
  // //     setIndex(1);
  // //     setDelta(500);
  // //   } else {
  // //     setIndex(prevIndex => prevIndex + 1);
  // //   }
  // // }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido</span>
                <h1>{`Soy Kenneth Taipe`} <span className="txt-rotate" dataPeriod="1000" ><span className="wrap">{text}</span></span></h1>
                  <p>Soy un estudiante de Ingeniería en sistemas de la Universidad central del Ecuador,tengo pasión por la innovación tecnológica y la optimización de procesos. Me especializo en el desarrollo de soluciones web que combinan funcionalidad, estética y rendimiento. A lo largo de mi formación, he participado en proyectos relacionados con desarrollo web, ciberseguridad y análisis de datos, siempre enfocado en ofrecer soluciones eficientes, seguras y de alta calidad. Me motiva seguir aprendiendo y aplicando nuevas herramientas y metodologías que impulsen el crecimiento digital de las organizaciones.</p>
                  <button onClick={() => console.log('connect')}>Contáctame <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
