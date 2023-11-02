import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Olympus from '../assets/images/png/olympus.png';
import BondProtocol from '../assets/images/png/bond-protocol.png';
import Foundry from '../assets/images/png/fjord.png';
import Balancer from '../assets/images/png/balancer.png';
import Gearbox from '../assets/images/png/gear-box.png';
import Uniswap from '../assets/images/png/uniswap.png';

function Ecosystum() {
    return (
        <div>

            <div className="py_partner">
                <Container className="custum_container">
                    <h2 className="ff_NeueMachinaBold fs_46 text_blue text-center pb_63 pb-5">
                        Ecosystem Partners
                    </h2>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={4} md={6} className="col-11">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Olympus} alt="Olympus" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4 pt-md-0">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={BondProtocol} alt="BondProtocol" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4 pt-lg-0">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Foundry} alt="Foundry" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Balancer} alt="Balancer" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Gearbox} alt="Gearbox" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-11 pt-4">
                            <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                                <img src={Uniswap} alt="Uniswap" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center pt_71">
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
