// import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const EditEventCategoryForm = ({ isOpen, toggle, initialData }) => {
//   const [formData, setFormData] = useState(initialData);

//   useEffect(() => {
//     setFormData(initialData); // This ensures the form gets updated when initialData changes
//   }, [initialData]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     axios.put(`${process.env.REACT_APP_BASEURL}/api/edit-Event-Category`, formData)
//       .then(response => {
//         toast.success('Event Category Updated Successfully!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light"
//         });
//         toggle();
//       })
//       .catch(err => {
//         toast.error('Error occurred while updating!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light"
//         });
//         console.log(err);
//       });
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Edit Event Category</ModalHeader>
//       <ModalBody>
//         {/* Display Image */}
//         {formData.eventCatImage && (
//           <div className="mb-3">
//             <img
//               className="img-fluid rounded-circle"
//               src={`${process.env.REACT_APP_BASEURL}/public/${formData.eventCatImage}`}
//               alt="Event Image"
//               style={{ width: '100px', height: '100px' }}
//             />
//           </div>
//         )}

//         <FormGroup>
//           <Label for="eventCatName">Event Category Name</Label>
//           <Input
//             type="text"
//             id="eventCatName"
//             name="eventCatName"
//             value={formData.eventCatName || ''}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="eventCatDate">Event Date</Label>
//           <Input
//             type="date"
//             id="eventCatDate"
//             name="eventCatDate"
//             value={formData.eventCatDate || ''}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="eventCatTime">Event Time</Label>
//           <Input
//             type="time"
//             id="eventCatTime"
//             name="eventCatTime"
//             value={formData.eventCatTime || ''}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="eventCatImage">Event Image</Label>
//           <Input
//             type="file"
//             id="eventCatImage"
//             name="eventCatImage"
//             onChange={handleChange}  // Handle file uploads here if needed
//           />
//         </FormGroup>
//       </ModalBody>

//       <ModalFooter>
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//         <Button color="primary" onClick={handleSubmit}>Save Changes</Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default EditEventCategoryForm;



import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Form, Row } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
    EventCatName: Yup.string().required("Please enter a name"),
    EventCatDate: Yup.string().required("Please enter a date"),
    EventCatTimeHour: Yup.number().required("Please select an hour"),
    EventCatTimeMinute: Yup.string().required("Please select a minute"),
    EventCatTimeAMPM: Yup.string().required("Please select AM/PM"),
    EventCatImage: Yup.string().required("Please upload an image")
});

const EditEventForm = ({ isOpen, toggle, initialData, onSubmit }) => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [image, setImage] = useState('');
    const [dispImage, setDispImage] = useState('');


    const formik = useFormik({
        initialValues: {
            id: initialData?._id || '',
            EventCatName: initialData?.eventCatName || '',
            EventCatDate: initialData?.eventCatDate || '',
            EventCatTimeHour: initialData?.eventCatTime ? parseInt(initialData.eventCatTime.split(':')[0]) : 1,
            EventCatTimeMinute: initialData?.eventCatTime ? initialData.eventCatTime.split(':')[1].split(' ')[0] : '00',
            EventCatTimeAMPM: initialData?.eventCatTime ? (initialData.eventCatTime.includes('PM') ? 'PM' : 'AM') : 'AM',
            EventCatImage: initialData?.eventCatImage || '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const [year, month, day] = values.EventCatDate.split('-');
            const date = `${day}-${month}-${year}`;

            const formattedTime = `${String(values.EventCatTimeHour).padStart(2, '0')}:${values.EventCatTimeMinute} ${values.EventCatTimeAMPM}`;

            const formData = new FormData();


            formData.append('id', values.id);
            formData.append('eventCatName', values.EventCatName);
            formData.append('eventCatDate', date);
            formData.append('eventCatTime', formattedTime);
            if (image) {
                formData.append('eventCatImage', image); // 'image' is the actual file object
            }


            try {
                console.log("ksjbjdsh");
                const response = await axios.put(`${BaseUrl}/api/edit-Event-Category`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                toast.success('Event Updated Successfully!', {
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
                    window.location.href = "/EditEventCatagory";
                }, 2500);
            } catch (error) {
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
                console.error("Error updating data:", error);
            }
        },
        enableReinitialize: true, // Ensure form values are updated with new props
    });

    const DateFormat = (date) => {
        if (date) {
            const [day, month, year] = date.split('-');
            return `${year}-${month}-${day}`;
        }
    }

    useEffect(() => {
        if (initialData) {
            formik.setValues({
                id: initialData._id,
                EventCatName: initialData.eventCatName || '',
                EventCatDate: DateFormat(initialData.eventCatDate) || '',
                EventCatTimeHour: initialData.eventCatTime ? parseInt(initialData.eventCatTime.split(':')[0]) : 1,
                EventCatTimeMinute: initialData.eventCatTime ? initialData.eventCatTime.split(':')[1].split(' ')[0] : '00',
                EventCatTimeAMPM: initialData.eventCatTime ? (initialData.eventCatTime.includes('PM') ? 'PM' : 'AM') : 'AM',
                EventCatImage: initialData.eventCatImage || '',
            });
            setDispImage(initialData.eventCatImage || '');
        }
    }, [initialData]);

    const imageRef = useRef(null);

    const handleImageChange = (e) => {
        const fileImg = e.target.files[0];

        // If a file is selected
        if (fileImg) {
            // Check file size (max 1MB) and type (jpeg, png, gif)
            const isValidFileSize = fileImg.size <= 1048576; // 1MB
            const isValidFileType = ["image/jpeg", "image/png", "image/gif"].includes(fileImg.type);

            if (!isValidFileSize) {
                toast.error("File size is too large, should be less than 1MB", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            if (!isValidFileType) {
                toast.error("Unsupported file type, only JPEG, PNG, and GIF are allowed", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }

            // If file is valid, set the image and preview
            setImage(fileImg);

            const fileReader = new FileReader();
            fileReader.onload = () => {
                setDispImage(fileReader.result); // Update image preview
            };
            fileReader.readAsDataURL(fileImg); // Read the file as a base64 URL
        }
    };

    const defaultImage = "https://info.aec.edu.in/AEC/StudentPhotos/22A91A61E5.jpg";
    const imageSrc = image ? dispImage : initialData?.eventCatImage || defaultImage;

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered style={{ maxWidth: '700px', width: '100%' }}>
            <ModalHeader className="bg-light p-3" toggle={toggle}>Edit Event Details</ModalHeader>
            <Form onSubmit={formik.handleSubmit} className="tablelist-form">
                <ModalBody>
                    <div style={{ padding: "0px 10px" }}>
                        <div className='mb-3' style={{ display: "flex", justifyContent: "center", width: "100%", height: "170px" }}>
                            <div style={{ height: "170px", width: "170px", position: "relative" }}>
                                <img style={{ cursor: 'pointer', height: "170px", width: "165px", borderRadius: "50%" }} src={`${BaseUrl}/public/${imageSrc}`} alt="profileImg" />
                            </div>
                            <input
                                style={{ opacity: 0, position: "absolute", top: "3%", height: "150px", width: "150px", cursor: "pointer" }}
                                type="file"
                                ref={imageRef}
                                onChange={handleImageChange}
                            />
                        </div>

                        <Row>
                            <Col lg="6" className="mb-3">
                                <label htmlFor="EventCatName" className="form-label">Event Category Name</label>
                                <input
                                    type="text"
                                    id="EventCatName"
                                    name="EventCatName"
                                    className={`form-control ${formik.errors.EventCatName && formik.touched.EventCatName ? 'is-invalid' : ''}`}
                                    placeholder="Enter Name"
                                    value={formik.values.EventCatName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.EventCatName && formik.touched.EventCatName && (
                                    <div className="invalid-feedback">{formik.errors.EventCatName}</div>
                                )}
                            </Col>

                            <Col lg="6" className="mb-3">
                                <label htmlFor="EventCatDate" className="form-input">Event Date</label>
                                <input
                                    type="date"
                                    id="EventCatDate"
                                    name="EventCatDate"
                                    className={`form-control ${formik.errors.EventCatDate && formik.touched.EventCatDate ? 'is-invalid' : ''}`}
                                    value={formik.values.EventCatDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.EventCatDate && formik.touched.EventCatDate && (
                                    <div className="invalid-feedback">{formik.errors.EventCatDate}</div>
                                )}
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="4" className="mb-3">
                                <label htmlFor="EventCatTimeHour" className="form-label">Hour</label>
                                <select
                                    id="EventCatTimeHour"
                                    name="EventCatTimeHour"
                                    className={`form-control ${formik.errors.EventCatTimeHour && formik.touched.EventCatTimeHour ? 'is-invalid' : ''}`}
                                    value={formik.values.EventCatTimeHour}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    {[...Array(12).keys()].map(i => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                {formik.errors.EventCatTimeHour && formik.touched.EventCatTimeHour && (
                                    <div className="invalid-feedback">{formik.errors.EventCatTimeHour}</div>
                                )}
                            </Col>

                            <Col lg="4" className="mb-3">
                                <label htmlFor="EventCatTimeMinute" className="form-label">Minute</label>
                                <select
                                    id="EventCatTimeMinute"
                                    name="EventCatTimeMinute"
                                    className={`form-control ${formik.errors.EventCatTimeMinute && formik.touched.EventCatTimeMinute ? 'is-invalid' : ''}`}
                                    value={formik.values.EventCatTimeMinute}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    {[...Array(60).keys()].map(i => (
                                        <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
                                    ))}
                                </select>
                                {formik.errors.EventCatTimeMinute && formik.touched.EventCatTimeMinute && (
                                    <div className="invalid-feedback">{formik.errors.EventCatTimeMinute}</div>
                                )}
                            </Col>

                            <Col lg="4" className="mb-3">
                                <label htmlFor="EventCatTimeAMPM" className="form-label">AM/PM</label>
                                <select
                                    id="EventCatTimeAMPM"
                                    name="EventCatTimeAMPM"
                                    className={`form-control ${formik.errors.EventCatTimeAMPM && formik.touched.EventCatTimeAMPM ? 'is-invalid' : ''}`}
                                    value={formik.values.EventCatTimeAMPM}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                                {formik.errors.EventCatTimeAMPM && formik.touched.EventCatTimeAMPM && (
                                    <div className="invalid-feedback">{formik.errors.EventCatTimeAMPM}</div>
                                )}
                            </Col>
                        </Row>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" onClick={toggle} color="light" className="btn-sm">Cancel</Button>
                    <Button type="submit" color="success" className="btn-sm">Update</Button>
                </ModalFooter>
                <ToastContainer />
            </Form>
        </Modal>
    );
};

export default EditEventForm;




