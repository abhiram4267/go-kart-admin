import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Form, Row } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
    studentCordinatorName: Yup.string().required("Please enter a name"),
    studentCordinatorId: Yup.string().required("Please enter college ID"),
    studentCordinatorCollege: Yup.string().required("Please select a college"),
    studentCordinatorPhone: Yup.number()
        .typeError("Phone number must be a valid number")
        .required("Please enter phone number")
        .test('len', 'Phone number must be exactly 10 digits', val => val && val.toString().length === 10),
    cordinatorImage: Yup.string().required("Please upload an image"),
    cordinatorEmail: Yup.string().email("Invalid email format").required("Please enter an email"),
});

const EditStudentForm = ({ isOpen, toggle, initialData, onSubmit }) => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [dispImage, setDispImage] = useState('');

    useEffect(() => {
        if (initialData) {
            formik.setValues(initialData);
            setDispImage(initialData.cordinatorImage);
        }
    }, [initialData]);

    const formik = useFormik({
        initialValues: {
            id: initialData?._id,
            studentCordinatorName: initialData?.cordinatorName || '',
            studentCordinatorId: initialData?.cordinatorId || '',
            studentCordinatorCollege: initialData?.cordinatorCollege || '',
            studentCordinatorPhone: initialData?.cordinatorPhone || '',
            studentCordinatorEmail: initialData?.cordinatorEmail || '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values);
        },
        enableReinitialize: true,
    });


    const SendData = async (event) => {
        event.preventDefault();
        console.log('Submitting:', formik.values); // Add this line
        try {
            const response = await axios.put(`${BaseUrl}/api/edit-Student-Coordinator`, formik.values);
            toast.success('Student Coordinator Updated Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.location.href = "/EditStudent"
            
        } catch (error) {
            toast.error('Error Occured!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error("Error updating data:", error);
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
            <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Coordinator Details</ModalHeader>
            <Form className="tablelist-form">
                <ModalBody>
                    <div style={{ padding: "0px 10px" }}>
                        {/* <Row>
                            <Col lg="6" className="mb-3">
                                <label htmlFor="departmentName">Select Department:</label>
                                <select
                                    id="departmentName"
                                    name="departmentName"
                                    value={formik.values.departmentName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{border:"1px solid black"}}
                                    className={`form-select ${formik.errors.departmentName && formik.touched.departmentName ? 'is-invalid' : ''}`}
                                >
                                    <option value="">{"Select Department"}</option>
                                    {console.log(eventOptions)}
                                    {Object.keys(eventOptions).map((dept) => (
                                        <option key={dept} value={dept}>
                                            {dept.charAt(0).toUpperCase() + dept.slice(1)}
                                        </option>
                                    ))}
                                </select>
                                {formik.errors.departmentName && formik.touched.departmentName && (
                                    <div className="invalid-feedback">{formik.errors.departmentName}</div>
                                )}
                            </Col>

                            <Col lg="6" className="mb-3">
                                <label htmlFor="eventName">Select Event:</label>
                                <select
                                    id="eventName"
                                    name="eventName"
                                    value={formik.values.eventName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{border:"1px solid black"}}
                                    className={`form-select ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
                                >
                                    <option value="">{"Select Event"}</option>
                                    {eventOptions[formik.values.departmentName]?.map((event, index) => (
                                        <option key={index} value={event}>
                                            {event}
                                        </option>
                                    ))}
                                </select>
                                {formik.errors.eventName && formik.touched.eventName && (
                                    <div className="invalid-feedback">{formik.errors.eventName}</div>
                                )}
                            </Col>
                        </Row> */}

                        <Row>
                            <Col lg="6" className="mb-3">
                                <label htmlFor="studentCordinatorName" className="form-label">Coordinator Name</label>
                                <input
                                    type="text"
                                    id="studentCordinatorName"
                                    name="studentCordinatorName"
                                    className={`form-control ${formik.errors.studentCordinatorName && formik.touched.studentCordinatorName ? 'is-invalid' : ''}`}
                                    placeholder="Enter Name"
                                    value={formik.values.studentCordinatorName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid black" }}
                                />
                                {formik.errors.studentCordinatorName && formik.touched.studentCordinatorName && (
                                    <div className="invalid-feedback">{formik.errors.studentCordinatorName}</div>
                                )}
                            </Col>

                            <Col lg="6" className="mb-3">
                                <label className="form-input">Coordinator ID</label>
                                <input
                                    type="text"
                                    id="studentCordinatorId"
                                    name="studentCordinatorId"
                                    className={`form-control ${formik.errors.studentCordinatorId && formik.touched.studentCordinatorId ? 'is-invalid' : ''}`}
                                    placeholder="Enter ID"
                                    value={formik.values.studentCordinatorId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid black" }}
                                />
                                {formik.errors.studentCordinatorId && formik.touched.studentCordinatorId && (
                                    <div className="invalid-feedback">{formik.errors.studentCordinatorId}</div>
                                )}
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6" className="mb-3">
                                <label htmlFor="studentCordinatorCollege" className="form-label">College</label>
                                <select
                                    id="studentCordinatorCollege"
                                    name="studentCordinatorCollege"
                                    value={formik.values.studentCordinatorCollege}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid black" }}
                                    className={`form-select ${formik.errors.studentCordinatorCollege && formik.touched.studentCordinatorCollege ? 'is-invalid' : ''}`}
                                >
                                    <option value="">{"Select College"}</option>
                                    <option value="acet">ACET</option>
                                    <option value="aec">AEC</option>
                                </select>
                                {formik.errors.studentCordinatorCollege && formik.touched.studentCordinatorCollege && (
                                    <div className="invalid-feedback">{formik.errors.studentCordinatorCollege}</div>
                                )}
                            </Col>

                            <Col lg="6" className="mb-3">
                                <label htmlFor="studentCordinatorPhone" className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    id="studentCordinatorPhone"
                                    name="studentCordinatorPhone"
                                    className={`form-control ${formik.errors.studentCordinatorPhone && formik.touched.studentCordinatorPhone ? 'is-invalid' : ''}`}
                                    placeholder="Enter Phone Number"
                                    value={formik.values.studentCordinatorPhone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid black" }}
                                />
                                {formik.errors.studentCordinatorPhone && formik.touched.studentCordinatorPhone && (
                                    <div className="invalid-feedback">{formik.errors.studentCordinatorPhone}</div>
                                )}
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="6" className="mb-3">
                                <label htmlFor="studentCordinatorEmail" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="studentCordinatorEmail"
                                    name="studentCordinatorEmail"
                                    className={`form-control ${formik.errors.studentCordinatorEmail && formik.touched.studentCordinatorEmail ? 'is-invalid' : ''}`}
                                    placeholder="Enter Email"
                                    value={formik.values.studentCordinatorEmail}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid black" }}
                                />
                                {formik.errors.studentCordinatorEmail && formik.touched.studentCordinatorEmail && (
                                    <div className="invalid-feedback">{formik.errors.studentCordinatorEmail}</div>
                                )}
                            </Col>

                            {/* <Col lg="6" className="mb-3">
                                <label htmlFor="cordinatorImage" className="form-label">Upload Image</label>
                                <input
                                    type="file"
                                    id="cordinatorImage"
                                    name="cordinatorImage"
                                    className={`form-control ${formik.errors.cordinatorImage && formik.touched.cordinatorImage ? 'is-invalid' : ''}`}
                                    onChange={handleImageChange}
                                    ref={imageRef}
                                    style={{border:"1px solid black"}}
                                />
                                {formik.errors.cordinatorImage && formik.touched.cordinatorImage && (
                                    <div className="invalid-feedback">{formik.errors.cordinatorImage}</div>
                                )}
                                {dispImage && <img src={dispImage} alt="Coordinator" style={{ maxWidth: '100px', marginTop: '10px' }} />}
                            </Col> */}
                        </Row>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={(event) => SendData(event)} color="primary">Save Changes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                <ToastContainer />
            </Form>
        </Modal>
    );
};

export default EditStudentForm;
