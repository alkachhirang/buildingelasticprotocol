import React from 'react'
import Container from 'react-bootstrap/Container';
import footerlogo from '../assets/images/webp/footer-logo.webp';
import { Youtube } from '../components/Iconimg';
import { Github } from '../components/Iconimg';
import { Twitter } from '../components/Iconimg';
import { Au } from '../components/Iconimg';
import { Discord } from '../components/Iconimg';
import { Msymbol } from '../components/Iconimg';
import { Mail } from '../components/Iconimg';
import { Arrow } from '../components/Iconimg';
import { Pdf } from '../components/Iconimg';

function Footer() {
    return (
        <div>
            <div className='bg-white'>
                <Container className='py_footer'>
                    <div className='text-center'>
                        <img src={footerlogo} alt="footerlogo" className='' />
                        <p className='fw-normal ff_raleway fs_16 text_blue pt-3 pb-3'>Join Our Community</p>
                        <ul className='d-flex justify-content-center align-items-center gap-4 flex_flow_wrap'>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link'>About</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link text-nowrap'>IBO Event</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link text-nowrap'>EEFI Tokenomics</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link'>Team</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link'>Roadmap</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link'>Partners</a></li>
                            <li><a href='' className='ff_raleway fs_16 fw-normal text_grey footer_link text-nowrap'>Contact Us</a></li>
                        </ul>

                        <div className='pt-3 d-lg-flex justify-content-center align-items-center flex-wrap'>
                            <a href='' className='mx-3 footer_icon'>
                                <Youtube />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Github />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Twitter />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Au />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Discord />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Msymbol />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Mail />
                            </a>
                            <a href='' className='mx-3 footer_icon'>
                                <Arrow />
                            </a>
                            <a href='' className='mx-3 mt-3 mt-lg-0 d-inline-block footer_icon'>
                                <Pdf />
                            </a>

                        </div>

                    </div>
                </Container>
            </div>
            <div className='bg_lightgrey'>
                <Container className='custom_container'>
                    <div className='d-flex justify-content-between align-items-center pt-3'>
                        <p className='ff_raleway fw_400 fs_14 text_grey'>@Copyright 2023</p>
                        <p className='ff_raleway fw_400 fs_14 text_grey'>Privacy policy</p>
                    </div>

                </Container>
            </div>

        </div>
    )
}

export default Footer
