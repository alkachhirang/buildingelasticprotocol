import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Davoice from '../assets/images/png/devoine.png';
import Solomon from '../assets/images/png/solomon-img.png';
import Anton from '../assets/images/png/anton-img.png';
import { Blueline } from '../components/Iconimg';
import { Taemdiscord } from '../components/Iconimg';
import { In } from '../components/Iconimg';
import { Teamtwitter } from '../components/Iconimg';


function Team() {
    return (
        <div>
            <div classNameName='team_bg_img py_team'>
                <h2 classNameName='fs_46 text-center ff_NeueMachinaBold text-white pb-lg-5'>Our Team</h2>
                <Container classNameName='custom_container pt-5'>
                    <Row classNameName='justify-content-center align-items-center'>
                        <Col lg={4} sm={6} classNameName="col-12">
                            <div classNameName="team_card">
                                <img src={Davoice} alt="Davoice" classNameName="w-100 rounded-1" />
                                <p classNameName="fs_24 ff_raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                                    Davoice
                                </p>
                                <p classNameName="fs_24 ff_raleway text-black text-center fw-normal lh_120 pb-4">
                                    co-founder
                                </p>
                                <div classNameName="d-flex gap-3 justify-content-center align-items-center">
                                    <Teamtwitter />
                                    <Blueline />
                                    <Taemdiscord />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} classNameName="col-12 pt-4 pt-sm-0">
                            <div classNameName="team_card">
                                <img src={Solomon} alt="Davoice" classNameName="w-100 rounded-1" />
                                <p classNameName="fs_24 ff_raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                                    Davoice
                                </p>
                                <p classNameName="fs_24 ff_raleway text-black text-center fw-normal lh_120 pb-4">
                                    co-founder
                                </p>
                                <div classNameName="d-flex gap-3 justify-content-center align-items-center">
                                    <Teamtwitter />
                                    <Blueline />
                                    <Taemdiscord />
                                    <Blueline />
                                    <In />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} classNameName="col-12 pt-4 pt-lg-0">
                            <div classNameName="team_card">
                                <img src={Anton} alt="Davoice" classNameName="w-100 rounded-1" />
                                <p classNameName="fs_24 ff_raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                                    Davoice
                                </p>
                                <p classNameName="fs_24 ff_raleway text-black text-center fw-normal lh_120 pb-4">
                                    co-founder
                                </p>
                                <div classNameName="d-flex gap-3 justify-content-center align-items-center">
                                    <Teamtwitter />
                                    <Blueline />
                                    <Taemdiscord />
                                    <Blueline />
                                    <In />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Team;
