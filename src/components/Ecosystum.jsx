import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Olympus from '../assets/images/webp/olympus.webp';
import BondProtocol from '../assets/images/webp/bond-protocol.webp';
import Foundry from '../assets/images/webp/fjord.webp';
import Balancer from '../assets/images/webp/balancer.webp';
import Gearbox from '../assets/images/webp/gear-box.webp';
import Uniswap from '../assets/images/webp/uniswap.webp';

function Ecosystum() {
    return (
        <div>

            <div className="py_partner">
                <Container>
                    <h2 className="ff_NeueMachinaBold fs_46 text_blue text-center pb_63 pb-5" data-aos="fade-down">
                        Ecosystem Partners
                    </h2>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={4} md={6} className="col-11" data-aos="fade-right">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Olympus} alt="Olympus" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4 pt-md-0" data-aos="fade-right">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={BondProtocol} alt="BondProtocol" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4 pt-lg-0" data-aos="fade-right">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Foundry} alt="Foundry" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4" data-aos="fade-left">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Balancer} alt="Balancer" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4" data-aos="fade-left">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Gearbox} alt="Gearbox" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4" data-aos="fade-left">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Uniswap} alt="Uniswap" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center pt_71" data-aos="fade-down">
                        <button className="Announced_btn text_blue fs_16 fw-semibold ff_raleway">
                            More To Be Announced
                        </button>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Ecosystum
