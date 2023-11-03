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
        document.getElementById("dropcontent").classNameList.toggle("d-block");
    }
    const [show, setshow] = useState(true)
    return (
        <div className='overflow-hidden'>
            <div className='header_bg_img position-relative'>
                <div className="position-absolute blue_circle1 d-xl-flex gap-4 flex-column d-none">
                    <div className="blue_circle"></div>
                    <div className="blue_circle"></div>
                    <div className="blue_circle"></div>
                    <div className="blue_circle"></div>
                    <div className="blue_circle"></div>
                </div>
                <Container className='custom_container mb-lg-3'>
                    <div className='d-flex align-items-center justify-content-between py-lg-1 py-md-2 position_fixed end-0 start-0 bg_blue z_index_3'>
                        <img src={Navlogo} alt="Pagelogo" className='mw_68 w-100 cur-pointer' />
                        <div className='d-flex align-items-center justify-content-between gap-btn pe-3'>
                            <div onClick={() => setshow(!show)} className={`${show ? "cross" : "cross1"} menu-icon`}>
                                <span className='crl-1'></span>
                                <span className='crl-2'></span>
                                <span className='crl-3'></span>
                            </div>
                            <button className='btn-enter1 d-lg-none d-md-block d-none'>Enter App</button>
                            <ul className={`${show ? "left_false" : "left_true"} nav_bar`}>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white nav_line'>About</a></li>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white text-nowrap nav_line'>IBO Event</a></li>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white text-nowrap nav_line'>EEFI Tokenomics</a></li>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white nav_line'>Team</a></li>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white nav_line'>Partners</a></li>
                                <li className='position-relative'><a href="" className='ff_raleway fs_16 fw-medium text-white nav_line'>Roadmap</a></li>
                                <li className='position-relative d-flex align-items-center btn-more gap-1'><a href="" className='ff_raleway fs_16 fw-medium text-white'>More</a>
                                    <div className="position-relative d-inline-block">
                                        <button className="btn-am ps-2 pb-1">
                                            <MoreArrow />
                                        </button>
                                        <div id="dropcontent" className="dropdown-box">
                                            
                                            <a href="" className="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                                About</a>
                                            <a href="" className="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                                Team</a>
                                            <a href="" className="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center">
                                                Partners</a>
                                            <a href="" className="mb-0 ff_raleway fs_16 fw-normal d-flex align-items-center justify-content-center"> Roadmap </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button className="enter_btn d-lg-block d-none position-relative z-2 text-nowrap btn_blue">Enter App</button>
                        </div>
                    </div >
                </Container >

                <Container className='custom_container'>
                    <Row className='head-padding p-lg-0 m-lg-0 align-items-lg-start align-content-center'>
                        <Col lg={6} className='d-flex align-items-lg-start align-items-center justify-content-center flex-column pt-lg-5'>
                            <h2 className='mb-0 ff_NeueMachinaRegular fs_85 fw-medium text-white mw-463 text-uppercase text-center text-lg-start lh-120 pb-sm-4 pb-3'>Building
                                elastic
                                Protocol</h2>
                            <p className='mb-0 ff_raleway fs_16 fw-normal text-white mw-521 lh-150 text-capitalize pb-3 text-center text-lg-start opac'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
                            <a href='' className='mb-0 ff_raleway fs_18 fw-bold text-white text-decoration-underline'>Audited by Omniscia</a>
                        </Col>
                        <Col lg={6} className='d-flex align-items-lg-start justify-content-lg-end justify-content-center'>
                            <img src={Robote2} alt="roboimg2" className='d-lg-none d-block robo-img w-100' />
                            <img src={Roboteimg} alt="Roboimg" className='robo-img p-lg-0 mt-2 w-100 d-lg-block d-none' />
                        </Col>
                    </Row>
                </Container>



            </div>
        </div>
    )
}

export default Header
