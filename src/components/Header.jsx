import React from 'react';
import { useState }
    from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navlogo from '../assets/images/png/nav-logo-img.png';
import Roboteimg from '../assets/images/png/robote-img.png';
import Robote2 from '../assets/images/png/robote2-img.png';
import { MoreArrow } from '../components/Iconimg';


function Header() {
    function drop() {
        document.getElementById("dropcontent").classNameNameList.toggle("d-block");
    }
    const [show, setshow] = useState(true)
    return (
        <div classNameName='header_bg_img'>
            <Container classNameName='custom_container mb-lg-3'>
                <div classNameName='d-flex align-items-center justify-content-between py-lg-1 py-2'>
                    <img src={Navlogo} alt="Pagelogo" classNameName='mw_68 w-100 cur-pointer' />
                    <div classNameName='d-flex align-items-center justify-content-between gap-btn'>
                        <div onClick={() => setshow(!show)} classNameName={`${show ? "cross" : "cross1"} menu-icon`}>
                            <span classNameName='crl-1'></span>
                            <span classNameName='crl-2'></span>
                            <span classNameName='crl-3'></span>
                        </div>
                        <button classNameName='btn-enter1 d-lg-none d-md-block d-none'>Enter App</button>
                        <ul classNameName={`${show ? "left_false" : "left_true"} nav_bar`}>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white nav_line'>About</a></li>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white text-nowrap nav_line'>IBO Event</a></li>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white text-nowrap nav_line'>EEFI Tokenomics</a></li>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white nav_line'>Team</a></li>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white nav_line'>Partners</a></li>
                            <li classNameName='position-relative'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white nav_line'>Roadmap</a></li>
                            <li classNameName='d-flex align-items-center gap-1'><a href="" classNameName='ff_raleway fs_16 fw-medium text-white '>More</a>
                                <div classNameName="position-relative d-inline-block">
                                    <button onClick={drop} classNameName="btn-am ps-2 pb-1">
                                        <MoreArrow />
                                    </button>
                                    <div id="dropcontent" classNameName="dropdown-box">
                                        <a href="" classNameName="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                            About</a>
                                        <a href="" classNameName="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                            Team</a>
                                        <a href="" classNameName="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                            Partners</a>
                                        <a href="" classNameName="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center"> Roadmap </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button classNameName="enter_btn d-lg-block d-none position-relative z-2 text-nowrap btn_blue">Enter App</button>
                    </div>
                </div >
            </Container >

            <Container classNameName='custom_container'>
                <Row classNameName='head-padding p-lg-0 m-lg-0 align-items-lg-start align-content-center'>
                    <Col lg={6} classNameName='d-flex align-items-lg-start align-items-center justify-content-center flex-column pt-lg-5'>
                        <h2 classNameName='mb-0 ff_NeueMachinaRegular fs_85 fw-medium text-white mw-463 text-uppercase text-center text-lg-start lh-120 pb-4'>Building
                            elastic
                            Protocol</h2>
                        <p classNameName='mb-0 ff_raleway fs_16 fw-normal text-white mw-521 lh-150 text-capitalize pb-3 text-center text-lg-start opac'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
                        <a href='' classNameName='mb-0 ff_raleway fs_18 fw-bold text-white text-decoration-underline'>Audited by Omniscia</a>
                    </Col>
                    <Col lg={6} classNameName='d-flex align-items-lg-start justify-content-lg-end justify-content-center'>
                        <img src={Robote2} alt="roboimg2" classNameName='d-lg-none d-block robo-img w-100' />
                        <img src={Roboteimg} alt="Roboimg" classNameName='robo-img p-lg-0 mt-2 w-100 d-lg-block d-none' />
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Header
