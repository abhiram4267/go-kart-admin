import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
  FormFeedback,
  Form,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../cardUpdate.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = ({ onFormSubmit }) => {
  document.title = "Go-Karting | Admin";
  const BaseURL = process.env.REACT_APP_BASEURL;

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      facultyName: "",
      phoneNumber: "",
      collegeId: "",
      email: "",
      college: "",
    },
    validationSchema: Yup.object({
      facultyName: Yup.string().required("Please Enter the Faculty Name"),
      phoneNumber: Yup.number()
        .typeError("Please enter a valid phone number")
        .required("Please Enter the Phone Number")
        .test('len', 'Phone number must be exactly 10 digits', val => val && val.toString().length === 10),
      collegeId: Yup.string().required("Please Enter the College ID"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Please Enter the Email"),
      college: Yup.string().required("Please Select a College"),
    }),

    onSubmit: (values) => {
      console.log(values);
      const StudentData = {
        studentCordinatorName: values.facultyName,
        studentCordinatorId: values.collegeId,
        studentCordinatorCollege: values.college,
        studentCordinatorPhone: values.phoneNumber,
        studentCordinatorEmail: values.email,
      };

      axios.post(BaseURL + "/api/add-Student-Coordinator", StudentData)
        .then(res => {
          toast.success('Student Added Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          validation.resetForm(); // Reset form after success
          setTimeout(() => {
            window.location.href = '/ViewStudent';
          }, 2500);
        })
        .catch(err => {
          toast.error('Error Occured!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          console.error(err);
        });
    },
  });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="COORDINATORS" breadcrumbItem="Add Student Admin" />
          <Row>
            <Col className="cardBodyParent">
              <Card className="cardBody">
                <CardBody>
                  <h4 className="card-title">Add Student Form</h4>
                  <p className="card-title-desc">
                    Please Provide Valid Details.
                  </p>
                  <Form
                    className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                    }}
                  >
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationFacultyName">
                            Student Name
                          </Label>
                          <Input
                            name="facultyName"
                            placeholder="Student Name"
                            type="text"
                            className="form-control"
                            id="validationFacultyName"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.facultyName || ""}
                            invalid={
                              validation.touched.facultyName &&
                              validation.errors.facultyName
                                ? true
                                : false
                            }
                          />
                          {validation.touched.facultyName &&
                            validation.errors.facultyName ? (
                            <FormFeedback type="invalid">
                              {validation.errors.facultyName}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationPhoneNumber">Phone No</Label>
                          <Input
                            name="phoneNumber"
                            placeholder="Mobile Number"
                            type="number" // Changed to 'tel' for phone number input
                            className="form-control"
                            id="validationPhoneNumber"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.phoneNumber || ""}
                            invalid={
                              validation.touched.phoneNumber &&
                              validation.errors.phoneNumber
                                ? true
                                : false
                            }
                          />
                          {validation.touched.phoneNumber &&
                            validation.errors.phoneNumber ? (
                            <FormFeedback type="invalid">
                              {validation.errors.phoneNumber}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCollegeId">Roll.No</Label>
                          <Input
                            name="collegeId"
                            placeholder="College ID"
                            type="text"
                            className="form-control"
                            id="validationCollegeId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.collegeId || ""}
                            invalid={
                              validation.touched.collegeId &&
                              validation.errors.collegeId
                                ? true
                                : false
                            }
                          />
                          {validation.touched.collegeId &&
                            validation.errors.collegeId ? (
                            <FormFeedback type="invalid">
                              {validation.errors.collegeId}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationEmail">Email</Label>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            id="validationEmail"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                          />
                          {validation.touched.email &&
                            validation.errors.email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCollege">College</Label>
                          <Input
                            type="select"
                            name="college"
                            className="form-control"
                            id="validationCollege"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.college || ""}
                            invalid={
                              validation.touched.college &&
                              Boolean(validation.errors.college)
                            }
                          >
                            <option value="">Select College</option>
                            <option value="aec">AEC</option>
                            <option value="acet">ACET</option>
                          </Input>
                          {validation.touched.college &&
                            validation.errors.college ? (
                            <FormFeedback type="invalid">
                              {validation.errors.college}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                    <ToastContainer />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddStudent;
