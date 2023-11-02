import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import corecircleimg from '../assets/images/png/core-circle-img.png';
import { Deposite } from '../components/Iconimg';
import sample from '../assets/images/png/sample-img.png';


function Core() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div classNameName='core_bg_img position-relative mt_4 py_core'>
            <Container classNameName='custom_container'>
                <h2 classNameName='ff_NeueMachinaBold fs_46 text-white text-center'>Core Strategies</h2>
                <div classNameName='d-flex justify-content-center align-items-center'>
                    <p classNameName='ff_raleway fw-normal fs_16 text-white text-center mw_819 opacity_8 pt-4 mb-0'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <Row classNameName='align-items-center pt-5'>
                            <Col lg={6} classNameName=' d-flex justify-content-center align-items-center flex-column position-relative pb-3 pb-lg-0'>
                                <div classNameName='position-absolute d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0'>
                                    <img src={sample} alt="sample" classNameName='d-none d-md-block' />
                                </div>
                                <div classNameName='core_card'>
                                    <a href='' classNameName='innovation text-white ff_raleway fs_14 fw-normal lh_160'>Innovation</a>
                                    <div classNameName='mt-4 d-flex justify-content-center'>
                                        <img src={corecircleimg} alt="corecircleimg" classNameName='' />
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center pb-3 mt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white m-0'>Projected Yield (APY)</p>
                                        <p classNameName='ff_inter fw-bold fs_16 clr_blue m-0'>7,777,777%</p>
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pb-2'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Current Deposits</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                    <div classNameName='core_line'></div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Max Capacity</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} classNameName='pt-5 pt-lg-0'>
                                <div classNameName='overflow-y-auto'>
                                    <div classNameName='h_300'>
                                        <h3 classNameName='fw-normal fs_38 ff_NeueMachinaRegular text-white'>Elastic Vault</h3>
                                        <div classNameName='d-flex align-items-center gap-2'>
                                            <p classNameName='ff_raleway fs_22 fw-medium text-white m-0 pb-3'>Deposit Token</p>
                                            <a href='' classNameName=''>
                                                <Deposite />
                                            </a>
                                        </div>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0 pb-3'> $AMPL</p>
                                        <h2 classNameName='ff_raleway fs_22 fw-medium text-white'>Flagship Hedging Strategy</h2>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                    <div>
                        <Row classNameName='align-items-center pt-5'>
                            <Col lg={6} classNameName=' d-flex justify-content-center align-items-center flex-column position-relative pb-3 pb-lg-0'>
                                <div classNameName='position-absolute d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0'>
                                    <img src={sample} alt="sample" classNameName='d-none d-md-block' />
                                </div>
                                <div classNameName='core_card'>
                                    <a href='' classNameName='innovation text-white ff_raleway fs_14 fw-normal lh_160'>Innovation</a>
                                    <div classNameName='mt-4 d-flex justify-content-center'>
                                        <img src={corecircleimg} alt="corecircleimg" classNameName='' />
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center pb-3 mt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white m-0'>Projected Yield (APY)</p>
                                        <p classNameName='ff_inter fw-bold fs_16 clr_blue m-0'>7,777,777%</p>
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pb-2'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Current Deposits</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                    <div classNameName='core_line'></div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Max Capacity</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} classNameName='pt-5 pt-lg-0'>
                                <div classNameName='overflow-y-auto'>
                                    <div classNameName='h_300'>
                                        <h3 classNameName='fw-normal fs_38 ff_NeueMachinaRegular text-white'>Elastic Vault</h3>
                                        <div classNameName='d-flex align-items-center gap-2'>
                                            <p classNameName='ff_raleway fs_22 fw-medium text-white m-0 pb-3'>Deposit Token</p>
                                            <a href='' classNameName=''>
                                                <Deposite />
                                            </a>
                                        </div>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0 pb-3'> $AMPL</p>
                                        <h2 classNameName='ff_raleway fs_22 fw-medium text-white'>Flagship Hedging Strategy</h2>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row classNameName='align-items-center pt-5'>
                            <Col lg={6} classNameName=' d-flex justify-content-center align-items-center flex-column position-relative pb-3 pb-lg-0'>
                                <div classNameName='position-absolute d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0'>
                                    <img src={sample} alt="sample" classNameName='d-none d-md-block' />
                                </div>
                                <div classNameName='core_card'>
                                    <a href='' classNameName='innovation text-white ff_raleway fs_14 fw-normal lh_160'>Innovation</a>
                                    <div classNameName='mt-4 d-flex justify-content-center'>
                                        <img src={corecircleimg} alt="corecircleimg" classNameName='' />
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center pb-3 mt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white m-0'>Projected Yield (APY)</p>
                                        <p classNameName='ff_inter fw-bold fs_16 clr_blue m-0'>7,777,777%</p>
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pb-2'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Current Deposits</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                    <div classNameName='core_line'></div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Max Capacity</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} classNameName='pt-5 pt-lg-0'>
                                <div classNameName='overflow-y-auto'>
                                    <div classNameName='h_300'>
                                        <h3 classNameName='fw-normal fs_38 ff_NeueMachinaRegular text-white'>Elastic Vault</h3>
                                        <div classNameName='d-flex align-items-center gap-2'>
                                            <p classNameName='ff_raleway fs_22 fw-medium text-white m-0 pb-3'>Deposit Token</p>
                                            <a href='' classNameName=''>
                                                <Deposite />
                                            </a>
                                        </div>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0 pb-3'> $AMPL</p>
                                        <h2 classNameName='ff_raleway fs_22 fw-medium text-white'>Flagship Hedging Strategy</h2>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row classNameName='align-items-center pt-5'>
                            <Col lg={6} classNameName=' d-flex justify-content-center align-items-center flex-column position-relative pb-3 pb-lg-0'>
                                <div classNameName='position-absolute d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0'>
                                    <img src={sample} alt="sample" classNameName='d-none d-md-block' />
                                </div>
                                <div classNameName='core_card'>
                                    <a href='' classNameName='innovation text-white ff_raleway fs_14 fw-normal lh_160'>Innovation</a>
                                    <div classNameName='mt-4 d-flex justify-content-center'>
                                        <img src={corecircleimg} alt="corecircleimg" classNameName='' />
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center pb-3 mt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white m-0'>Projected Yield (APY)</p>
                                        <p classNameName='ff_inter fw-bold fs_16 clr_blue m-0'>7,777,777%</p>
                                    </div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pb-2'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Current Deposits</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                    <div classNameName='core_line'></div>
                                    <div classNameName='d-flex justify-content-between align-items-center position-relative pt-3'>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0'>Max Capacity</p>
                                        <p classNameName='ff_inter fw-medium fs_16 text-white m-0'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} classNameName='pt-5 pt-lg-0'>
                                <div classNameName='overflow-y-auto'>
                                    <div classNameName='h_300'>
                                        <h3 classNameName='fw-normal fs_38 ff_NeueMachinaRegular text-white'>Elastic Vault</h3>
                                        <div classNameName='d-flex align-items-center gap-2'>
                                            <p classNameName='ff_raleway fs_22 fw-medium text-white m-0 pb-3'>Deposit Token</p>
                                            <a href='' classNameName=''>
                                                <Deposite />
                                            </a>
                                        </div>
                                        <p classNameName='ff_raleway fs_16 fw-normal text-white opacity_8 m-0 pb-3'> $AMPL</p>
                                        <h2 classNameName='ff_raleway fs_22 fw-medium text-white'>Flagship Hedging Strategy</h2>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0 pb-3'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                        <p classNameName='ff_raleway fw-normal fs_16 text-white opacity_8 mw_442 m-0'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Core
