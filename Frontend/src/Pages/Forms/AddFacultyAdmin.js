import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../cardUpdate.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFaculty = ({ onFormSubmit }) => {
  document.title = "Go-Karting | Admin";
  const BaseURL = process.env.REACT_APP_BASEURL;


  const validation = useFormik({
    enableReinitialize: true,

    initialValues: { 
      facultyName: "",
      phoneNumber: "",
      collegeId: "",
      email: "",
      photo: null,
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
      photo: Yup.mixed()
        .required("Please Upload a Photo")
        .test("fileSize", "File size is too large", (value) => {
          return value && value.size <= 3048576; // 1 MB
        })
        .test("fileType", "Unsupported file format", (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type)
          );
        }),
      college: Yup.string().required("Please Select a College"),
    }),

    onSubmit: async (values) => {

      console.log("Form submitted successfully", values);
      const FacultyFormData = new FormData();
      FacultyFormData.append("cordinatorImage", values.photo);
      FacultyFormData.append("cordinatorName", values.facultyName);
      FacultyFormData.append("cordinatorId", values.collegeId);
      FacultyFormData.append("cordinatorCollege", values.college);
      FacultyFormData.append("cordinatorPhone", values.phoneNumber);
      FacultyFormData.append("cordinatorEmail", values.email);
      console.log(FacultyFormData);
      for (let [key, value] of FacultyFormData.entries()) {
        console.log(`${key}: ${value}`);
      }
      try {
        const response = await axios.post(BaseURL + "/api/add-Faculty-coordinator", FacultyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Faculty Added Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // setTimeout(() => {
        //   window.location.href = '/ViewFaculty';
        // }, 2500);
        console.log('Response', response);
      } catch (err) {
        toast.error('Error Occurred!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(err);
      }
      console.log("Form values:", FacultyFormData);
      console.log("Form submitted successfully");

      if (onFormSubmit) {
        onFormSubmit(values);
      } else {
        console.warn("onFormSubmit prop is not provided");
      }
    },
  });


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="COORDINATORS" breadcrumbItem="Add Faculty Admins" />
          <Row>
            <Col className="cardBodyParent" >
              <Card className="cardBody">
                <CardBody>
                  <h4 className="card-title">Add Faculty Form</h4>
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
                        <FormGroup>
                          <Label htmlFor="facultyName">Faculty Name</Label>
                          <Input
                            name="facultyName"
                            placeholder="Faculty Name"
                            type="text"
                            className="form-control"
                            id="facultyName"
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
                        <FormGroup>
                          <Label htmlFor="validationCustom02">Phone Number</Label>
                          <Input
                            name="phoneNumber"
                            placeholder="Phone Number"
                            type="number"
                            className="form-control"
                            id="phoneNumber"
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
                        <FormGroup>
                          <Label htmlFor="validationCustom03">College ID</Label>
                          <Input
                            name="collegeId"
                            placeholder="College ID"
                            type="text"
                            className="form-control"
                            id="collegeId"
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
                        <FormGroup>
                          <Label htmlFor="validationCustom04">Email</Label>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            id="email"
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
                        <FormGroup>
                          <Label htmlFor="validationCustom05">Upload Photo</Label>
                          <Input
                            name="photo"
                            type="file"
                            className="form-control"
                            id="photo"
                            onChange={(event) =>
                              validation.setFieldValue(
                                "photo",
                                event.currentTarget.files[0]
                              )
                            }
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.photo &&
                              validation.errors.photo
                                ? true
                                : false
                            }
                          />
                          {validation.touched.photo &&
                          validation.errors.photo ? (
                            <FormFeedback type="invalid">
                              {validation.errors.photo}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
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
                      Submit form
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddFaculty;
