// // import React, { useState, useEffect } from 'react';
// // import { Col, Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Form } from 'reactstrap';
// // // import Breadcrumbs from '../../components/Common/Breadcrumb';
// // import Breadcrumbs from '../../../components/Common/Breadcrumb';
// // import DataTable from 'react-data-table-component';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { result } from 'lodash';

// // const validationSchema = Yup.object({
// //     sno: Yup.number().required("S.No is required"),
// //     departmentName: Yup.string().required("Department is required"),
// //     eventName: Yup.string().required("Event Name is required"),
// //     price: Yup.string().required("Price is required"),
// //     overview: Yup.string().required("Overview is required"),
// //     maxTeamSize: Yup.number().required("Team Size is required"),
// //     eventVenue: Yup.string().required("Venue is required"),
// //     regulations: Yup.array().of(Yup.string().required("Each regulation is required")).min(1, "At least one regulation is required"),
// // });

// // const EditEventForm = ({ isOpen, toggle, initialData, onSubmit, Invokeing }) => {
// //     const BaseUrl = process.env.REACT_APP_BASEURL;
// //     // console.log(initialData);
// //     const [isToggled, setIsToggled] = useState("false");
// //     const [boo, setboo] = useState(false);
// //     const [image1, setImage1] = useState(null);
// //     const [selectEventCatOption, setSelectEventCatOption] = useState({});
// //     const [selectEventSubCatOption, setSelectSubEventCatOption] = useState({});
// //     const [selectedEventCatOption, setSelectedEventCatOption] = useState('');
// //     const [selectedEventsubCatOption, setSelectedEventSubCatOption] = useState('');
// //     const [btndisable, setBtnDisable] = useState(false);

// //     // console.log(Invokeing)
// //     useEffect(() => {
// //         if (initialData && initialData.isAllowDivision !== undefined) {
// //             setIsToggled(initialData.isAllowDivision);
// //         }
// //         if (initialData && initialData.eventCatagoryName !== undefined) {
// //             setSelectedEventCatOption(initialData.eventCatagoryName);
// //         }
// //         if (initialData && initialData.eventSubCatName !== undefined) {
// //             console.log(initialData.eventSubCatName);
// //             setSelectedEventSubCatOption(initialData.eventSubCatName);
// //         }
// //     }, [initialData]);
// //     // useEffect(() => {
// //     //     (async () => {
// //     //         const Result = await axios.get(BaseUrl + "/api/get-eventCatagory-data");
// //     //         // console.log(result.data);
// //     //         const groupedEvents = Result.reduce((acc, current) => {
// //     //             // If the department does not exist in the accumulator, create an entry
// //     //             if (!acc[current.eventCatagoryName]) {
// //     //                 acc[current.eventCatagoryName] = [];
// //     //             }
// //     //             // Add the event to the department's array
// //     //             acc[current.eventCatagoryName].push(current.eventCatagoryName);

// //     //             return acc;
// //     //         }, {});
// //     //         setSelectEventCatOption(groupedEvents)
// //     //         // console.log(groupedEvents);
// //     //     })();
// //     // }, [boo])

// //     // useEffect(() => {
// //     //     console.log('getting');
// //     //     const fetchEventCategories = async () => {
// //     //         console.log('datafetching')
// //     //         try {
// //     //             const Result = await axios.get(BaseUrl + `/api/get-eventCatagory-byCatname/${initialData.eventCatagoryName}`);
// //     //             console.log(Result);
// //     //             // Ensure Result is an array (adjust logic based on API response)
// //     //             const groupedEvents = Result.reduce((acc, current) => {
// //     //                 // If the department does not exist in the accumulator, create an entry
// //     //                 if (!acc[current.eventSubCatName]) {
// //     //                     acc[current.eventSubCatName] = [];
// //     //                 }
// //     //                 // Add the event to the department's array
// //     //                 acc[current.eventSubCatName].push(current.eventSubCatName);

// //     //                 return acc;
// //     //             }, {});
// //     //             setSelectSubEventCatOption(groupedEvents)
// //     //             console.log(groupedEvents);
// //     //         } catch (error) {
// //     //             console.error("Error fetching event categories:", error);
// //     //         }
// //     //     };
// //     //     fetchEventCategories(); // Call the async function
// //     // }, [initialData]);


// //     const handleSelectCatName = async (e) => {
// //         const { value } = e.target;
// //         console.log(value);
// //         setSelectedEventSubCatOption('');
// //         const Result = await axios.get(BaseUrl + `/api/get-eventCatagory-byCatname/${value}`);
// //         console.log(Result);
// //         const groupedEvents = Result.reduce((acc, current) => {
// //             // If the department does not exist in the accumulator, create an entry
// //             if (!acc[current.eventSubCatName]) {
// //                 acc[current.eventSubCatName] = [];
// //             }
// //             // Add the event to the department's array
// //             acc[current.eventSubCatName].push(current.eventSubCatName);

// //             return acc;
// //         }, {});
// //         setSelectSubEventCatOption(groupedEvents)
// //         console.log(groupedEvents);
// //         setSelectedEventCatOption(value); // Update the hook with the selected value
// //         // validation.handleChange(e);
// //     };


// //     // useEffect(() => {
// //     //     (async () => {
// //     //         const Result = await axios.get(BaseUrl + "/api/get-eventSubCatagory-data");
// //     //         // console.log(result.data);
// //     //         const groupedEvents = Result.reduce((acc, current) => {
// //     //             // If the department does not exist in the accumulator, create an entry
// //     //             if (!acc[current.eventSubCatName]) {
// //     //                 acc[current.eventSubCatName] = [];
// //     //             }
// //     //             // Add the event to the department's array
// //     //             acc[current.eventSubCatName].push(current.eventSubCatName);

// //     //             return acc;
// //     //         }, {});
// //     //         setSubcatOptions(groupedEvents)
// //     //         // console.log(groupedEvents);
// //     //     })();
// //     // }, [boo])

// //     const formik = useFormik({
// //         initialValues: {
// //             event_id: '',
// //             eventCatagoryName: "",
// //             eventSubCatName: "",
// //             eventName: "",
// //             eventImage: null,
// //             eventType: "",
// //             price: "",
// //             overview: "",
// //             divisions: [""],
// //             maxdivparticepants: "",
// //             regulations: [""],
// //             maxTeamSize: "",
// //             minTeamSize: "",
// //             venue: "",
// //             department: "",
// //             isAllowDivision: ""
// //         },
// //         validationSchema,
// //         enableReinitialize: true,
// //         onSubmit: async (values) => {
// //             // alert('test')
// //             Object.keys(values).forEach((key) => {
// //                 console.log(`${key}: ${values[key]}` + "<br>");
// //             });
// //             // const formData = new FormData();
// //             // // Append each field to formData
// //             // formData.append('sno', values.sno);
// //             // formData.append('eventCatagoryName', values.eventCatagoryName);
// //             // formData.append('eventSubCatName', values.eventSubCatName);
// //             // formData.append('eventName', values.eventName);
// //             // formData.append('eventImage', values.eventImage); // Handles the file if eventImage is a File or Blob
// //             // formData.append('eventType', values.eventType);
// //             // formData.append('price', values.price);
// //             // formData.append('overview', values.overview);

// //             // // For arrays, append each value separately
// //             // values.divisions.forEach((division, index) => {
// //             //     formData.append(`divisions[${index}]`, division);
// //             // });

// //             // formData.append('maxdivparticepants', values.maxdivparticepants);

// //             // // Similarly for regulations array
// //             // values.regulations.forEach((regulation, index) => {
// //             //     formData.append(`regulations[${index}]`, regulation);
// //             // });

// //             // formData.append('maxTeamSize', values.maxTeamSize);
// //             // formData.append('minTeamSize', values.minTeamSize);
// //             // formData.append('venue', values.venue);
// //             // formData.append('department', values.department);
// //             // formData.append('isAllowDivision', values.isAllowDivision);

// //             // if (image1) formData.append('eventImage', image1);

// //             // try {
// //             //     await axios.put(`${BaseUrl}/api/editing-event-by`, formData, {
// //             //         headers: {
// //             //             'Content-Type': 'multipart/form-data'
// //             //         }
// //             //     });
// //             //     toast.success('event Updated Successfully!', {
// //             //         position: "top-right",
// //             //         autoClose: 5000,
// //             //         hideProgressBar: false,
// //             //         closeOnClick: true,
// //             //         pauseOnHover: true,
// //             //         draggable: true,
// //             //         progress: undefined,
// //             //         theme: "light",
// //             //     });
// //             //     setTimeout(() => {
// //             //         window.location.reload()
// //             //         toggle(); // Close the modal
// //             //     }, 2500);
// //             //     if (onSubmit) onSubmit(); // Trigger any additional action if needed
// //             // } catch (error) {
// //             //     toast.error('Error Occured!', {
// //             //         position: "top-right",
// //             //         autoClose: 5000,
// //             //         hideProgressBar: false,
// //             //         closeOnClick: true,
// //             //         pauseOnHover: true,
// //             //         draggable: true,
// //             //         progress: undefined,
// //             //         theme: "light",
// //             //     });
// //             // }
// //             onSubmit(values);
// //         },
// //     });

// //     useEffect(() => {
// //         console.log(isToggled);
// //         if (initialData) {
// //             formik.setValues({
// //                 event_id: initialData._id,
// //                 sno: initialData.sno || '',
// //                 eventCatagoryName: "",
// //                 eventSubCatName: initialData.eventSubCatName || "",
// //                 eventName: initialData.eventName || "",
// //                 eventImage: null,
// //                 eventType: initialData.eventType || "",
// //                 departmentName: initialData.departmentName || "",
// //                 price: initialData.price || "",
// //                 overview: initialData.overview || "",
// //                 maxTeamSize: initialData.maxTeamSize || "",
// //                 minTeamSize: initialData.minTeamSize || "",
// //                 isAllowDivision: isToggled || "",
// //                 maxdivparticepants: initialData.maxdivparticepants || "",
// //                 divisions: initialData.divisions || [""],
// //                 regulations: initialData.regulations || [""],
// //                 venue: initialData.venue || "",
// //                 _id: initialData._id
// //             });
// //         }
// //     }, [initialData, isToggled]);

// //     const handleImageChange1 = (e) => {
// //         setImage1(e.target.files[0]);
// //         console.log(e.target.files[0]);
// //     };

// //     const getImageSrc = (fileName) => {
// //         console.log(initialData);
// //         console.log(fileName);
// //         return fileName ? `${BaseUrl}/public/event_images/${fileName}` : "https://info.aec.edu.in/AEC/StudentPhotos/22A91A61E5.jpg";
// //     };

// //     const Updatedata = async () => {
// //         setBtnDisable(true);
// //         console.log(formik.values);
// //         const formData = new FormData();
// //         // Append each field to formData
// //         formData.append('event_id', formik.values._id);
// //         formData.append('eventCatagoryName', selectedEventCatOption);
// //         formData.append('eventSubCatName', selectedEventsubCatOption);
// //         formData.append('eventName', formik.values.eventName);
// //         formData.append('eventType', formik.values.eventType);
// //         formData.append('price', formik.values.price);
// //         formData.append('overview', formik.values.overview);

// //         // For arrays, append each value separately
// //         formik.values.divisions.forEach((division, index) => {
// //             formData.append(`divisions[${index}]`, division);
// //         });

// //         formData.append('maxdivparticepants', formik.values.maxdivparticepants);

// //         // Similarly for regulations array
// //         formik.values.regulations.forEach((regulation, index) => {
// //             formData.append(`regulations[${index}]`, regulation);
// //         });

// //         formData.append('maxTeamSize', formik.values.maxTeamSize);
// //         formData.append('minTeamSize', formik.values.minTeamSize);
// //         formData.append('venue', formik.values.venue);
// //         formData.append('department', formik.values.department);
// //         formData.append('isAllowDivision', formik.values.isAllowDivision);
// //         console.log(image1);
// //         if (image1) formData.append('eventImage', image1);

// //         try {
// //             await axios.put(`${BaseUrl}/api/editing-event-by`, formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data'
// //                 }
// //             });
// //             toast.success('event Updated Successfully!', {
// //                 position: "top-right",
// //                 autoClose: 5000,
// //                 hideProgressBar: false,
// //                 closeOnClick: true,
// //                 pauseOnHover: true,
// //                 draggable: true,
// //                 progress: undefined,
// //                 theme: "light",
// //             });
// //             setTimeout(() => {
// //                 window.location.reload()
// //                 toggle(); // Close the modal
// //             }, 2500);
// //             if (onSubmit) onSubmit(); // Trigger any additional action if needed
// //         } catch (error) {
// //             toast.error('Error Occured!', {
// //                 position: "top-right",
// //                 autoClose: 5000,
// //                 hideProgressBar: false,
// //                 closeOnClick: true,
// //                 pauseOnHover: true,
// //                 draggable: true,
// //                 progress: undefined,
// //                 theme: "light",
// //             });
// //         }

// //     }
// //     const handleToggle = () => {
// //         console.log('testing');
// //         setIsToggled((prevState) => {
// //             return prevState === 'true' ? 'false' : 'true';
// //         });
// //     };


// //     // const eventOptions1 = {
// //     //     Digi: [
// //     //         'Web Diseno',
// //     //         'Tech Talk',
// //     //         'Project Presentation',
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Code Reto',
// //     //         'Digiquizzer'
// //     //     ],
// //     //     Electrendz: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Project Expo',
// //     //         'Electrical Quiz -test Your Mind Power',
// //     //         'Electric Cross Word',
// //     //         'Just A Minute (JAM)',
// //     //         'Technical Treasure Hunt'
// //     //     ],
// //     //     Ignite: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Project Presentation',
// //     //         'Contraptions',
// //     //         'Water rocket',
// //     //         'Engine Assembly and Disassembly',
// //     //         'Robo Race',
// //     //         'Technical Quiz',
// //     //         'Popsicle Bridge',
// //     //         'JAM'
// //     //     ],
// //     //     Spark: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Technical Quiz',
// //     //         'Technical Treasure Hunt',
// //     //         'Technical Dumb Charades',
// //     //         'Circuit Debugging',
// //     //         'ECE Expo',
// //     //         'Tpeg (Technical photography from E-garbage)',
// //     //         'Technical Video Presentation',
// //     //         'Project Presentation'
// //     //     ],
// //     //     Petrospirit: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Project Presentation',
// //     //         'Logo Identification'
// //     //     ],
// //     //     Krishi: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Project Presentation',
// //     //         'Food and Agriculture Scavenger Hunt',
// //     //         'Technical Quiz'
// //     //     ],
// //     //     Opus: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Technical Treasure Hunt',
// //     //         'Cadingo',
// //     //         'Bridge Design',
// //     //         'Levitate',
// //     //         'Project Expo',
// //     //         'Technical Quiz'
// //     //     ],
// //     //     Excavation: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Model Presentation',
// //     //         'Technical Essay'
// //     //     ],
// //     //     Viveka: [
// //     //         'Poster Presentation',
// //     //         'Paper Presentation',
// //     //         'Ai Mastery Quiz',
// //     //         'Project/Product Presentation',
// //     //         'Coding Contest',
// //     //         'Aideathon',
// //     //         'Gaming Zone',
// //     //         'Tech Treasure Hunt(Have Some Fun)'
// //     //     ]
// //     // };

// //     return (
// //         <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
// //             <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Event</ModalHeader>
// //             <Form onSubmit={formik.handleSubmit} className="tablelist-form">
// //                 <ModalBody>
// //                     <div style={{ padding: "0px 10px" }}>
// //                         <Row>
// //                             <Col lg="6" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
// //                                 <label>Event Image:</label>
// //                                 <div className='mb-3' style={{ display: "flex", justifyContent: "center", width: "100%", height: "170px" }}>
// //                                     <div style={{ height: "170px", width: "170px", position: "relative" }}>
// //                                         <img
// //                                             style={{ cursor: 'pointer', height: "170px", width: "165px", borderRadius: "50%" }}
// //                                             src={image1 ? URL.createObjectURL(image1) : getImageSrc(initialData?.eventImage)}
// //                                             alt="Event Image"
// //                                         />
// //                                     </div>
// //                                     <input
// //                                         style={{ opacity: 0, position: "absolute", top: "3%", height: "150px", width: "150px", cursor: "pointer" }}
// //                                         type="file"
// //                                         name="eventSubCatImage"
// //                                         onChange={handleImageChange1}
// //                                     />
// //                                 </div>
// //                             </Col>
// //                         </Row>
// //                         <Row>
// //                             <Col lg="6" className="mb-3">
// //                                 <label htmlFor="eventCatagoryName">Select Event Catagory Name:</label>
// //                                 <select
// //                                     id="eventCatagoryName"
// //                                     name="eventCatagoryName"
// //                                     value={selectedEventCatOption}
// //                                     onChange={handleSelectCatName}
// //                                     onBlur={formik.handleBlur}
// //                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                     className={`form-select ${formik.errors.eventCatagoryName && formik.touched.eventCatagoryName ? 'is-invalid' : ''}`}
// //                                 >
// //                                     <option value="">Select Event Catagory</option>
// //                                     {Object.keys(selectEventCatOption).map((dept) => (
// //                                         <option key={dept} value={dept}>
// //                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                                 {formik.errors.eventCatagoryName && formik.touched.eventCatagoryName && (
// //                                     <div className="invalid-feedback">{formik.errors.eventCatagoryName}</div>
// //                                 )}
// //                             </Col>
// //                             {/* {console.log(isToggled)} */}
// //                             <Col lg="6" className="mb-3">
// //                                 <label htmlFor="eventSubCatName">Select Event Sub Catagory Name:</label>
// //                                 <select
// //                                     id="eventSubCatName"
// //                                     name="eventSubCatName"
// //                                     value={selectedEventsubCatOption}
// //                                     onChange={(e) => setSelectedEventSubCatOption(e.target.value)}
// //                                     onBlur={formik.handleBlur}
// //                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                     className={`form-select ${formik.errors.eventSubCatName && formik.touched.eventSubCatName ? 'is-invalid' : ''}`}
// //                                 >
// //                                     <option value="">Select Event Catagory</option>
// //                                     {Object.keys(selectEventSubCatOption).map((dept) => (
// //                                         <option key={dept} value={dept}>
// //                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                                 {formik.errors.eventSubCatName && formik.touched.eventSubCatName && (
// //                                     <div className="invalid-feedback">{formik.errors.eventSubCatName}</div>
// //                                 )}
// //                             </Col>
// //                             {/* <Col lg="6" className="mb-3">
// //                                 <label htmlFor="eventSubCatName">Select Event Sub Catagory Name:</label>
// //                                 <select
// //                                     id="eventSubCatName"
// //                                     name="eventSubCatName"
// //                                     value={selectedEventsubCatOption}
// //                                     onChange={(e) => {setSelectedEventSubCatOption(e.target.value)}}
// //                                     onBlur={formik.handleBlur}
// //                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                     className={`form-select ${formik.errors.eventSubCatName && formik.touched.eventSubCatName ? 'is-invalid' : ''}`}
// //                                 >
// //                                     <option value="">Select Event Sub Catagory</option>
// //                                     {Object.keys(selectEventSubCatOption).map((dept) => (
// //                                         <option key={dept} value={dept}>
// //                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                                 {formik.errors.eventSubCatName && formik.touched.eventSubCatName && (
// //                                     <div className="invalid-feedback">{formik.errors.eventSubCatName}</div>
// //                                 )}
// //                             </Col> */}

// //                             {/* <Col lg="6" className="mb-3">
// //                                 <label htmlFor="eventName">Select Event:</label>
// //                                 <select
// //                                     id="eventName"
// //                                     name="eventName"
// //                                     value={formik.values.eventName}
// //                                     onChange={formik.handleChange}
// //                                     onBlur={formik.handleBlur}
// //                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                     className={`form-select ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
// //                                 >
// //                                     <option value="">Select Event</option>
// //                                     {formik.values.departmentName && eventOptions[formik.values.departmentName].map((event, index) => (
// //                                         <option key={index} value={event}>
// //                                             {event}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                                 {formik.errors.eventName && formik.touched.eventName && (
// //                                     <div className="invalid-feedback">{formik.errors.eventName}</div>
// //                                 )}
// //                             </Col> */}

// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="eventName">Event Name</label>
// //                                     <input
// //                                         type="text"
// //                                         id="eventName"
// //                                         name="eventName"
// //                                         value={formik.values.eventName}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.eventName && formik.touched.eventName && (
// //                                         <div className="invalid-feedback">{formik.errors.eventName}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>
// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="eventType">Event Type</label>
// //                                     <input
// //                                         type="text"
// //                                         id="eventType"
// //                                         name="eventType"
// //                                         value={formik.values.eventType}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.eventType && formik.touched.eventType ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.eventType && formik.touched.eventType && (
// //                                         <div className="invalid-feedback">{formik.errors.eventType}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>

// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="price">Registration Fee</label>
// //                                     <input
// //                                         type="number"
// //                                         id="price"
// //                                         name="price"
// //                                         value={formik.values.price}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.price && formik.touched.price ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.price && formik.touched.price && (
// //                                         <div className="invalid-feedback">{formik.errors.price}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>

// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="maxTeamSize">Max Team Size</label>
// //                                     <input
// //                                         type="number"
// //                                         id="maxTeamSize"
// //                                         name="maxTeamSize"
// //                                         value={formik.values.maxTeamSize}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.maxTeamSize && formik.touched.maxTeamSize ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.maxTeamSize && formik.touched.maxTeamSize && (
// //                                         <div className="invalid-feedback">{formik.errors.maxTeamSize}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>
// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="maxTeamSize">Min Team Size</label>
// //                                     <input
// //                                         type="number"
// //                                         id="minTeamSize"
// //                                         name="minTeamSize"
// //                                         value={formik.values.minTeamSize}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.minTeamSize && formik.touched.minTeamSize ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.minTeamSize && formik.touched.minTeamSize && (
// //                                         <div className="invalid-feedback">{formik.errors.minTeamSize}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>
// //                             {/* <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="extraTeamSize">Extra Team Members</label>
// //                                     <input
// //                                         type="number"
// //                                         id="extraTeamSize"
// //                                         name="extraTeamSize"
// //                                         value={formik.values.extraTeamSize}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.extraTeamSize && formik.touched.extraTeamSize ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.extraTeamSize && formik.touched.extraTeamSize && (
// //                                         <div className="invalid-feedback">{formik.errors.extraTeamSize}</div>
// //                                     )}
// //                                 </div>
// //                             </Col>
// //                             <Col lg="6">
// //                                 <div className="mb-3">
// //                                     <label htmlFor="extraAmountPerHead">Extra Amount Per Head</label>
// //                                     <input
// //                                         type="number"
// //                                         id="extraAmountPerHead"
// //                                         name="extraAmountPerHead"
// //                                         value={formik.values.extraAmountPerHead}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control ${formik.errors.extraAmountPerHead && formik.touched.extraAmountPerHead ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.errors.extraAmountPerHead && formik.touched.extraAmountPerHead && (
// //                                         <div className="invalid-feedback">{formik.errors.extraAmountPerHead}</div>
// //                                     )}
// //                                 </div>
// //                             </Col> */}
// //                         </Row>

// //                         <div className="mb-3">
// //                             <label htmlFor="eventOverview">Overview:</label>
// //                             <textarea
// //                                 id="overview"
// //                                 name="overview"
// //                                 value={formik.values.overview}
// //                                 onChange={formik.handleChange}
// //                                 onBlur={formik.handleBlur}
// //                                 style={{ border: "1px solid black", color: "black", fontWeight: 500, minHeight: '100px' }}
// //                                 className={`form-control ${formik.errors.overview && formik.touched.overview ? 'is-invalid' : ''}`}
// //                             />
// //                             {formik.errors.overview && formik.touched.overview && (
// //                                 <div className="invalid-feedback">{formik.errors.overview}</div>
// //                             )}
// //                         </div>
// //                         <div className="mb-3">
// //                             <label>Rules:</label>
// //                             {formik.values.regulations.map((regulation, index) => (
// //                                 <div key={index} className="d-flex mb-2 align-items-center">
// //                                     <input
// //                                         type="text"
// //                                         name={`regulations[${index}]`}
// //                                         value={regulation}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control me-2 ${formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.values.regulations.length > 1 && (
// //                                         <Button
// //                                             type="button"
// //                                             color="danger"
// //                                             onClick={() => {
// //                                                 const updatedRules = [...formik.values.regulations];
// //                                                 updatedRules.splice(index, 1);
// //                                                 formik.setFieldValue('regulations', updatedRules);
// //                                             }}
// //                                         >
// //                                             Remove
// //                                         </Button>
// //                                     )}
// //                                     {formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] && (
// //                                         <div className="invalid-feedback">{formik.errors.regulations[index]}</div>
// //                                     )}
// //                                 </div>
// //                             ))}
// //                             <Button
// //                                 type="button"
// //                                 color="primary"
// //                                 onClick={() =>
// //                                     formik.setFieldValue('regulations', [...formik.values.regulations, ''])
// //                                 }
// //                             >
// //                                 Add Regulation
// //                             </Button>
// //                         </div>

// //                         <div className="mb-3">
// //                             <label htmlFor="eventVenue">Venue</label>
// //                             <input
// //                                 type="text"
// //                                 id="venue"
// //                                 name="venue"
// //                                 value={formik.values.venue}
// //                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                 onChange={formik.handleChange}
// //                                 onBlur={formik.handleBlur}
// //                                 className={`form-control ${formik.errors.venue && formik.touched.venue ? 'is-invalid' : ''}`}
// //                             />
// //                             {formik.errors.venue && formik.touched.venue && (
// //                                 <div className="invalid-feedback">{formik.errors.venue}</div>
// //                             )}
// //                         </div>
// //                         <Row>
// //                             <Col md="6">
// //                                 <label htmlFor="AllowVisible">
// //                                     Allow Visible
// //                                 </label><br></br>
// //                                 {
// //                                     initialData && (
// //                                         <Button
// //                                             className={`btn ${isToggled === 'true' ? "btn-danger" : "btn-success"}`}
// //                                             onClick={handleToggle}
// //                                         >
// //                                             {isToggled === 'true' ? "Off Divisions" : "Add Divisions"}
// //                                         </Button>
// //                                     )
// //                                 }

// //                             </Col>
// //                         </Row>
// //                         <br></br>
// //                         { isToggled === "true" && (<div>
// //                         <Col lg="6">
// //                             <div className="mb-3">
// //                                 <label htmlFor="maxTeamSize">Max Div Particepants</label>
// //                                 <input
// //                                     type="number"
// //                                     id="maxdivparticepants"
// //                                     name="maxdivparticepants"
// //                                     value={formik.values.maxdivparticepants}
// //                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                     onChange={formik.handleChange}
// //                                     onBlur={formik.handleBlur}
// //                                     className={`form-control ${formik.errors.maxdivparticepants && formik.touched.maxdivparticepants ? 'is-invalid' : ''}`}
// //                                 />
// //                                 {formik.errors.maxdivparticepants && formik.touched.maxdivparticepants && (
// //                                     <div className="invalid-feedback">{formik.errors.maxdivparticepants}</div>
// //                                 )}
// //                             </div>
// //                         </Col>

// //                         <div className="mb-3">
// //                             <label>Divisions:</label>
// //                             {formik.values.divisions.map((regulation, index) => (
// //                                 <div key={index} className="d-flex mb-2 align-items-center">
// //                                     <input
// //                                         type="text"
// //                                         name={`divisions[${index}]`}
// //                                         value={regulation}
// //                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
// //                                         onChange={formik.handleChange}
// //                                         onBlur={formik.handleBlur}
// //                                         className={`form-control me-2 ${formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] ? 'is-invalid' : ''}`}
// //                                     />
// //                                     {formik.values.divisions.length > 1 && (
// //                                         <Button
// //                                             type="button"
// //                                             color="danger"
// //                                             onClick={() => {
// //                                                 const updatedRules = [...formik.values.divisions];
// //                                                 updatedRules.splice(index, 1);
// //                                                 formik.setFieldValue('divisions', updatedRules);
// //                                             }}
// //                                         >
// //                                             Remove
// //                                         </Button>
// //                                     )}
// //                                     {formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] && (
// //                                         <div className="invalid-feedback">{formik.errors.divisions[index]}</div>
// //                                     )}
// //                                 </div>
// //                             ))}
// //                             <Button
// //                                 type="button"
// //                                 color="primary"
// //                                 onClick={() =>
// //                                     formik.setFieldValue('divisions', [...formik.values.divisions, ''])
// //                                 }
// //                             >
// //                                 Add Division
// //                             </Button>
// //                         </div>
// //                         </div>)}
// //                     </div>
// //                 </ModalBody>
// //                 <ModalFooter>
// //                     <Button type="button" color="light" onClick={toggle}>Cancel</Button>
// //                     <Button type="submit" color="primary" onClick={Updatedata} disabled={btndisable}>Save Changes</Button>
// //                 </ModalFooter>
// //                 <ToastContainer />
// //             </Form>
// //         </Modal>
// //     );
// // };

// // export default EditEventForm;





// import React, { useState, useEffect } from 'react';
// import { Col, Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Form } from 'reactstrap';
// // import Breadcrumbs from '../../components/Common/Breadcrumb';
// import Breadcrumbs from '../../../components/Common/Breadcrumb';
// import DataTable from 'react-data-table-component';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { result } from 'lodash';

// const validationSchema = Yup.object({
//     sno: Yup.number().required("S.No is required"),
//     departmentName: Yup.string().required("Department is required"),
//     eventName: Yup.string().required("Event Name is required"),
//     price: Yup.string().required("Price is required"),
//     overview: Yup.string().required("Overview is required"),
//     maxTeamSize: Yup.number().required("Team Size is required"),
//     eventVenue: Yup.string().required("Venue is required"),
//     regulations: Yup.array().of(Yup.string().required("Each regulation is required")).min(1, "At least one regulation is required"),
// });

// const EditEventForm = ({ isOpen, toggle, initialData, onSubmit, Invokeing }) => {
//     const BaseUrl = process.env.REACT_APP_BASEURL;
//     // console.log(initialData);
//     const [isToggled, setIsToggled] = useState("false");
//     const [boo, setboo] = useState(false);
//     const [image1, setImage1] = useState(null);
//     const [selectEventCatOption, setSelectEventCatOption] = useState({});
//     const [selectEventSubCatOption, setSelectSubEventCatOption] = useState({});
//     const [selectedEventCatOption, setSelectedEventCatOption] = useState('');
//     const [selectedEventsubCatOption, setSelectedEventSubCatOption] = useState('');
//     const [btndisable, setBtnDisable] = useState(false);

//     // console.log(Invokeing)
//     useEffect(() => {
//         if (initialData && initialData.isAllowDivision !== undefined) {
//             setIsToggled(initialData.isAllowDivision);
//         }
//         if (initialData && initialData.eventCatagoryName !== undefined) {
//             setSelectedEventCatOption(initialData.eventCatagoryName);
//         }
//         if (initialData && initialData.eventSubCatName !== undefined) {
//             console.log(initialData.eventSubCatName);
//             setSelectedEventSubCatOption(initialData.eventSubCatName);
//         }
//     }, [initialData]);


//     const handleSelectCatName = async (e) => {
//         const { value } = e.target;
//         console.log(value);
//         setSelectedEventSubCatOption('');
//         const Result = await axios.get(BaseUrl + `/api/get-eventCatagory-byCatname/${value}`);
//         console.log(Result);
//         const groupedEvents = Result.reduce((acc, current) => {
//             // If the department does not exist in the accumulator, create an entry
//             if (!acc[current.eventSubCatName]) {
//                 acc[current.eventSubCatName] = [];
//             }
//             // Add the event to the department's array
//             acc[current.eventSubCatName].push(current.eventSubCatName);

//             return acc;
//         }, {});
//         setSelectSubEventCatOption(groupedEvents)
//         console.log(groupedEvents);
//         setSelectedEventCatOption(value); // Update the hook with the selected value
//         // validation.handleChange(e);
//     };



//     const formik = useFormik({
//         initialValues: {
//             event_id: '',
//             eventCatagoryName: "",
//             eventSubCatName: "",
//             eventName: "",
//             eventImage: null,
//             eventType: "",
//             price: "",
//             overview: "",
//             divisions: [""],
//             maxdivparticepants: "",
//             regulations: [""],
//             maxTeamSize: "",
//             minTeamSize: "",
//             venue: "",
//             department: "",
//             isAllowDivision: ""
//         },
//         validationSchema,
//         enableReinitialize: true,
//         onSubmit: async (values) => {
//             // alert('test')
//             Object.keys(values).forEach((key) => {
//                 console.log(`${key}: ${values[key]}` + "<br>");
//             });

//             onSubmit(values);
//         },
//     });

//     useEffect(() => {
//         console.log(isToggled);
//         if (initialData) {
//             formik.setValues({
//                 event_id: initialData._id,
//                 sno: initialData.sno || '',
//                 eventCatagoryName: "",
//                 eventSubCatName: initialData.eventSubCatName || "",
//                 eventName: initialData.eventName || "",
//                 eventImage: null,
//                 eventType: initialData.eventType || "",
//                 departmentName: initialData.departmentName || "",
//                 price: initialData.price || "",
//                 overview: initialData.overview || "",
//                 maxTeamSize: initialData.maxTeamSize || "",
//                 minTeamSize: initialData.minTeamSize || "",
//                 isAllowDivision: isToggled || "",
//                 maxdivparticepants: initialData.maxdivparticepants || "",
//                 divisions: initialData.divisions || [""],
//                 regulations: initialData.regulations || [""],
//                 venue: initialData.venue || "",
//                 _id: initialData._id
//             });
//         }
//     }, [initialData, isToggled]);

//     const handleImageChange1 = (e) => {
//         setImage1(e.target.files[0]);
//         console.log(e.target.files[0]);
//     };

//     const getImageSrc = (fileName) => {
//         console.log(initialData);
//         console.log(fileName);
//         return fileName ? `${BaseUrl}/public/event_images/${fileName}` : "https://info.aec.edu.in/AEC/StudentPhotos/22A91A61E5.jpg";
//     };

//     const Updatedata = async () => {
//         setBtnDisable(true);
//         console.log(formik.values);
//         const formData = new FormData();
//         // Append each field to formData
//         formData.append('event_id', formik.values._id);
//         formData.append('eventCatagoryName', selectedEventCatOption);
//         formData.append('eventSubCatName', selectedEventsubCatOption);
//         formData.append('eventName', formik.values.eventName);
//         formData.append('eventType', formik.values.eventType);
//         formData.append('price', formik.values.price);
//         formData.append('overview', formik.values.overview);

//         // For arrays, append each value separately
//         formik.values.divisions.forEach((division, index) => {
//             formData.append(`divisions[${index}]`, division);
//         });

//         formData.append('maxdivparticepants', formik.values.maxdivparticepants);

//         // Similarly for regulations array
//         formik.values.regulations.forEach((regulation, index) => {
//             formData.append(`regulations[${index}]`, regulation);
//         });

//         formData.append('maxTeamSize', formik.values.maxTeamSize);
//         formData.append('minTeamSize', formik.values.minTeamSize);
//         formData.append('venue', formik.values.venue);
//         formData.append('department', formik.values.department);
//         formData.append('isAllowDivision', formik.values.isAllowDivision);
//         console.log(image1);
//         if (image1) formData.append('eventImage', image1);

//         try {
//             await axios.put(`${BaseUrl}/api/editing-event-by`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             toast.success('event Updated Successfully!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//             setTimeout(() => {
//                 window.location.reload()
//                 toggle(); // Close the modal
//             }, 2500);
//             if (onSubmit) onSubmit(); // Trigger any additional action if needed
//         } catch (error) {
//             toast.error('Error Occured!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//         }

//     }
//     const handleToggle = () => {
//         console.log('testing');
//         setIsToggled((prevState) => {
//             return prevState === 'true' ? 'false' : 'true';
//         });
//     };


//     return (
//         <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
//             <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Event</ModalHeader>
//             <Form onSubmit={formik.handleSubmit} className="tablelist-form">
//                 <ModalBody>
//                     <div style={{ padding: "0px 10px" }}>
//                         <Row>
//                             <Col lg="6" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
//                                 <label>Event Image:</label>
//                                 <div className='mb-3' style={{ display: "flex", justifyContent: "center", width: "100%", height: "170px" }}>
//                                     <div style={{ height: "170px", width: "170px", position: "relative" }}>
//                                         <img
//                                             style={{ cursor: 'pointer', height: "170px", width: "165px", borderRadius: "50%" }}
//                                             src={image1 ? URL.createObjectURL(image1) : getImageSrc(initialData?.eventImage)}
//                                             alt="Event Image"
//                                         />
//                                     </div>
//                                     <input
//                                         style={{ opacity: 0, position: "absolute", top: "3%", height: "150px", width: "150px", cursor: "pointer" }}
//                                         type="file"
//                                         name="eventSubCatImage"
//                                         onChange={handleImageChange1}
//                                     />
//                                 </div>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventCatagoryName">Select Event Catagory Name:</label>
//                                 <select
//                                     id="eventCatagoryName"
//                                     name="eventCatagoryName"
//                                     value={selectedEventCatOption}
//                                     onChange={handleSelectCatName}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventCatagoryName && formik.touched.eventCatagoryName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event Catagory</option>
//                                     {Object.keys(selectEventCatOption).map((dept) => (
//                                         <option key={dept} value={dept}>
//                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventCatagoryName && formik.touched.eventCatagoryName && (
//                                     <div className="invalid-feedback">{formik.errors.eventCatagoryName}</div>
//                                 )}
//                             </Col>
//                             {/* {console.log(isToggled)} */}
//                             <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventSubCatName">Select Event Sub Catagory Name:</label>
//                                 <select
//                                     id="eventSubCatName"
//                                     name="eventSubCatName"
//                                     value={selectedEventsubCatOption}
//                                     onChange={(e) => setSelectedEventSubCatOption(e.target.value)}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventSubCatName && formik.touched.eventSubCatName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event Catagory</option>
//                                     {Object.keys(selectEventSubCatOption).map((dept) => (
//                                         <option key={dept} value={dept}>
//                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventSubCatName && formik.touched.eventSubCatName && (
//                                     <div className="invalid-feedback">{formik.errors.eventSubCatName}</div>
//                                 )}
//                             </Col>


//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="eventName">Event Name</label>
//                                     <input
//                                         type="text"
//                                         id="eventName"
//                                         name="eventName"
//                                         value={formik.values.eventName}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.eventName && formik.touched.eventName && (
//                                         <div className="invalid-feedback">{formik.errors.eventName}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="eventType">Event Type</label>
//                                     <input
//                                         type="text"
//                                         id="eventType"
//                                         name="eventType"
//                                         value={formik.values.eventType}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.eventType && formik.touched.eventType ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.eventType && formik.touched.eventType && (
//                                         <div className="invalid-feedback">{formik.errors.eventType}</div>
//                                     )}
//                                 </div>
//                             </Col>

//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="price">Registration Fee</label>
//                                     <input
//                                         type="number"
//                                         id="price"
//                                         name="price"
//                                         value={formik.values.price}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.price && formik.touched.price ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.price && formik.touched.price && (
//                                         <div className="invalid-feedback">{formik.errors.price}</div>
//                                     )}
//                                 </div>
//                             </Col>

//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="maxTeamSize">Max Team Size</label>
//                                     <input
//                                         type="number"
//                                         id="maxTeamSize"
//                                         name="maxTeamSize"
//                                         value={formik.values.maxTeamSize}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.maxTeamSize && formik.touched.maxTeamSize ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.maxTeamSize && formik.touched.maxTeamSize && (
//                                         <div className="invalid-feedback">{formik.errors.maxTeamSize}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="maxTeamSize">Min Team Size</label>
//                                     <input
//                                         type="number"
//                                         id="minTeamSize"
//                                         name="minTeamSize"
//                                         value={formik.values.minTeamSize}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.minTeamSize && formik.touched.minTeamSize ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.minTeamSize && formik.touched.minTeamSize && (
//                                         <div className="invalid-feedback">{formik.errors.minTeamSize}</div>
//                                     )}
//                                 </div>
//                             </Col>

//                         </Row>

//                         <div className="mb-3">
//                             <label htmlFor="eventOverview">Overview:</label>
//                             <textarea
//                                 id="overview"
//                                 name="overview"
//                                 value={formik.values.overview}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500, minHeight: '100px' }}
//                                 className={`form-control ${formik.errors.overview && formik.touched.overview ? 'is-invalid' : ''}`}
//                             />
//                             {formik.errors.overview && formik.touched.overview && (
//                                 <div className="invalid-feedback">{formik.errors.overview}</div>
//                             )}
//                         </div>
//                         <div className="mb-3">
//                             <label>Rules:</label>
//                             {formik.values.regulations.map((regulation, index) => (
//                                 <div key={index} className="d-flex mb-2 align-items-center">
//                                     <input
//                                         type="text"
//                                         name={`regulations[${index}]`}
//                                         value={regulation}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control me-2 ${formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.values.regulations.length > 1 && (
//                                         <Button
//                                             type="button"
//                                             color="danger"
//                                             onClick={() => {
//                                                 const updatedRules = [...formik.values.regulations];
//                                                 updatedRules.splice(index, 1);
//                                                 formik.setFieldValue('regulations', updatedRules);
//                                             }}
//                                         >
//                                             Remove
//                                         </Button>
//                                     )}
//                                     {formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] && (
//                                         <div className="invalid-feedback">{formik.errors.regulations[index]}</div>
//                                     )}
//                                 </div>
//                             ))}
//                             <Button
//                                 type="button"
//                                 color="primary"
//                                 onClick={() =>
//                                     formik.setFieldValue('regulations', [...formik.values.regulations, ''])
//                                 }
//                             >
//                                 Add Regulation
//                             </Button>
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="eventVenue">Venue</label>
//                             <input
//                                 type="text"
//                                 id="venue"
//                                 name="venue"
//                                 value={formik.values.venue}
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className={`form-control ${formik.errors.venue && formik.touched.venue ? 'is-invalid' : ''}`}
//                             />
//                             {formik.errors.venue && formik.touched.venue && (
//                                 <div className="invalid-feedback">{formik.errors.venue}</div>
//                             )}
//                         </div>
//                         <Row>
//                             <Col md="6">
//                                 <label htmlFor="AllowVisible">
//                                     Allow Visible
//                                 </label><br></br>
//                                 {
//                                     initialData && (
//                                         <Button
//                                             className={`btn ${isToggled === 'true' ? "btn-danger" : "btn-success"}`}
//                                             onClick={handleToggle}
//                                         >
//                                             {isToggled === 'true' ? "Off Divisions" : "Add Divisions"}
//                                         </Button>
//                                     )
//                                 }

//                             </Col>
//                         </Row>
//                         <br></br>
//                         { isToggled === "true" && (<div>
//                         <Col lg="6">
//                             <div className="mb-3">
//                                 <label htmlFor="maxTeamSize">Max Div Particepants</label>
//                                 <input
//                                     type="number"
//                                     id="maxdivparticepants"
//                                     name="maxdivparticepants"
//                                     value={formik.values.maxdivparticepants}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`form-control ${formik.errors.maxdivparticepants && formik.touched.maxdivparticepants ? 'is-invalid' : ''}`}
//                                 />
//                                 {formik.errors.maxdivparticepants && formik.touched.maxdivparticepants && (
//                                     <div className="invalid-feedback">{formik.errors.maxdivparticepants}</div>
//                                 )}
//                             </div>
//                         </Col>

//                         <div className="mb-3">
//                             <label>Divisions:</label>
//                             {formik.values.divisions.map((regulation, index) => (
//                                 <div key={index} className="d-flex mb-2 align-items-center">
//                                     <input
//                                         type="text"
//                                         name={`divisions[${index}]`}
//                                         value={regulation}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control me-2 ${formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.values.divisions.length > 1 && (
//                                         <Button
//                                             type="button"
//                                             color="danger"
//                                             onClick={() => {
//                                                 const updatedRules = [...formik.values.divisions];
//                                                 updatedRules.splice(index, 1);
//                                                 formik.setFieldValue('divisions', updatedRules);
//                                             }}
//                                         >
//                                             Remove
//                                         </Button>
//                                     )}
//                                     {formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] && (
//                                         <div className="invalid-feedback">{formik.errors.divisions[index]}</div>
//                                     )}
//                                 </div>
//                             ))}
//                             <Button
//                                 type="button"
//                                 color="primary"
//                                 onClick={() =>
//                                     formik.setFieldValue('divisions', [...formik.values.divisions, ''])
//                                 }
//                             >
//                                 Add Division
//                             </Button>
//                         </div>
//                         </div>)}
//                     </div>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button type="button" color="light" onClick={toggle}>Cancel</Button>
//                     <Button type="submit" color="primary" onClick={Updatedata} disabled={btndisable}>Save Changes</Button>
//                 </ModalFooter>
//                 <ToastContainer />
//             </Form>
//         </Modal>
//     );
// };

// export default EditEventForm;




// import React, { useState, useEffect } from 'react';
// import { Col, Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Form } from 'reactstrap';
// // import Breadcrumbs from '../../components/Common/Breadcrumb';
// import Breadcrumbs from '../../../components/Common/Breadcrumb';
// import DataTable from 'react-data-table-component';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { result } from 'lodash';

// const validationSchema = Yup.object({
//     sno: Yup.number().required("S.No is required"),
//     departmentName: Yup.string().required("Department is required"),
//     eventName: Yup.string().required("Event Name is required"),
//     price: Yup.string().required("Price is required"),
//     overview: Yup.string().required("Overview is required"),
//     maxTeamSize: Yup.number().required("Team Size is required"),
//     eventVenue: Yup.string().required("Venue is required"),
//     regulations: Yup.array().of(Yup.string().required("Each regulation is required")).min(1, "At least one regulation is required"),
// });

// const EditEventForm = ({ isOpen, toggle, initialData, onSubmit, Invokeing }) => {
//     const BaseUrl = process.env.REACT_APP_BASEURL;
//     // console.log(initialData);
//     const [isToggled, setIsToggled] = useState("false");
//     const [boo, setboo] = useState(false);
//     const [image1, setImage1] = useState(null);
//     const [selectEventCatOption, setSelectEventCatOption] = useState({});
//     const [selectEventSubCatOption, setSelectSubEventCatOption] = useState({});
//     const [selectedEventCatOption, setSelectedEventCatOption] = useState('');
//     const [selectedEventsubCatOption, setSelectedEventSubCatOption] = useState('');
//     const [btndisable, setBtnDisable] = useState(false);

//     // console.log(Invokeing)
//     useEffect(() => {
//         if (initialData && initialData.isAllowDivision !== undefined) {
//             setIsToggled(initialData.isAllowDivision);
//         }
//         if (initialData && initialData.eventCatagoryName !== undefined) {
//             setSelectedEventCatOption(initialData.eventCatagoryName);
//         }
//         if (initialData && initialData.eventSubCatName !== undefined) {
//             console.log(initialData.eventSubCatName);
//             setSelectedEventSubCatOption(initialData.eventSubCatName);
//         }
//     }, [initialData]);
//     // useEffect(() => {
//     //     (async () => {
//     //         const Result = await axios.get(BaseUrl + "/api/get-eventCatagory-data");
//     //         // console.log(result.data);
//     //         const groupedEvents = Result.reduce((acc, current) => {
//     //             // If the department does not exist in the accumulator, create an entry
//     //             if (!acc[current.eventCatagoryName]) {
//     //                 acc[current.eventCatagoryName] = [];
//     //             }
//     //             // Add the event to the department's array
//     //             acc[current.eventCatagoryName].push(current.eventCatagoryName);

//     //             return acc;
//     //         }, {});
//     //         setSelectEventCatOption(groupedEvents)
//     //         // console.log(groupedEvents);
//     //     })();
//     // }, [boo])

//     // useEffect(() => {
//     //     console.log('getting');
//     //     const fetchEventCategories = async () => {
//     //         console.log('datafetching')
//     //         try {
//     //             const Result = await axios.get(BaseUrl + `/api/get-eventCatagory-byCatname/${initialData.eventCatagoryName}`);
//     //             console.log(Result);
//     //             // Ensure Result is an array (adjust logic based on API response)
//     //             const groupedEvents = Result.reduce((acc, current) => {
//     //                 // If the department does not exist in the accumulator, create an entry
//     //                 if (!acc[current.eventSubCatName]) {
//     //                     acc[current.eventSubCatName] = [];
//     //                 }
//     //                 // Add the event to the department's array
//     //                 acc[current.eventSubCatName].push(current.eventSubCatName);

//     //                 return acc;
//     //             }, {});
//     //             setSelectSubEventCatOption(groupedEvents)
//     //             console.log(groupedEvents);
//     //         } catch (error) {
//     //             console.error("Error fetching event categories:", error);
//     //         }
//     //     };
//     //     fetchEventCategories(); // Call the async function
//     // }, [initialData]);


//     const handleSelectCatName = async (e) => {
//         const { value } = e.target;
//         console.log(value);
//         setSelectedEventSubCatOption('');
//         const Result = await axios.get(BaseUrl + `/api/get-eventCatagory-byCatname/${value}`);
//         console.log(Result);
//         const groupedEvents = Result.reduce((acc, current) => {
//             // If the department does not exist in the accumulator, create an entry
//             if (!acc[current.eventSubCatName]) {
//                 acc[current.eventSubCatName] = [];
//             }
//             // Add the event to the department's array
//             acc[current.eventSubCatName].push(current.eventSubCatName);

//             return acc;
//         }, {});
//         setSelectSubEventCatOption(groupedEvents)
//         console.log(groupedEvents);
//         setSelectedEventCatOption(value); // Update the hook with the selected value
//         // validation.handleChange(e);
//     };


//     // useEffect(() => {
//     //     (async () => {
//     //         const Result = await axios.get(BaseUrl + "/api/get-eventSubCatagory-data");
//     //         // console.log(result.data);
//     //         const groupedEvents = Result.reduce((acc, current) => {
//     //             // If the department does not exist in the accumulator, create an entry
//     //             if (!acc[current.eventSubCatName]) {
//     //                 acc[current.eventSubCatName] = [];
//     //             }
//     //             // Add the event to the department's array
//     //             acc[current.eventSubCatName].push(current.eventSubCatName);

//     //             return acc;
//     //         }, {});
//     //         setSubcatOptions(groupedEvents)
//     //         // console.log(groupedEvents);
//     //     })();
//     // }, [boo])

//     const formik = useFormik({
//         initialValues: {
//             event_id: '',
//             eventCatagoryName: "",
//             eventSubCatName: "",
//             eventName: "",
//             eventImage: null,
//             eventType: "",
//             price: "",
//             overview: "",
//             divisions: [""],
//             maxdivparticepants: "",
//             regulations: [""],
//             maxTeamSize: "",
//             minTeamSize: "",
//             venue: "",
//             department: "",
//             isAllowDivision: ""
//         },
//         validationSchema,
//         enableReinitialize: true,
//         onSubmit: async (values) => {
//             // alert('test')
//             Object.keys(values).forEach((key) => {
//                 console.log(`${key}: ${values[key]}` + "<br>");
//             });
//             // const formData = new FormData();
//             // // Append each field to formData
//             // formData.append('sno', values.sno);
//             // formData.append('eventCatagoryName', values.eventCatagoryName);
//             // formData.append('eventSubCatName', values.eventSubCatName);
//             // formData.append('eventName', values.eventName);
//             // formData.append('eventImage', values.eventImage); // Handles the file if eventImage is a File or Blob
//             // formData.append('eventType', values.eventType);
//             // formData.append('price', values.price);
//             // formData.append('overview', values.overview);

//             // // For arrays, append each value separately
//             // values.divisions.forEach((division, index) => {
//             //     formData.append(`divisions[${index}]`, division);
//             // });

//             // formData.append('maxdivparticepants', values.maxdivparticepants);

//             // // Similarly for regulations array
//             // values.regulations.forEach((regulation, index) => {
//             //     formData.append(`regulations[${index}]`, regulation);
//             // });

//             // formData.append('maxTeamSize', values.maxTeamSize);
//             // formData.append('minTeamSize', values.minTeamSize);
//             // formData.append('venue', values.venue);
//             // formData.append('department', values.department);
//             // formData.append('isAllowDivision', values.isAllowDivision);

//             // if (image1) formData.append('eventImage', image1);

//             // try {
//             //     await axios.put(`${BaseUrl}/api/editing-event-by`, formData, {
//             //         headers: {
//             //             'Content-Type': 'multipart/form-data'
//             //         }
//             //     });
//             //     toast.success('event Updated Successfully!', {
//             //         position: "top-right",
//             //         autoClose: 5000,
//             //         hideProgressBar: false,
//             //         closeOnClick: true,
//             //         pauseOnHover: true,
//             //         draggable: true,
//             //         progress: undefined,
//             //         theme: "light",
//             //     });
//             //     setTimeout(() => {
//             //         window.location.reload()
//             //         toggle(); // Close the modal
//             //     }, 2500);
//             //     if (onSubmit) onSubmit(); // Trigger any additional action if needed
//             // } catch (error) {
//             //     toast.error('Error Occured!', {
//             //         position: "top-right",
//             //         autoClose: 5000,
//             //         hideProgressBar: false,
//             //         closeOnClick: true,
//             //         pauseOnHover: true,
//             //         draggable: true,
//             //         progress: undefined,
//             //         theme: "light",
//             //     });
//             // }
//             onSubmit(values);
//         },
//     });

//     useEffect(() => {
//         console.log(isToggled);
//         if (initialData) {
//             formik.setValues({
//                 event_id: initialData._id,
//                 sno: initialData.sno || '',
//                 eventCatagoryName: "",
//                 eventSubCatName: initialData.eventSubCatName || "",
//                 eventName: initialData.eventName || "",
//                 eventImage: null,
//                 eventType: initialData.eventType || "",
//                 departmentName: initialData.departmentName || "",
//                 price: initialData.price || "",
//                 overview: initialData.overview || "",
//                 maxTeamSize: initialData.maxTeamSize || "",
//                 minTeamSize: initialData.minTeamSize || "",
//                 isAllowDivision: isToggled || "",
//                 maxdivparticepants: initialData.maxdivparticepants || "",
//                 divisions: initialData.divisions || [""],
//                 regulations: initialData.regulations || [""],
//                 venue: initialData.venue || "",
//                 _id: initialData._id
//             });
//         }
//     }, [initialData, isToggled]);

//     const handleImageChange1 = (e) => {
//         setImage1(e.target.files[0]);
//         console.log(e.target.files[0]);
//     };

//     const getImageSrc = (fileName) => {
//         console.log(initialData);
//         console.log(fileName);
//         return fileName ? `${BaseUrl}/public/event_images/${fileName}` : "https://info.aec.edu.in/AEC/StudentPhotos/22A91A61E5.jpg";
//     };

//     const Updatedata = async () => {
//         setBtnDisable(true);
//         console.log(formik.values);
//         const formData = new FormData();
//         // Append each field to formData
//         formData.append('event_id', formik.values._id);
//         formData.append('eventCatagoryName', selectedEventCatOption);
//         formData.append('eventSubCatName', selectedEventsubCatOption);
//         formData.append('eventName', formik.values.eventName);
//         formData.append('eventType', formik.values.eventType);
//         formData.append('price', formik.values.price);
//         formData.append('overview', formik.values.overview);

//         // For arrays, append each value separately
//         formik.values.divisions.forEach((division, index) => {
//             formData.append(`divisions[${index}]`, division);
//         });

//         formData.append('maxdivparticepants', formik.values.maxdivparticepants);

//         // Similarly for regulations array
//         formik.values.regulations.forEach((regulation, index) => {
//             formData.append(`regulations[${index}]`, regulation);
//         });

//         formData.append('maxTeamSize', formik.values.maxTeamSize);
//         formData.append('minTeamSize', formik.values.minTeamSize);
//         formData.append('venue', formik.values.venue);
//         formData.append('department', formik.values.department);
//         formData.append('isAllowDivision', formik.values.isAllowDivision);
//         console.log(image1);
//         if (image1) formData.append('eventImage', image1);

//         try {
//             await axios.put(`${BaseUrl}/api/editing-event-by`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             toast.success('event Updated Successfully!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//             setTimeout(() => {
//                 window.location.reload()
//                 toggle(); // Close the modal
//             }, 2500);
//             if (onSubmit) onSubmit(); // Trigger any additional action if needed
//         } catch (error) {
//             toast.error('Error Occured!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//         }

//     }
//     const handleToggle = () => {
//         console.log('testing');
//         setIsToggled((prevState) => {
//             return prevState === 'true' ? 'false' : 'true';
//         });
//     };


//     // const eventOptions1 = {
//     //     Digi: [
//     //         'Web Diseno',
//     //         'Tech Talk',
//     //         'Project Presentation',
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Code Reto',
//     //         'Digiquizzer'
//     //     ],
//     //     Electrendz: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Project Expo',
//     //         'Electrical Quiz -test Your Mind Power',
//     //         'Electric Cross Word',
//     //         'Just A Minute (JAM)',
//     //         'Technical Treasure Hunt'
//     //     ],
//     //     Ignite: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Project Presentation',
//     //         'Contraptions',
//     //         'Water rocket',
//     //         'Engine Assembly and Disassembly',
//     //         'Robo Race',
//     //         'Technical Quiz',
//     //         'Popsicle Bridge',
//     //         'JAM'
//     //     ],
//     //     Spark: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Technical Quiz',
//     //         'Technical Treasure Hunt',
//     //         'Technical Dumb Charades',
//     //         'Circuit Debugging',
//     //         'ECE Expo',
//     //         'Tpeg (Technical photography from E-garbage)',
//     //         'Technical Video Presentation',
//     //         'Project Presentation'
//     //     ],
//     //     Petrospirit: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Project Presentation',
//     //         'Logo Identification'
//     //     ],
//     //     Krishi: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Project Presentation',
//     //         'Food and Agriculture Scavenger Hunt',
//     //         'Technical Quiz'
//     //     ],
//     //     Opus: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Technical Treasure Hunt',
//     //         'Cadingo',
//     //         'Bridge Design',
//     //         'Levitate',
//     //         'Project Expo',
//     //         'Technical Quiz'
//     //     ],
//     //     Excavation: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Model Presentation',
//     //         'Technical Essay'
//     //     ],
//     //     Viveka: [
//     //         'Poster Presentation',
//     //         'Paper Presentation',
//     //         'Ai Mastery Quiz',
//     //         'Project/Product Presentation',
//     //         'Coding Contest',
//     //         'Aideathon',
//     //         'Gaming Zone',
//     //         'Tech Treasure Hunt(Have Some Fun)'
//     //     ]
//     // };

//     return (
//         <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
//             <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Event</ModalHeader>
//             <Form onSubmit={formik.handleSubmit} className="tablelist-form">
//                 <ModalBody>
//                     <div style={{ padding: "0px 10px" }}>
//                         <Row>
//                             <Col lg="6" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
//                                 <label>Event Image:</label>
//                                 <div className='mb-3' style={{ display: "flex", justifyContent: "center", width: "100%", height: "170px" }}>
//                                     <div style={{ height: "170px", width: "170px", position: "relative" }}>
//                                         <img
//                                             style={{ cursor: 'pointer', height: "170px", width: "165px", borderRadius: "50%" }}
//                                             src={image1 ? URL.createObjectURL(image1) : getImageSrc(initialData?.eventImage)}
//                                             alt="Event Image"
//                                         />
//                                     </div>
//                                     <input
//                                         style={{ opacity: 0, position: "absolute", top: "3%", height: "150px", width: "150px", cursor: "pointer" }}
//                                         type="file"
//                                         name="eventSubCatImage"
//                                         onChange={handleImageChange1}
//                                     />
//                                 </div>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventCatagoryName">Select Event Catagory Name:</label>
//                                 <select
//                                     id="eventCatagoryName"
//                                     name="eventCatagoryName"
//                                     value={selectedEventCatOption}
//                                     onChange={handleSelectCatName}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventCatagoryName && formik.touched.eventCatagoryName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event Catagory</option>
//                                     {Object.keys(selectEventCatOption).map((dept) => (
//                                         <option key={dept} value={dept}>
//                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventCatagoryName && formik.touched.eventCatagoryName && (
//                                     <div className="invalid-feedback">{formik.errors.eventCatagoryName}</div>
//                                 )}
//                             </Col>
//                             {/* {console.log(isToggled)} */}
//                             <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventSubCatName">Select Event Sub Catagory Name:</label>
//                                 <select
//                                     id="eventSubCatName"
//                                     name="eventSubCatName"
//                                     value={selectedEventsubCatOption}
//                                     onChange={(e) => setSelectedEventSubCatOption(e.target.value)}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventSubCatName && formik.touched.eventSubCatName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event Catagory</option>
//                                     {Object.keys(selectEventSubCatOption).map((dept) => (
//                                         <option key={dept} value={dept}>
//                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventSubCatName && formik.touched.eventSubCatName && (
//                                     <div className="invalid-feedback">{formik.errors.eventSubCatName}</div>
//                                 )}
//                             </Col>
//                             {/* <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventSubCatName">Select Event Sub Catagory Name:</label>
//                                 <select
//                                     id="eventSubCatName"
//                                     name="eventSubCatName"
//                                     value={selectedEventsubCatOption}
//                                     onChange={(e) => {setSelectedEventSubCatOption(e.target.value)}}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventSubCatName && formik.touched.eventSubCatName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event Sub Catagory</option>
//                                     {Object.keys(selectEventSubCatOption).map((dept) => (
//                                         <option key={dept} value={dept}>
//                                             {dept.charAt(0).toUpperCase() + dept.slice(1)}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventSubCatName && formik.touched.eventSubCatName && (
//                                     <div className="invalid-feedback">{formik.errors.eventSubCatName}</div>
//                                 )}
//                             </Col> */}

//                             {/* <Col lg="6" className="mb-3">
//                                 <label htmlFor="eventName">Select Event:</label>
//                                 <select
//                                     id="eventName"
//                                     name="eventName"
//                                     value={formik.values.eventName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     className={`form-select ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
//                                 >
//                                     <option value="">Select Event</option>
//                                     {formik.values.departmentName && eventOptions[formik.values.departmentName].map((event, index) => (
//                                         <option key={index} value={event}>
//                                             {event}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {formik.errors.eventName && formik.touched.eventName && (
//                                     <div className="invalid-feedback">{formik.errors.eventName}</div>
//                                 )}
//                             </Col> */}

//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="eventName">Event Name</label>
//                                     <input
//                                         type="text"
//                                         id="eventName"
//                                         name="eventName"
//                                         value={formik.values.eventName}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.eventName && formik.touched.eventName ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.eventName && formik.touched.eventName && (
//                                         <div className="invalid-feedback">{formik.errors.eventName}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="eventType">Event Type</label>
//                                     <input
//                                         type="text"
//                                         id="eventType"
//                                         name="eventType"
//                                         value={formik.values.eventType}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.eventType && formik.touched.eventType ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.eventType && formik.touched.eventType && (
//                                         <div className="invalid-feedback">{formik.errors.eventType}</div>
//                                     )}
//                                 </div>
//                             </Col>

//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="price">Registration Fee</label>
//                                     <input
//                                         type="number"
//                                         id="price"
//                                         name="price"
//                                         value={formik.values.price}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.price && formik.touched.price ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.price && formik.touched.price && (
//                                         <div className="invalid-feedback">{formik.errors.price}</div>
//                                     )}
//                                 </div>
//                             </Col>

//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="maxTeamSize">Max Team Size</label>
//                                     <input
//                                         type="number"
//                                         id="maxTeamSize"
//                                         name="maxTeamSize"
//                                         value={formik.values.maxTeamSize}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.maxTeamSize && formik.touched.maxTeamSize ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.maxTeamSize && formik.touched.maxTeamSize && (
//                                         <div className="invalid-feedback">{formik.errors.maxTeamSize}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="maxTeamSize">Min Team Size</label>
//                                     <input
//                                         type="number"
//                                         id="minTeamSize"
//                                         name="minTeamSize"
//                                         value={formik.values.minTeamSize}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.minTeamSize && formik.touched.minTeamSize ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.minTeamSize && formik.touched.minTeamSize && (
//                                         <div className="invalid-feedback">{formik.errors.minTeamSize}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             {/* <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="extraTeamSize">Extra Team Members</label>
//                                     <input
//                                         type="number"
//                                         id="extraTeamSize"
//                                         name="extraTeamSize"
//                                         value={formik.values.extraTeamSize}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.extraTeamSize && formik.touched.extraTeamSize ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.extraTeamSize && formik.touched.extraTeamSize && (
//                                         <div className="invalid-feedback">{formik.errors.extraTeamSize}</div>
//                                     )}
//                                 </div>
//                             </Col>
//                             <Col lg="6">
//                                 <div className="mb-3">
//                                     <label htmlFor="extraAmountPerHead">Extra Amount Per Head</label>
//                                     <input
//                                         type="number"
//                                         id="extraAmountPerHead"
//                                         name="extraAmountPerHead"
//                                         value={formik.values.extraAmountPerHead}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control ${formik.errors.extraAmountPerHead && formik.touched.extraAmountPerHead ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.errors.extraAmountPerHead && formik.touched.extraAmountPerHead && (
//                                         <div className="invalid-feedback">{formik.errors.extraAmountPerHead}</div>
//                                     )}
//                                 </div>
//                             </Col> */}
//                         </Row>

//                         <div className="mb-3">
//                             <label htmlFor="eventOverview">Overview:</label>
//                             <textarea
//                                 id="overview"
//                                 name="overview"
//                                 value={formik.values.overview}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500, minHeight: '100px' }}
//                                 className={`form-control ${formik.errors.overview && formik.touched.overview ? 'is-invalid' : ''}`}
//                             />
//                             {formik.errors.overview && formik.touched.overview && (
//                                 <div className="invalid-feedback">{formik.errors.overview}</div>
//                             )}
//                         </div>
//                         <div className="mb-3">
//                             <label>Rules:</label>
//                             {formik.values.regulations.map((regulation, index) => (
//                                 <div key={index} className="d-flex mb-2 align-items-center">
//                                     <input
//                                         type="text"
//                                         name={`regulations[${index}]`}
//                                         value={regulation}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control me-2 ${formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.values.regulations.length > 1 && (
//                                         <Button
//                                             type="button"
//                                             color="danger"
//                                             onClick={() => {
//                                                 const updatedRules = [...formik.values.regulations];
//                                                 updatedRules.splice(index, 1);
//                                                 formik.setFieldValue('regulations', updatedRules);
//                                             }}
//                                         >
//                                             Remove
//                                         </Button>
//                                     )}
//                                     {formik.errors.regulations && formik.touched.regulations && formik.errors.regulations[index] && (
//                                         <div className="invalid-feedback">{formik.errors.regulations[index]}</div>
//                                     )}
//                                 </div>
//                             ))}
//                             <Button
//                                 type="button"
//                                 color="primary"
//                                 onClick={() =>
//                                     formik.setFieldValue('regulations', [...formik.values.regulations, ''])
//                                 }
//                             >
//                                 Add Regulation
//                             </Button>
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="eventVenue">Venue</label>
//                             <input
//                                 type="text"
//                                 id="venue"
//                                 name="venue"
//                                 value={formik.values.venue}
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className={`form-control ${formik.errors.venue && formik.touched.venue ? 'is-invalid' : ''}`}
//                             />
//                             {formik.errors.venue && formik.touched.venue && (
//                                 <div className="invalid-feedback">{formik.errors.venue}</div>
//                             )}
//                         </div>
//                         <Row>
//                             <Col md="6">
//                                 <label htmlFor="AllowVisible">
//                                     Allow Visible
//                                 </label><br></br>
//                                 {
//                                     initialData && (
//                                         <Button
//                                             className={`btn ${isToggled === 'true' ? "btn-danger" : "btn-success"}`}
//                                             onClick={handleToggle}
//                                         >
//                                             {isToggled === 'true' ? "Off Divisions" : "Add Divisions"}
//                                         </Button>
//                                     )
//                                 }

//                             </Col>
//                         </Row>
//                         <br></br>
//                         { isToggled === "true" && (<div>
//                         <Col lg="6">
//                             <div className="mb-3">
//                                 <label htmlFor="maxTeamSize">Max Div Particepants</label>
//                                 <input
//                                     type="number"
//                                     id="maxdivparticepants"
//                                     name="maxdivparticepants"
//                                     value={formik.values.maxdivparticepants}
//                                     style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`form-control ${formik.errors.maxdivparticepants && formik.touched.maxdivparticepants ? 'is-invalid' : ''}`}
//                                 />
//                                 {formik.errors.maxdivparticepants && formik.touched.maxdivparticepants && (
//                                     <div className="invalid-feedback">{formik.errors.maxdivparticepants}</div>
//                                 )}
//                             </div>
//                         </Col>

//                         <div className="mb-3">
//                             <label>Divisions:</label>
//                             {formik.values.divisions.map((regulation, index) => (
//                                 <div key={index} className="d-flex mb-2 align-items-center">
//                                     <input
//                                         type="text"
//                                         name={`divisions[${index}]`}
//                                         value={regulation}
//                                         style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         className={`form-control me-2 ${formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] ? 'is-invalid' : ''}`}
//                                     />
//                                     {formik.values.divisions.length > 1 && (
//                                         <Button
//                                             type="button"
//                                             color="danger"
//                                             onClick={() => {
//                                                 const updatedRules = [...formik.values.divisions];
//                                                 updatedRules.splice(index, 1);
//                                                 formik.setFieldValue('divisions', updatedRules);
//                                             }}
//                                         >
//                                             Remove
//                                         </Button>
//                                     )}
//                                     {formik.errors.divisions && formik.touched.divisions && formik.errors.divisions[index] && (
//                                         <div className="invalid-feedback">{formik.errors.divisions[index]}</div>
//                                     )}
//                                 </div>
//                             ))}
//                             <Button
//                                 type="button"
//                                 color="primary"
//                                 onClick={() =>
//                                     formik.setFieldValue('divisions', [...formik.values.divisions, ''])
//                                 }
//                             >
//                                 Add Division
//                             </Button>
//                         </div>
//                         </div>)}
//                     </div>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button type="button" color="light" onClick={toggle}>Cancel</Button>
//                     <Button type="submit" color="primary" onClick={Updatedata} disabled={btndisable}>Save Changes</Button>
//                 </ModalFooter>
//                 <ToastContainer />
//             </Form>
//         </Modal>
//     );
// };

// export default EditEventForm;





// import React, { useState, useEffect } from 'react';
// import { Col, Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Card, CardBody, FormGroup, Label, Input, FormFeedback, Form, } from 'reactstrap';
// import Breadcrumbs from '../../../components/Common/Breadcrumb';
// import DataTable from 'react-data-table-component';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { result } from 'lodash';

// const validationSchema = Yup.object({
//     teamName: Yup.string().required('Select a Team Name'),
//     teamId: Yup.string().required('Select a Team ID'),
//     runTime: Yup.string().required('Run Time is Required'),
//     laps: Yup.string().required('Laps is Required'),
//     penality: Yup.string().required('Penality is Required'),
//     score: Yup.string().required('Score is Required'),
// });

// const EditEventForm = ({ isOpen, toggle, initialData, onSubmit, Invokeing }) => {
//     const BaseUrl = process.env.REACT_APP_BASEURL;
//     console.log(initialData);

//     const [btndisable, setBtnDisable] = useState(false);

//     const [TeamDetails, setTeamDetails] = useState([]);
//     const [SelectedTeam, setSelectedTeam] = useState({});

//     const [ showTime, setShowTime ] = useState(false);
//     const [ showLaps, setShowLaps ] = useState(false);




//     const validation = useFormik({
//         initialValues: {
//             teamName: '',
//             teamId: '',
//             runTime: '',
//             laps: '',
//             penality: '',
//             score: ''
//         },
//         validationSchema,
//         enableReinitialize: true,
//         onSubmit: async (values) => {
//             // alert('test')
//             Object.keys(values).forEach((key) => {
//                 console.log(`${key}: ${values[key]}` + "<br>");
//             });

//             onSubmit(values);
//         },
//     });

//     useEffect(() => {
//         axios.get(BaseUrl + "/api/view-Live-Score")
//         .then((result) => {
//             console.log(result);
//             setTeamDetails(result.TeamsScore);
//         })
//         .catch((error) => {
//             console.log("error", error);
//         })
//     }, [initialData]);

//     const HandleSubmit = async () => {

//         console.log(validation.values);


//     }


//     return (
//         <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
//             <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Scores of {initialData}</ModalHeader>
//             <Form onSubmit={validation.handleSubmit} className="tablelist-form">

//             <Col className="cardBodyParent">
//               <Card className="cardBody">
//                 <CardBody>
//                   <Form onSubmit={validation.handleSubmit}>
//                     <Row>
//                       <Col lg="6" className="mb-3">
//                         <label htmlFor="teamName">Select Team Name:</label>
//                         <select
//                           id="teamName"
//                           name="TeamName"
//                           value={SelectedTeam.teamName}
//                           onChange={(e) => {
//                             console.log(e.target.value);
//                             const selectedTeamCode = e.target.value;
//                             const Data = TeamDetails.map((Team, index) => {
//                                 if(Team.teamId == selectedTeamCode){
//                                     setSelectedTeam(Team);
//                                     // console.log(Team);
//                                 }
//                             })

//                           }}
//                           onBlur={validation.handleBlur}
//                           className="form-select"
//                         >
//                           <option value="">Select Team</option>
//                           {TeamDetails.map((teamData, index) => {
//                             return (
//                               <option key={teamData.teamCode} value={teamData.teamId}>
//                                 {teamData.teamName}
//                               </option>
//                             );
//                           })}
//                         </select>
//                         {validation.touched.TeamName && validation.errors.TeamName && (
//                           <FormFeedback>{validation.errors.TeamName}</FormFeedback>
//                         )}
//                       </Col>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="teamId">Team ID</Label>
//                           <Input
//                             name="TeamID"
//                             placeholder="Team ID"
//                             type="text"
//                             value={FormData.TeamID}
//                             disabled
//                             className="form-control"
//                           />
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md="6" style={{display: showTime ? "block": "none"}}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="time">Time</Label>
//                           <Input
//                             name="Time"
//                             placeholder="Time"
//                             type="number"
//                             value={FormData.Time}
//                             onChange={(e) => {

//                             }}
//                           />
//                           {validation.touched.Time && validation.errors.Time && (
//                             <FormFeedback>{validation.errors.Time}</FormFeedback>
//                           )}
//                         </FormGroup>
//                       </Col>
//                       <Col md="6" style={{display: showLaps ? "block": "none"}}>
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="laps">Laps</Label>
//                           <Input
//                             name="Laps"
//                             placeholder="Laps"
//                             type="number"
//                             value={FormData.Laps}
//                             disabled
//                           />
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <Row>

//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="penality">Penality</Label>
//                           <Input
//                             name="Penality"
//                             placeholder="Penality"
//                             type="number"
//                             value={FormData.Penality}
//                             onChange={(e) => {

//                             }}
//                           />
//                           {validation.touched.Penality && validation.errors.Penality && (
//                             <FormFeedback>{validation.errors.Penality}</FormFeedback>
//                           )}
//                         </FormGroup>
//                       </Col>
//                       <Col md="6">
//                         <FormGroup className="mb-3">
//                           <Label htmlFor="score">Score</Label>
//                           <Input
//                             name="Score"
//                             placeholder="Score"
//                             type="number"
//                             value={FormData.Score}
//                             onChange={(e) => {

//                             }}
//                           />
//                           {validation.touched.Score && validation.errors.Score && (
//                             <FormFeedback>{validation.errors.Score}</FormFeedback>
//                           )}
//                         </FormGroup>
//                       </Col>
//                     </Row>
//                     <ToastContainer />
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>


//                 <ModalFooter>
//                     <Button type="button" color="light" onClick={toggle}>Cancel</Button>
//                     <Button type="submit" color="primary" onClick={HandleSubmit} disabled={btndisable}>Save Changes</Button>
//                 </ModalFooter>
//                 <ToastContainer />
//             </Form>
//         </Modal>
//     );
// };

// export default EditEventForm;






import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, ModalFooter, ModalHeader, Card, CardBody, FormGroup, Label, Input, FormFeedback, Form } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
    teamName: Yup.string().required('Select a Team Name'),
    teamId: Yup.string().required('Select a Team ID'),
    runTime: Yup.string().required('Run Time is Required'),
    laps: Yup.string().required('Laps is Required'),
    penality: Yup.string().required('Penality is Required'),
    score: Yup.string().required('Score is Required'),
});

const EditEventForm = ({ isOpen, toggle, initialData, onSubmit }) => {
    const BaseUrl = process.env.REACT_APP_BASEURL;

    const [btndisable, setBtnDisable] = useState(false);
    const [TeamDetails, setTeamDetails] = useState([]);
    const [showTime, setShowTime] = useState(false);
    const [showLaps, setShowLaps] = useState(false);
    const [eventType, setEventType] = useState('');

    const validation = useFormik({
        initialValues: {
            eventName: initialData,
            teamName: '',
            teamId: '',
            runTime: '',
            laps: '',
            penality: '',
            score: ''
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {

            console.log(values);
            onSubmit(values);
        },
    });

    useEffect(() => {
        if (initialData.toUpperCase() === 'ENDURANCE' || initialData.toUpperCase() === 'SKID PAD' || initialData.toUpperCase() === 'SKIDPAD' || initialData.toUpperCase() === 'AUTOCROSS' || initialData.toUpperCase() === 'AUTO CROSS') {
            setShowTime(true);
            setEventType(initialData);
            if (initialData.toUpperCase() === 'ENDURANCE') {
                setShowLaps(true);
            } else {
                setShowLaps(false);
            }
        } else {
            setShowLaps(false);
            setShowTime(false);
        }
    }, [initialData]);

    useEffect(() => {
        axios.get(BaseUrl + "/api/view-Live-Score")
            .then((result) => {
                setTeamDetails(result.TeamsScore);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, [initialData]);

    const handleTeamSelect = (e) => {
        const selectedTeamName = e.target.value;
        const selectedTeamData = TeamDetails.find((team) => team.teamName === selectedTeamName);


        // Extract relevant data for the selected team
        const runTimeValue = selectedTeamData.runTime.find(rt => rt[initialData]);
        const scoreValue = selectedTeamData.score.find(sc => sc[initialData]);
        const penaltyValue = selectedTeamData.penalities.find(pen => pen[initialData]);


        validation.setValues({
            ...validation.values,
            teamName: selectedTeamData.teamName,
            teamId: selectedTeamData.teamId || '',
            runTime: runTimeValue ? runTimeValue[initialData] : '',
            laps: selectedTeamData.lapCount || '',
            penality: penaltyValue ? penaltyValue[initialData] : '',
            score: scoreValue ? scoreValue[initialData] : ''
        });


    }

    const handleSubmit = () => {
        console.log(validation.values);
        try {
            axios.put(BaseUrl + "/api/edit-Live-Score", validation.values)
                .then((result) => {
                    console.log(result);
                    toast.success('Score Updated Successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    validation.resetForm();
                })
                .catch((error) => {
                    console.log("error", error);
                    toast.error('Something went wrong', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
            <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Scores of {initialData}</ModalHeader>
            <Form onSubmit={validation.handleSubmit} className="tablelist-form">
                <Col className="cardBodyParent">
                    <Card className="cardBody">
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col lg="6" className="mb-3">
                                        <label htmlFor="teamName">Select Team Name:</label>
                                        <select
                                            id="teamName"
                                            name="teamName"
                                            value={validation.values.teamName || ''}
                                            onChange={handleTeamSelect}
                                            onBlur={validation.handleBlur}
                                            className="form-select"
                                        >
                                            <option value="">Select Team</option>
                                            {TeamDetails.map((teamData) => (
                                                <option key={teamData.teamName} value={teamData.teamName}>
                                                    {teamData.teamName}
                                                </option>
                                            ))}
                                        </select>

                                        {validation.touched.teamName && validation.errors.teamName && (
                                            <FormFeedback>{validation.errors.teamName}</FormFeedback>
                                        )}
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="teamId">Team ID</Label>
                                            <Input
                                                name="teamId"
                                                placeholder="Team ID"
                                                type="text"
                                                value={validation.values.teamId || ''}
                                                disabled
                                                className="form-control"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    {showTime && (
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label htmlFor="runTime">Run Time</Label>
                                                <Input
                                                    name="runTime"
                                                    placeholder="Run Time"
                                                    type="number"
                                                    value={validation.values.runTime || ''}
                                                    onChange={validation.handleChange}
                                                />
                                                {validation.touched.runTime && validation.errors.runTime && (
                                                    <FormFeedback>{validation.errors.runTime}</FormFeedback>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    )}

                                    {showLaps && (
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label htmlFor="laps">Laps</Label>
                                                <Input
                                                    name="laps"
                                                    placeholder="Laps"
                                                    type="number"
                                                    value={validation.values.laps || ''}
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Col>
                                    )}
                                </Row>

                                <Row>
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="penality">Penality</Label>
                                            <Input
                                                name="penality"
                                                placeholder="Penality"
                                                type="number"
                                                value={validation.values.penality || ''}
                                                onChange={validation.handleChange}
                                            />
                                            {validation.touched.penality && validation.errors.penality && (
                                                <FormFeedback>{validation.errors.penality}</FormFeedback>
                                            )}
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="score">Score</Label>
                                            <Input
                                                name="score"
                                                placeholder="Score"
                                                type="number"
                                                value={validation.values.score || ''}
                                                onChange={validation.handleChange}
                                            />
                                            {validation.touched.score && validation.errors.score && (
                                                <FormFeedback>{validation.errors.score}</FormFeedback>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <ToastContainer />
                            </Form>
                        </CardBody>
                    </Card>
                </Col>

                <ModalFooter>
                    <Button type="button" color="light" onClick={toggle}>Cancel</Button>
                    <Button type="submit" color="primary" onClick={handleSubmit} disabled={btndisable}>Save Changes</Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

export default EditEventForm;



