import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Contact() {
    return (
        <div>
            <div classNameName='contact_bg_img py_contact d-none d-lg-block'>
                <Container classNameName='custom_container'>
                    <h2 classNameName='ff_NeueMachinaBold fs_46 text-white text-center'>Contact Us</h2>
                    <p classNameName='text-white opacity_8 ff_raleway fw-normal fs_16 text-center pb-5'>Have a question or want to contribute? Reach out to us.</p>
                    <form classNameName="pt-4 pb-4 w-100">
                        <div classNameName="w-100 d-flex gap-5 pb-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                classNameName="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                classNameName="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                        </div>
                        <div classNameName="w-100 d-flex gap-5 pb-3">
                            <input
                                type="text"
                                placeholder="Email"
                                classNameName="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                classNameName="w-50 py-4 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150"
                            />
                        </div>
                        <textarea
                            name="#"
                            id="#"
                            rows="4"
                            placeholder="Massage"
                            classNameName="resize_none w-100 bg-transparent outline_none border_bottom ff_raleway fs_16 fw-normal text-white lh-150 pt-5"
                        ></textarea>
                    </form>
                    <div classNameName='d-flex justify-content-center align-items-lg-center pt-5'>
                        <a href='' classNameName='submit_btn text-white ff_raleway fw-medium fs_20 glass_hover'>SUBMIT</a>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Contact
