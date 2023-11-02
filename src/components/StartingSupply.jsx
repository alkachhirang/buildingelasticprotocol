import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function StartingSupply() {
    return (
        <div classNameName='supply_bg_img'>
            <div>
                <Container classNameName='custom_container py_startimgsupply'>
                    <h3 classNameName='ff_jakarta fw-bold fs_52 text-white text-center'>170k Total Starting Supply</h3>
                    <p classNameName='ff_raleway fw-medium fs_16 text-white text-center pb-5'>Initial BONDing Offering (IBO)* Phases</p>
                    <div classNameName='d-flex align-items-center justify-content-center'>
                        <div classNameName=' overflow-lg-none overflow-auto'>
                            <div classNameName='pb-5 pt-3 w_md_900 w_593'>
                                <Row classNameName='border_bottom align-items-center justify-content-center'>
                                    <Col classNameName='col-4'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>Round 1</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-center'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>10,000 EEFI Bonds</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-end'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'> <span classNameName='fs_18'>@</span> $12</p>
                                    </Col>
                                </Row>
                                <div classNameName='d-flex justify-content-end'>
                                    <p classNameName='text-white ff_jakarta fw-normal fs_16 pt-2 font_italic'>Vested (locked) for 1 Year</p>
                                </div>
                                <Row classNameName='border_bottom align-items-center justify-content-center'>
                                    <Col classNameName='col-4'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>Round 2</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-center'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>12,777 EEFI Bonds</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-end'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'> <span classNameName='fs_18'>@</span> $18</p>
                                    </Col>
                                </Row>
                                <div classNameName='d-flex justify-content-end'>
                                    <p classNameName='text-white ff_jakarta fw-normal fs_16 pt-2 font_italic'>Vested (locked) for six months</p>
                                </div>
                                <Row classNameName='border_bottom align-items-center justify-content-center'>
                                    <Col classNameName='col-4'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>Round 3</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-center'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'>25,000 EEFI Bonds</p>
                                    </Col>
                                    <Col classNameName='col-4 d-flex align-items-center justify-content-end'>
                                        <p classNameName='ff_raleway fw-normal fs_20 text-white'> <span classNameName='fs_18'>@</span> $26</p>
                                    </Col>
                                </Row>
                                <div classNameName='d-flex justify-content-end'>
                                    <p classNameName='text-white ff_jakarta fw-normal fs_16 pt-2 font_italic'>No vesting or lock up periods. Available at launch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classNameName='text-center d-flex flex-column justify-content-center align-items-center pt-lg-5'>
                        <p classNameName='ff_raleway fw-normal fs_20 text-white lh_150 white_line'>(47,777 or around  <span classNameName='fs_36 ff_jakarta'>28% </span><span classNameName=''> of total starting supply is up for IBO)</span></p>
                        <p classNameName='ff_raleway fs_12 fw-normal text-white mw_521 text-center opacity_8'>Individuals who hold <span classNameName='fs_14'>$EEFI</span> will also receive an airdrop of the protocol's governance token <span classNameName='fs_14'>$EFT</span> ...learn more</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default StartingSupply;
