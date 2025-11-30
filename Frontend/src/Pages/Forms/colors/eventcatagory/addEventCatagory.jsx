// import React from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   FormGroup,
//   Button,
//   Label,
//   Input,
//   Container,
//   FormFeedback,
//   Form,
// } from "reactstrap";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import Breadcrumbs from "../../../../components/Common/Breadcrumb";
// import '../../../../cardUpdate.css';
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddEventCategory = ({ onFormSubmit }) => {
//   document.title = "Colours Admin";

//   const validation = useFormik({
//     initialValues: {
//       eventCatagoryName: "",
//       eventDate: "",
//       eventTime: "",
//     },

//     validationSchema: Yup.object({
//       eventCatagoryName: Yup.string().required("Please enter the Event Category Name"),
//       eventDate: Yup.string().required("Please enter the Event Date"),
//       eventTime: Yup.string().required("Please enter the Event Time"),
//     }),

//     onSubmit: (values) => {
//       console.log("Form submitted successfully", values);

//       // Create a FormData object to handle file uploads
//       const formData = new FormData();
//       formData.append('eventCatName', values.eventCatagoryName);
//       formData.append('eventCatDate', values.eventDate);
//       formData.append('eventCatTime', values.eventTime);

//       (async () => {
//         try {
//           const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/add-Event-Category`, formData);
//           toast.success('Event Category Added Successfully!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           // setTimeout(() => {
//           //   window.location.href = "/EventCatagory";
//           // }, 2500);
//           console.log('Response:', response);
//         } catch (err) {
//           toast.error('Error Occurred!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           console.log(err);
//         }
//       })();

//       if (onFormSubmit) {
//         onFormSubmit(values);
//       } else {
//         console.warn("onFormSubmit prop is not provided");
//       }
//     },
//   });

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Breadcrumbs title="BRANCH - EVENTS" breadcrumbItem="Add Event Category" />
//           <Row>
//             <Col className="cardBodyParent">
//               <Card className="cardBody">
//                 <CardBody>
//                   <h4 className="card-title">Add Event Category Form</h4>

//                   <Form
//                     className="needs-validation"
//                     style={{ marginTop: '40px' }}
//                     onSubmit={validation.handleSubmit}
//                   >
//                     <Row>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventCatagoryName">Event Category Name</Label>
//                           <Input
//                             name="eventCatagoryName"
//                             placeholder="Event Category Name"
//                             type="text"
//                             className="form-control"
//                             style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventCatagoryName}
//                             invalid={validation.touched.eventCatagoryName && validation.errors.eventCatagoryName ? true : false}
//                           />
//                           <FormFeedback>
//                             {validation.errors.eventCatagoryName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventDate">Event Date</Label>
//                           <Input
//                             name="eventDate"
//                             placeholder="Event Date"
//                             type="date"
//                             className="form-control"
//                             style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventDate}
//                             invalid={validation.touched.eventDate && validation.errors.eventDate ? true : false}
//                           />
//                           <FormFeedback>
//                             {validation.errors.eventDate}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventTime">Event Time</Label>
//                           <Input
//                             name="eventTime"
//                             placeholder="Event Time"
//                             type="time"
//                             className="form-control"
//                             style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventTime}
//                             invalid={validation.touched.eventTime && validation.errors.eventTime ? true : false}
//                           />
//                           <FormFeedback>
//                             {validation.errors.eventTime}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Button color="primary" type="submit">
//                       Submit
//                     </Button>
//                     <ToastContainer />
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default AddEventCategory;





// import React from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   FormGroup,
//   Button,
//   Label,
//   Input,
//   Container,
//   FormFeedback,
//   Form,
// } from "reactstrap";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import Breadcrumbs from "../../../../components/Common/Breadcrumb";
// import '../../../../cardUpdate.css';
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const AddEventCategory = ({ onFormSubmit }) => {
//   document.title = "Colours Admin";


//   const formatTime = (hour, minute, ampm) => {
//     return `${hour}:${minute} ${ampm}`;
//   };

//   const validation = useFormik({
//     initialValues: {
//       eventCatagoryName: "",
//       eventDate: "",
//       eventTimeHour: "12",
//       eventTimeMinute: "00",
//       eventTimeAMPM: "AM",
//       photo: null,
//     },

//     validationSchema: Yup.object({
//       eventCatagoryName: Yup.string().required("Please enter the Event Category Name"),
//       eventDate: Yup.string().required("Please enter the Event Date"),
//       eventTimeHour: Yup.string().required("Please enter the Event Hour"),
//       eventTimeMinute: Yup.string().required("Please enter the Event Minute"),
//       eventTimeAMPM: Yup.string().required("Please select AM/PM"),
//       eventPhoto: Yup.mixed()
//         .required("Please upload a photo")
//         .test("fileSize", "File size is too large, should be less than 1MB", (value) => {
//           return value && value.size <= 1048576;
//         })
//         .test("fileType", "Unsupported file type, only images are allowed", (value) => {
//           return value && ["image/jpeg", "image/png", "image/gif"].includes(value.type);
//         }),
//     }),

//     onSubmit: (values) => {
//       console.log("Form submitted successfully", values);


//       const formattedTime = formatTime(values.eventTimeHour, values.eventTimeMinute, values.eventTimeAMPM);
//       const [year, month, day] = values.eventDate.split('-')
//       const date = `${day}-${month}-${year}`
//       console.log(date);


//       const formData = new FormData();
//       formData.append('eventCatName', values.eventCatagoryName);
//       formData.append('eventCatDate', date);
//       formData.append('eventCatTime', formattedTime);
//       if (values.photo) {
//         formData.append('photo', values.photo);
//       }

//       (async () => {
//         try {
//           const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/add-Event-Category`, formData);
//           toast.success('Event Category Added Successfully!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           console.log('Response:', response);
//         } catch (err) {
//           toast.error('Error Occurred!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           console.log(err);
//         }
//       })();

//       if (onFormSubmit) {
//         onFormSubmit(values);
//       } else {
//         console.warn("onFormSubmit prop is not provided");
//       }
//     },
//   });

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Breadcrumbs title="BRANCH - EVENTS" breadcrumbItem="Add Event Category" />
//           <Row>
//             <Col className="cardBodyParent">
//               <Card className="cardBody">
//                 <CardBody>
//                   <h4 className="card-title">Add Event Category Form</h4>

//                   <Form
//                     className="needs-validation"
//                     style={{ marginTop: '40px' }}
//                     onSubmit={validation.handleSubmit}
//                   >
//                     <Row>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventCatagoryName">Event Category Name</Label>
//                           <Input
//                             name="eventCatagoryName"
//                             placeholder="Event Category Name"
//                             type="text"
//                             className="form-control"
//                             style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventCatagoryName}
//                             invalid={validation.touched.eventCatagoryName && validation.errors.eventCatagoryName ? true : false}
//                           />
//                           <FormFeedback>
//                             {validation.errors.eventCatagoryName}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventDate">Event Date</Label>
//                           <Input
//                             name="eventDate"
//                             placeholder="Event Date"
//                             type="date"
//                             className="form-control"
//                             style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventDate}
//                             invalid={validation.touched.eventDate && validation.errors.eventDate ? true : false}
//                           />
//                           <FormFeedback>
//                             {validation.errors.eventDate}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="photo">Upload Photo</Label>
//                           <Input
//                             name="photo"
//                             type="file"
//                             className="form-control"
//                             id="photo"
//                             onChange={(event) =>
//                               validation.setFieldValue(
//                                 "photo",
//                                 event.currentTarget.files[0]
//                               )
//                             }
//                             onBlur={validation.handleBlur}
//                             invalid={validation.touched.photo && validation.errors.photo ? true : false}
//                           />
//                           {validation.touched.photo && validation.errors.photo ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.photo}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row>
//                       <Col md="4">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventTimeHour">Hour</Label>
//                           <Input
//                             type="select"
//                             name="eventTimeHour"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventTimeHour}
//                             invalid={validation.touched.eventTimeHour && validation.errors.eventTimeHour ? true : false}
//                             style={{ maxHeight: '150px', overflowY: 'auto' }}
//                           >
//                             {[...Array(12).keys()].map((i) => (
//                               <option key={i} value={i + 1}>{i + 1}</option>
//                             ))}
//                           </Input>
//                           <FormFeedback>
//                             {validation.errors.eventTimeHour}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md="4">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventTimeMinute">Minute</Label>
//                           <Input
//                             type="select"
//                             name="eventTimeMinute"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventTimeMinute}
//                             invalid={validation.touched.eventTimeMinute && validation.errors.eventTimeMinute ? true : false}
//                             style={{ maxHeight: '150px', overflowY: 'auto' }}
//                           >
//                             {[...Array(60).keys()].map((i) => (
//                               <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
//                             ))}
//                           </Input>
//                           <FormFeedback>
//                             {validation.errors.eventTimeMinute}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                       <Col md="4">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="eventTimeAMPM">AM/PM</Label>
//                           <Input
//                             type="select"
//                             name="eventTimeAMPM"
//                             className="form-control"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.eventTimeAMPM}
//                             invalid={validation.touched.eventTimeAMPM && validation.errors.eventTimeAMPM ? true : false}
//                           >
//                             <option value="AM">AM</option>
//                             <option value="PM">PM</option>
//                           </Input>
//                           <FormFeedback>
//                             {validation.errors.eventTimeAMPM}
//                           </FormFeedback>
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Button color="primary" type="submit">
//                       Submit
//                     </Button>
//                     <ToastContainer />
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default AddEventCategory;


import React from "react";
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
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import '../../../../cardUpdate.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEventCategory = ({ onFormSubmit }) => {
  document.title = "Go Karting | Admin";

  const formatTime = (hour, minute, ampm) => {
    return `${hour}:${minute} ${ampm}`;
  };

  const validation = useFormik({

    enableReinitialize: true,

    initialValues: {
      eventCatagoryName: "",
      eventDate: "",
      eventTimeHour: "12",
      eventTimeMinute: "00",
      eventTimeAMPM: "AM",
      photo: null,
    },

    validationSchema: Yup.object({
      eventCatagoryName: Yup.string().required("Please enter the Event Category Name"),
      eventDate: Yup.string().required("Please enter the Event Date"),
      eventTimeHour: Yup.string().required("Please enter the Event Hour"),
      eventTimeMinute: Yup.string().required("Please enter the Event Minute"),
      eventTimeAMPM: Yup.string().required("Please select AM/PM"),


      photo: Yup.mixed()
        .required("Please upload an image")
        .test("fileSize", "File size is too large, should be less than 1MB", (value) => {
          return value && value.size <= 1048576;  // 1MB in bytes
        })
        .test("fileType", "Unsupported file type, only images are allowed", (value) => {
          return value && ["image/jpeg", "image/png", "image/gif"].includes(value.type);
        }),
    }),

    onSubmit: (values) => {
      console.log("Form submitted successfully", values);

      const formattedTime = formatTime(values.eventTimeHour, values.eventTimeMinute, values.eventTimeAMPM);
      const [year, month, day] = values.eventDate.split('-');
      const date = `${day}-${month}-${year}`;
      console.log(date);

      const formData = new FormData();

      formData.append('eventCatImage', values.photo);
      formData.append('eventCatName', values.eventCatagoryName);
      formData.append('eventCatDate', date);
      formData.append('eventCatTime', formattedTime);

      // for(let pair of formData.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]);
      // }

      (async () => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/add-Event-Category`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          toast.success('Event Category Added Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log('Response:', response);
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
      })();

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
          <Breadcrumbs title="BRANCH - EVENTS" breadcrumbItem="Add Event Category" />
          <Row>
            <Col className="cardBodyParent">
              <Card className="cardBody">
                <CardBody>
                  <h4 className="card-title">Add Event Category Form</h4>

                  <Form
                    className="needs-validation"
                    style={{ marginTop: '40px' }}
                    onSubmit={validation.handleSubmit}
                  >
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventCatagoryName">Event Category Name</Label>
                          <Input
                            name="eventCatagoryName"
                            placeholder="Event Category Name"
                            type="text"
                            className="form-control"
                            style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.eventCatagoryName}
                            invalid={validation.touched.eventCatagoryName && validation.errors.eventCatagoryName ? true : false}
                          />
                          <FormFeedback>
                            {validation.errors.eventCatagoryName}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventDate">Event Date</Label>
                          <Input
                            name="eventDate"
                            placeholder="Event Date"
                            type="date"
                            className="form-control"
                            style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.eventDate}
                            invalid={validation.touched.eventDate && validation.errors.eventDate ? true : false}
                          />
                          <FormFeedback>
                            {validation.errors.eventDate}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventCatImage">Upload Event Category Image</Label>
                          <Input
                            name="eventCatImage"
                            type="file"
                            className="form-control"
                            id="eventCatImage"
                            onChange={(event) =>
                              validation.setFieldValue(
                                "photo",
                                event.currentTarget.files[0]
                              )
                            }
                            onBlur={validation.handleBlur}
                            invalid={validation.touched.eventCatImage && validation.errors.eventCatImage ? true : false}
                          />
                          {validation.touched.eventCatImage && validation.errors.eventCatImage ? (
                            <FormFeedback type="invalid">
                              {validation.errors.eventCatImage}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventTimeHour">Hour</Label>
                          <Input
                            type="select"
                            name="eventTimeHour"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.eventTimeHour}
                            invalid={validation.touched.eventTimeHour && validation.errors.eventTimeHour ? true : false}
                            style={{ maxHeight: '150px', overflowY: 'auto' }}
                          >
                            {[...Array(12).keys()].map((i) => (
                              <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                          </Input>
                          <FormFeedback>
                            {validation.errors.eventTimeHour}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventTimeMinute">Minute</Label>
                          <Input
                            type="select"
                            name="eventTimeMinute"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.eventTimeMinute}
                            invalid={validation.touched.eventTimeMinute && validation.errors.eventTimeMinute ? true : false}
                            style={{ maxHeight: '150px', overflowY: 'auto' }}
                          >
                            {[...Array(60).keys()].map((i) => (
                              <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
                            ))}
                          </Input>
                          <FormFeedback>
                            {validation.errors.eventTimeMinute}
                          </FormFeedback>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="eventTimeAMPM">AM/PM</Label>
                          <Input
                            type="select"
                            name="eventTimeAMPM"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.eventTimeAMPM}
                            invalid={validation.touched.eventTimeAMPM && validation.errors.eventTimeAMPM ? true : false}
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </Input>
                          <FormFeedback>
                            {validation.errors.eventTimeAMPM}
                          </FormFeedback>
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

export default AddEventCategory;


