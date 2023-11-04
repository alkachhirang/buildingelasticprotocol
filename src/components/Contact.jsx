import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Contact() {
    return (
        <div>
            <div className='contact_bg_img py_contact d-none d-lg-block mt_15'>
                <Container className='custom_container'>
                    <h2 className='ff_NeueMachinaBold fs_46 text-white text-center' data-aos="fade-down">Contact Us</h2>
                    <p className='text-white opacity_8 ff_raleway fw-normal fs_16 text-center pb-5' data-aos="fade-down">Have a question or want to contribute? Reach out to us.</p>
                    <form className="pt-4 pb-4 w-100">
                        <div className="w-100 d-flex gap-5 pb-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                        </div>
                        <div className="w-100 d-flex gap-5 pb-3">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                        </div>
                        <textarea
                            name="#"
                            id="#"
                            rows="4"
                            placeholder="Massage"
                            className="resize_none w-100 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150 pt-5"
                        ></textarea>
                    </form>
                    <div className='d-flex justify-content-center align-items-lg-center pt-5' data-aos="fade-down">
                        <a href='' className='submit_btn text-white ff_raleway fw-medium fs_20 glass_hover'>SUBMIT</a>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Contact
