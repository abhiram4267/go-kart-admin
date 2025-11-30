// import React, { useEffect, useState } from "react";
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
// import axios from "axios";
// import Breadcrumbs from "../../components/Common/Breadcrumb";
// import "../../cardUpdate.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BalancePayments = ({ onFormSubmit }) => {
//   document.title = "Form Validation | Upzet - React Admin & Dashboard Template";
//   const BaseURL = process.env.REACT_APP_BASEURL;

//   const [TeamsData, setTeamsData] = useState([]);
//   const [SelectedTeam, setSelectedTeam] = useState(null);
//   const [submited, setSubmited] = useState(false);

//   useEffect(() => {
//     axios.get(BaseURL + "/api/get-Team-Payments")
//       .then((response) => {
//         console.log(response.TeamPaymentHistory);
//         setTeamsData(response.TeamPaymentHistory);
//       })
//       .catch((error) => {
//         console.log("Error fetching data:", error);
//       })
//   }, [submited]);

//   const validation = useFormik({
//     enableReinitialize: true,

//     initialValues: {
//       teamName: "",
//       teamId: "",
//       dateOfRegister: "",
//       couponApplied: "",
//       amountPaid: null,
//       remainAmount: "",
//     },

//     validationSchema: Yup.object({
//       teamName: Yup.string().required("Select the Team Name"),
//       teamId: Yup.string().required("Please Enter the Team ID"),
//       dateOfRegister: Yup.string().required("Please Enter the Date of Register"),
//       couponApplied: Yup.string().required("Please Enter the Coupon Applied"),
//       amountPaid: Yup.number().required("Please Enter the Amount Paid"),
//       remainAmount: Yup.string().required("Please Enter the Remaining Amount"),
//     }),

//     onSubmit: async (values) => {


//       try {
//         // const response = await axios.post(BaseURL + "/api/add-Faculty-coordinator");
//         toast.success('Faculty Added Successfully!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         // setTimeout(() => {
//         //   window.location.href = '/ViewFaculty';
//         // }, 2500);
//         // console.log('Response', response);
//       } catch (err) {
//         toast.error('Error Occurred!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         console.log(err);
//       }

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
//           <Breadcrumbs title="Payments" breadcrumbItem="View Payment" />
//           <Row>
//             <Col className="cardBodyParent" >
//               <Card className="cardBody">
//                 <CardBody>
//                   <h4 className="card-title">Payment Details</h4>
//                   <p className="card-title-desc">
//                     Please Provide Valid Details.
//                   </p>
//                   <Form
//                     className="needs-validation"
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       validation.handleSubmit();
//                     }}
//                   >
//                     <Row>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="teamName">Team Name</Label>
//                           <Input
//                             name="teamName"
//                             placeholder="Select a team"
//                             type="select"
//                             className="form-control"
//                             id="teamName"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.teamName || ""}
//                             invalid={validation.touched.teamName && validation.errors.teamName ? true : false}
//                           >
//                             <option value="">Select a team</option>
//                             {TeamsData &&
//                               TeamsData.map((team) => (
//                                 <option key={team.teamName} value={team.teamName}>
//                                   {team.teamName}
//                                 </option>
//                               ))}
//                           </Input>
//                           {validation.touched.teamName && validation.errors.teamName ? (
//                             <FormFeedback type="invalid">{validation.errors.teamName}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>


//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom02">Team ID</Label>
//                           <Input
//                             name="teamId"
//                             placeholder="Team ID"
//                             type="text"
//                             className="form-control"
//                             id="teamId"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.teamId || ""}
//                             invalid={
//                               validation.touched.teamId &&
//                                 validation.errors.teamId
//                                 ? true
//                                 : false
//                             }
//                           />
//                           {validation.touched.teamId &&
//                             validation.errors.teamId ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.teamId}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom03">Date of Register</Label>
//                           <Input
//                             name="dateOfRegister"
//                             placeholder="Date of Register"
//                             type="text"
//                             className="form-control"
//                             id="dateOfRegister"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.dateOfRegister || ""}
//                             invalid={
//                               validation.touched.dateOfRegister &&
//                                 validation.errors.dateOfRegister
//                                 ? true
//                                 : false
//                             }
//                           />
//                           {validation.touched.dateOfRegister &&
//                             validation.errors.dateOfRegister ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.dateOfRegister}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom04">Coupon Applied</Label>
//                           <Input
//                             name="couponApplied"
//                             placeholder="Coupon Applied"
//                             type="text"
//                             className="form-control"
//                             id="couponApplied"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.couponApplied || ""}
//                             invalid={
//                               validation.touched.couponApplied &&
//                                 validation.errors.couponApplied
//                                 ? true
//                                 : false
//                             }
//                           />
//                           {validation.touched.couponApplied &&
//                             validation.errors.couponApplied ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.couponApplied}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom05">Amount Paid</Label>
//                           <Input
//                             name="amountPaid"
//                             type="number"
//                             placeholder="Amount Paid"
//                             className="form-control"
//                             id="amountPaid"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             invalid={
//                               validation.touched.amountPaid &&
//                                 validation.errors.amountPaid
//                                 ? true
//                                 : false
//                             }
//                           />
//                           {validation.touched.amountPaid &&
//                             validation.errors.amountPaid ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.amountPaid}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="validationCollege">Balance Amount</Label>
//                           <Input
//                             type="text"
//                             placeholder="Balance Amount"
//                             name="balanceAmount"
//                             className="form-control"
//                             id="balanceAmount"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.remainAmount || ""}
//                             invalid={
//                               validation.touched.remainAmount &&
//                               Boolean(validation.errors.remainAmount)
//                             }
//                           >
//                           </Input>
//                           {validation.touched.remainAmount &&
//                             validation.errors.remainAmount ? (
//                             <FormFeedback type="invalid">
//                               {validation.errors.remainAmount}
//                             </FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>

//                     </Row>
//                     <Button color="primary" type="submit">
//                       Submit form
//                     </Button>
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <ToastContainer />
//     </React.Fragment>
//   );
// };

// export default BalancePayments;




// import React, { useEffect, useState } from "react";
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
// import axios from "axios";
// import Breadcrumbs from "../../components/Common/Breadcrumb";
// import "../../cardUpdate.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BalancePayments = ({ onFormSubmit }) => {
//   document.title = "Form Validation | Upzet - React Admin & Dashboard Template";
//   const BaseURL = process.env.REACT_APP_BASEURL;

//   const [TeamsData, setTeamsData] = useState([]);
//   const [SelectedTeam, setSelectedTeam] = useState(null);
//   const [submited, setSubmited] = useState(false);

//   useEffect(() => {
//     axios.get(BaseURL + "/api/get-Team-Payments")
//       .then((response) => {
//         console.log(response.TeamPaymentHistory);
//         setTeamsData(response.TeamPaymentHistory);
//       })
//       .catch((error) => {
//         console.log("Error fetching data:", error);
//       })
//   }, [submited]);

//   const validation = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       teamName: "",
//       teamId: "",
//       dateOfRegister: "",
//       couponApplied: "",
//       amountPaid: null,
//       remainAmount: "",
//     },

//     validationSchema: Yup.object({
//       teamName: Yup.string().required("Select the Team Name"),
//       teamId: Yup.string().required("Please Enter the Team ID"),
//       dateOfRegister: Yup.string().required("Please Enter the Date of Register"),
//       couponApplied: Yup.string().required("Please Enter the Coupon Applied"),
//       amountPaid: Yup.number().required("Please Enter the Amount Paid"),
//       remainAmount: Yup.string().required("Please Enter the Remaining Amount"),
//     }),

//     onSubmit: async (values) => {
//       console.log(values);
//       try {

//         toast.success('Payment details saved successfully!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       } catch (err) {
//         toast.error('Error Occurred!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         console.log(err);
//       }

//       if (onFormSubmit) {
//         onFormSubmit(values);
//       } else {
//         console.warn("onFormSubmit prop is not provided");
//       }
//     },
//   });

//   const handleTeamChange = (e) => {
//     const selectedTeamName = e.target.value;
//     const selectedTeam = TeamsData.find((team) => team.teamName === selectedTeamName);

//     setSelectedTeam(selectedTeam);

//     if (selectedTeam) {
//       // Autofill form values using formik.setValues
//       validation.setValues({
//         ...validation.values,
//         teamName: selectedTeam.teamName,
//         teamId: selectedTeam._id,
//         dateOfRegister: selectedTeam.createdAt,
//         couponApplied: selectedTeam.couponCode ? "YES" : "NO",
//         amountPaid: selectedTeam.amount,
//         remainAmount: selectedTeam.remainAmount,
//       });
//     }
//   };

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Breadcrumbs title="Payments" breadcrumbItem="View Payment History" />
//           <Row>
//             <Col className="cardBodyParent">
//               <Card className="cardBody">
//                 <CardBody>
//                   <h4 className="card-title">Payment Details</h4>
//                   <p className="card-title-desc">Please Provide Valid Details.</p>
//                   <Form
//                     className="needs-validation"
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       validation.handleSubmit();
//                     }}
//                   >
//                     <Row>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="teamName">Team Name</Label>
//                           <Input
//                             name="teamName"
//                             placeholder="Select a team"
//                             type="select"
//                             className="form-control"
//                             id="teamName"
//                             onChange={(e) => {
//                               validation.handleChange(e);
//                               handleTeamChange(e); // Trigger the autofill on team selection
//                             }}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.teamName || ""}
//                             invalid={validation.touched.teamName && validation.errors.teamName ? true : false}
//                           >
//                             <option value="">Select a team</option>
//                             {TeamsData &&
//                               TeamsData.map((team) => (
//                                 <option key={team.teamName} value={team.teamName}>
//                                   {team.teamName}
//                                 </option>
//                               ))}
//                           </Input>
//                           {validation.touched.teamName && validation.errors.teamName ? (
//                             <FormFeedback type="invalid">{validation.errors.teamName}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>

//                       {/* Team ID */}
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom02">Team ID</Label>
//                           <Input
//                             name="teamId"
//                             placeholder="Team ID"
//                             type="text"
//                             className="form-control"
//                             id="teamId"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.teamId || ""}
//                             invalid={validation.touched.teamId && validation.errors.teamId ? true : false}
//                             disabled
//                           />
//                           {validation.touched.teamId && validation.errors.teamId ? (
//                             <FormFeedback type="invalid">{validation.errors.teamId}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row>
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom03">Date of Register</Label>
//                           <Input
//                             name="dateOfRegister"
//                             placeholder="Date of Register"
//                             type="text"
//                             className="form-control"
//                             id="dateOfRegister"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.dateOfRegister || ""}
//                             invalid={validation.touched.dateOfRegister && validation.errors.dateOfRegister ? true : false}
//                             disabled

//                           />
//                           {validation.touched.dateOfRegister && validation.errors.dateOfRegister ? (
//                             <FormFeedback type="invalid">{validation.errors.dateOfRegister}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                       {/* <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom04">Coupon Applied</Label>
//                           <Input
//                             name="couponApplied"
//                             placeholder="Coupon Applied"
//                             type="text"
//                             className="form-control"
//                             id="couponApplied"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.couponApplied || ""}
//                             invalid={validation.touched.couponApplied && validation.errors.couponApplied ? true : false}
//                             disabled

//                           />
//                           {validation.touched.couponApplied && validation.errors.couponApplied ? (
//                             <FormFeedback type="invalid">{validation.errors.couponApplied}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col> */}
//                       <Col md="6">
//                         <FormGroup>
//                           <Label htmlFor="validationCustom05">Amount Paid</Label>
//                           <Input
//                             name="amountPaid"
//                             type="number"
//                             placeholder="Amount Paid"
//                             className="form-control"
//                             id="amountPaid"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.amountPaid || ""}
//                             invalid={validation.touched.amountPaid && validation.errors.amountPaid ? true : false}
//                             disabled

//                           />
//                           {validation.touched.amountPaid && validation.errors.amountPaid ? (
//                             <FormFeedback type="invalid">{validation.errors.amountPaid}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Row>
                      
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="validationCollege">Balance Amount</Label>
//                           <Input
//                             type="text"
//                             placeholder="Balance Amount"
//                             name="balanceAmount"
//                             className="form-control"
//                             id="balanceAmount"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.remainAmount || ""}
//                             invalid={validation.touched.remainAmount && Boolean(validation.errors.remainAmount)}
//                           />
//                           {validation.touched.remainAmount && validation.errors.remainAmount ? (
//                             <FormFeedback type="invalid">{validation.errors.remainAmount}</FormFeedback>
//                           ) : null}
//                         </FormGroup>
//                       </Col>
//                     </Row>

//                     <Button color="primary" type="submit">
//                       Complete Payment
//                     </Button>
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <ToastContainer />
//     </React.Fragment>
//   );
// };

// export default BalancePayments;




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

const BalancePayments = ({ onFormSubmit }) => {
  document.title = "Go-Karting | Admin";
  const BaseURL = process.env.REACT_APP_BASEURL;

  const [TeamsData, setTeamsData] = useState([]);
  const [SelectedTeam, setSelectedTeam] = useState(null);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    axios.get(BaseURL + "/api/get-Team-Payments")
      .then((response) => {
        console.log(response.TeamPaymentHistory);
        setTeamsData(response.TeamPaymentHistory);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
  }, [submited]);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      teamName: "",
      teamId: "",
      dateOfRegister: "",
      couponApplied: "",
      amountPaid: null,
      remainAmount: "",
      paymentAmount: "",
    },

    validationSchema: Yup.object({
      teamName: Yup.string().required("Select the Team Name"),
      teamId: Yup.string().required("Please Enter the Team ID"),
      dateOfRegister: Yup.string().required("Please Enter the Date of Register"),
      couponApplied: Yup.string().required("Please Enter the Coupon Applied"),
      amountPaid: Yup.number().required("Please Enter the Amount Paid"),
      remainAmount: Yup.string().required("Please Enter the Remaining Amount"),
      paymentAmount: Yup.string().required("Please Enter the Payment Amount"),
    }),

    onSubmit: async (values) => {
      if((values.paymentAmount - '0') > values.remainAmount){
        toast.error('Entered Amount is Greater then Balance !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
      else{
      try {
        axios.post(BaseURL + "/api/Update-Team-Payment", values)
        .then((response) => {
          console.log(response);  
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        })
        toast.success('Payment details saved successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setSubmited(!submited);
        validation.resetForm();
        }, [1500])
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
    }

      if (onFormSubmit) {
        onFormSubmit(values);
      } else {
        console.warn("onFormSubmit prop is not provided");
      }
    },
  });

  const handleTeamChange = (e) => {
    const selectedTeamName = e.target.value;
    const selectedTeam = TeamsData.find((team) => team.teamName === selectedTeamName);

    setSelectedTeam(selectedTeam);

    if (selectedTeam) {
      // Autofill form values using formik.setValues
      validation.setValues({
        ...validation.values,
        teamName: selectedTeam.teamName,
        teamId: selectedTeam._id,
        dateOfRegister: selectedTeam.createdAt,
        couponApplied: selectedTeam.couponCode ? "YES" : "NO",
        amountPaid: selectedTeam.amount,
        remainAmount: selectedTeam.remainAmount || "0",
      });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    validation.setValues({
      ...validation.values,
      paymentAmount: e.target.value
    })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Payments" breadcrumbItem="View Payment History" />
          <Row>
            <Col className="cardBodyParent">
              <Card className="cardBody">
                <CardBody>
                  <h4 className="card-title">Payment Details</h4>
                  <p className="card-title-desc">Please Provide Valid Details.</p>
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
                          <Label htmlFor="teamName">Team Name</Label>
                          <Input
                            name="teamName"
                            placeholder="Select a team"
                            type="select"
                            className="form-control"
                            id="teamName"
                            onChange={(e) => {
                              validation.handleChange(e);
                              handleTeamChange(e); // Trigger the autofill on team selection
                            }}
                            onBlur={validation.handleBlur}
                            value={validation.values.teamName || ""}
                            invalid={validation.touched.teamName && validation.errors.teamName ? true : false}
                          >
                            <option value="">Select a team</option>
                            {TeamsData &&
                              TeamsData.map((team) => (
                                <option key={team.teamName} value={team.teamName}>
                                  {team.teamName}
                                </option>
                              ))}
                          </Input>
                          {validation.touched.teamName && validation.errors.teamName ? (
                            <FormFeedback type="invalid">{validation.errors.teamName}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      {/* Team ID */}
                      <Col md="6">
                        <FormGroup>
                          <Label htmlFor="validationCustom02">Team ID</Label>
                          <Input
                            name="teamId"
                            placeholder="Team ID"
                            type="text"
                            className="form-control"
                            id="teamId"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.teamId || ""}
                            invalid={validation.touched.teamId && validation.errors.teamId ? true : false}
                            disabled
                          />
                          {validation.touched.teamId && validation.errors.teamId ? (
                            <FormFeedback type="invalid">{validation.errors.teamId}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label htmlFor="validationCustom03">Date of Register</Label>
                          <Input
                            name="dateOfRegister"
                            placeholder="Date of Register"
                            type="text"
                            className="form-control"
                            id="dateOfRegister"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.dateOfRegister || ""}
                            invalid={validation.touched.dateOfRegister && validation.errors.dateOfRegister ? true : false}
                            disabled

                          />
                          {validation.touched.dateOfRegister && validation.errors.dateOfRegister ? (
                            <FormFeedback type="invalid">{validation.errors.dateOfRegister}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      {/* <Col md="6">
                        <FormGroup>
                          <Label htmlFor="validationCustom04">Coupon Applied</Label>
                          <Input
                            name="couponApplied"
                            placeholder="Coupon Applied"
                            type="text"
                            className="form-control"
                            id="couponApplied"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.couponApplied || ""}
                            invalid={validation.touched.couponApplied && validation.errors.couponApplied ? true : false}
                            disabled

                          />
                          {validation.touched.couponApplied && validation.errors.couponApplied ? (
                            <FormFeedback type="invalid">{validation.errors.couponApplied}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col> */}
                      <Col md="6">
                        <FormGroup>
                          <Label htmlFor="validationCustom05">Amount Paid</Label>
                          <Input
                            name="amountPaid"
                            type="number"
                            placeholder="Amount Paid"
                            className="form-control"
                            id="amountPaid"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.amountPaid || ""}
                            invalid={validation.touched.amountPaid && validation.errors.amountPaid ? true : false}
                            disabled

                          />
                          {validation.touched.amountPaid && validation.errors.amountPaid ? (
                            <FormFeedback type="invalid">{validation.errors.amountPaid}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCollege">Balance Amount</Label>
                          <Input
                            type="text"
                            placeholder="Balance Amount"
                            name="balanceAmount"
                            className="form-control"
                            id="balanceAmount"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.remainAmount || ""}
                            invalid={validation.touched.remainAmount && Boolean(validation.errors.remainAmount)}
                          />
                          {validation.touched.remainAmount && validation.errors.remainAmount ? (
                            <FormFeedback type="invalid">{validation.errors.remainAmount}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCollege">Payment Amount</Label>
                          <Input
                            type="text"
                            placeholder="Payment Amount"
                            name="paymentAmount"
                            className="form-control"
                            id="paymentAmount"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.paymentAmount || ""}
                            invalid={validation.touched.paymentAmount && Boolean(validation.errors.paymentAmount)}
                          />
                          {validation.touched.paymentAmount && validation.errors.paymentAmount ? (
                            <FormFeedback type="invalid">{validation.errors.paymentAmount}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      
                    </Row>

                    <Button color="primary" type="submit">
                      Complete Payment
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

export default BalancePayments;
