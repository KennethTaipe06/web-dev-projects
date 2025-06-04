import { Col, Row } from "react-bootstrap";
import cv from '../assets/CV.pdf';

export const Newsletter = () => {
  return (
      <Col lg={12} className="d-flex align-items-center justify-content-center" style={{minHeight: '300px'}}>
        <div className="newsletter-bx wow slideInUp w-100 d-flex align-items-center justify-content-center" id="cv" style={{minHeight: '220px'}}>
          <Row className="w-100 d-flex align-items-center justify-content-center text-center">
            <Col lg={12} md={12} xl={12} className="mb-4">
              <h3 className="w-100" style={{fontWeight: 'bold'}}>Descarga mi CV</h3>
            </Col>
            <Col md={12} xl={12} className="d-flex align-items-center justify-content-center">
              <div className="new-email-bx d-flex align-items-center justify-content-center w-100">
                <a href={cv} download className="btn btn-primary" style={{width: '250px', borderRadius: '30px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem'}}>
                  Descargar CV
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
