import React from 'react';
import { Container } from 'react-bootstrap';
import cloudimg from '../assets/images/png/Clouds-bottom.png'

function Amplify() {
    return (
        <div className='amplify_bg_img amplify_bg_img1 min_vh_100 h_350 h_sm_500 d-flex flex-column position-relative mt-lg-5'>
            <img src={cloudimg} alt="cloudimg" className='position-absolute start-0 w-100 z-2 cloud_img d-none d-md-block' />
            <div className='d-flex justify-content-center bg-black'>
                <h2 className='ff_jakarta text-white fs_52 fw-bolder pb-2 pt-1 mb-0 pt-1 pt-xxl-3 pb-lg-3 pt-lg-3'>Amplify and stretch gains</h2>
            </div>
            <Container className='d-flex flex-column justify-content-center align-items-center flex-sm-grow-1'>
                <p className='text-white ff_raleway fw-normal fs_14 mw_554 text-center pt_187 pt-sm-0 pt_209 pt_227'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
            </Container>
        </div>
    )
}

export default Amplify
