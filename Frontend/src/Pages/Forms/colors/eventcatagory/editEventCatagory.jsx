// import React, { useState } from "react";
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
// import { useEffect } from "react";

// const EditEventCatagory = () => {
//   document.title = "Colours Admin";

//   const BaseUrl = process.env.REACT_APP_BASEURL;
//   const [totalCatgories, setTotalCatgories] = useState([]);
//   const [updatedCatagory, setUpdatedCatagory] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [removeData, setRemoveData] = useState({});
    
  

//   useEffect(() => {
//     axios.get(BaseUrl + "/api/view-Event-Category")
//       .then((result) => {
//         setTotalCatgories(result.data);
//         console.log(result.data);
//       }).catch((er) => {
//         console.log(er);
//       })
//   }, [])

  

//   const handleChange = (index, eventCatagory, value) => {
//     const dumyevents = [...totalCatgories];
//     dumyevents[index][eventCatagory] = value;
//     setTotalCatgories(dumyevents);
//   }

//   const handleShow = (dt) => {
//     setShowModal(true)
//     setRemoveData(dt)
//   };

//   const editCatagory = (catagoryId, updatedCatagory) => {

//     console.log(updatedCatagory.eventCatName);
//     console.log(updatedCatagory.eventCatDate);
//     console.log(updatedCatagory.eventCatTime);

//     // Create a FormData object to handle file uploads
//     // const formData = new FormData();
//     // formData.append('eventCatagoryName', updatedCatagory.eventCatagoryName);

//     const mydata = {
//       'eventCatName': updatedCatagory.eventCatName,
//       'eventCatDate': updatedCatagory.eventCatDate,
//       'eventCatTime': updatedCatagory.eventCatTime,
//       'id' : catagoryId
//     };
//         try {
//           const response = axios.put(`${BaseUrl}/api/edit-Event-Category`, mydata);
//           // alert("eventCatagory Added sucessfully!!!")
//           toast.warn('eventCatagory Updated Successfully!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             });
//           // setTimeout(() => {
//           //   window.location.href="/EventCatagory"
//           // }, 2500);
//           console.log('Response:', response);
//         } catch (err) {
//           toast.error('Error Occured!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             });
//           console.log(err);
//         }
//   }

//   const handleClose = () => setShowModal(false);
//   const handleSaveChanges = () => {
//       console.log('Changes saved!');
//       deleteEventCatagory(removeData)
//       setShowModal(false);
//   };


//   const deleteEventCatagory = (catId) => {
//     console.log(catId);

//     axios.delete(`${BaseUrl}/api/delete-Event-Category/${catId}`)
//     .then((result) => {
//       console.log(result)
//       window.location.href="/EventCatagory"
//     }).catch((er) => {
//       console.log(er);
//     })
//   }

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Breadcrumbs title="BRANCH - EVENTS" breadcrumbItem="Add Event Catagory" />
//           <Row>
//             <Col className="cardBodyParent">
//               <Card className="cardBody">
//                 <CardBody>
//                   <h4 className="card-title">Edit Event Catagory Form</h4>
//                   {console.log(totalCatgories)}
//                   {totalCatgories && totalCatgories.map((catagory, index) => {
//                     return (
//                       <Form
//                         className="needs-validation"
//                         style={{ marginTop: '40px' }}
//                       >
//                         <Row>
//                           <Col md="4">
//                             <FormGroup className="mb-3">
//                               <Label htmlFor="eventCatagoryName">Event Catagory Name</Label>
//                               <Input
//                                 name="eventCatagoryName"
//                                 placeholder="Event Catagory Name"
//                                 type="text"
//                                 className="form-control"
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                 value={totalCatgories[index]?.eventCatName || catagory.eventCatName}
//                                 onChange={(e) => handleChange(index, "eventCatName", e.target.value)}
//                               />
//                             </FormGroup>
//                           </Col>
//                           <Col md="3">
//                             <FormGroup className="mb-3">
//                               <Label htmlFor="eventCatagoryName">Event Date</Label>
//                               <Input
//                                 name="eventCatagoryName"
//                                 placeholder="Event Catagory Name"
//                                 type="text"
//                                 className="form-control"
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                 value={totalCatgories[index]?.eventCatDate || catagory.eventCatDate}
//                                 onChange={(e) => handleChange(index, "eventCatDate", e.target.value)}
//                               />
//                             </FormGroup>
//                           </Col>
//                           <Col md="2">
//                             <FormGroup className="mb-3">
//                               <Label htmlFor="eventCatagoryName">Event Time</Label>
//                               <Input
//                                 name="eventCatagoryName"
//                                 placeholder="Event Catagory Name"
//                                 type="text"
//                                 className="form-control"
//                                 style={{ border: "1px solid black", color: "black", fontWeight: 500 }}
//                                 value={totalCatgories[index]?.eventCatTime || catagory.eventCatTime}
//                                 onChange={(e) => handleChange(index, "eventCatTime", e.target.value)}
//                               />
//                             </FormGroup>
//                           </Col>
//                           <Col md="3">
//                             <Button color="primary" onClick={() => editCatagory(catagory._id, totalCatgories[index])}>
//                               Edit
//                             </Button>
//                             <Button color="danger" style = {{marginLeft : "10px "}} onClick={() => handleShow(catagory._id)}>
//                               Delete
//                             </Button>
//                           </Col>
//                         </Row>
//                         <ToastContainer />
//                       </Form>
//                     )
//                   })}
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       {showModal && (
//         <div className="modal show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Alert</h5>
//                 <button type="button" className="close" aria-label="Close" onClick={handleClose}>
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Are You sure to Delete Event Catagory</p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleClose}>
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-danger" onClick={handleSaveChanges}>
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default EditEventCatagory;



import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import EditEventCategoryForm from '../../EditEventForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEventCategory = () => {
  const [totalCategories, setTotalCategories] = useState([]);
  const [defaultValues, setDefaultValues] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [removeData, setRemoveData] = useState('');
  const [updated, setUpdated] = useState(false);
  const BaseUrl = process.env.REACT_APP_BASEURL;

  // Fetch data when the component mounts
  useEffect(() => {
    axios.get(`${BaseUrl}/api/view-Event-Category`)
      .then(res => {
        setTotalCategories(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [updated]);

  // Edit button functionality
  const editCategory = (category) => {
    setDefaultValues({
      _id: category._id,
      eventCatName: category.eventCatName,
      eventCatDate: category.eventCatDate,
      eventCatTime: category.eventCatTime,
      eventCatImage: category.eventCatImage
    });
    setModalOpen(true);
  };

  // Show the delete confirmation modal
  const handleShow = (dt) => {
    setShowModel(true);
    setRemoveData(dt);
  };

  // Hide the delete confirmation modal
  const handleClose = () => {
    setShowModel(false);
    setRemoveData('');
  };

  // Delete category
  const removeCategory = () => {
    axios.delete(`${BaseUrl}/api/delete-Event-Category/${removeData}`)
      .then(response => {
        toast.warn('Event Category Removed Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        setUpdated(!updated);
        handleClose(); // Close the modal after deletion
      })
      .catch(err => {
        toast.error('Error Occurred!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        console.log(err);
      });
  };

  // Columns configuration for DataTable
  const columns = [
    {
      name: <span className='font-weight-bold fs-13'>S.NO</span>,
      selector: (row, index) => index+1,
      sortable: true,
      width: "75px",
      style: { display: "flex", justifyContent: "center" }
    },
    {
      name: <span className='font-weight-bold fs-13'>Event Image</span>,
      selector: row => row.eventCatImage,
      sortable: true,
      width: "150px",
      cell: row => <img className="img-fluid rounded-circle" src={`${BaseUrl}/public/${row.eventCatImage}`} alt="Event Image" style={{ width: "68px", height: "70px",  margin: "5px 0px" }} />,
      style: { display: "flex", justifyContent: "center", alignItems: "center" }
    },
    {
      name: <span className='font-weight-bold fs-13'>Event Category Name</span>,
      selector: row => row.eventCatName,
      sortable: true,
    },
    {
      name: <span className='font-weight-bold fs-13'>Event Date</span>,
      selector: row => row.eventCatDate,
      sortable: true,
      width: "150px"
    },
    {
      name: <span className='font-weight-bold fs-13'>Event Time</span>,
      selector: row => row.eventCatTime,
      sortable: true,
      width: "120px"
    },
    {
      name: <span className='font-weight-bold fs-13'>Action</span>,
      cell: (row) => {
        return (
          <div className="d-flex gap-2">
            <Button
              color="success"
              onClick={() => editCategory(row)}
              size="sm"
            >
              Edit
            </Button>
            <Button
              color="danger"
              onClick={() => handleShow(row._id)}
              size="sm"
            >
              Remove
            </Button>
          </div>
        );
      },
      width: "150px"
    }
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Admin - Events" breadcrumbItem="Edit Event Category" />
          <Row>
            <Col className="col-12">
              <DataTable
                columns={columns}
                data={totalCategories}
                pagination
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal for editing event category */}
      <EditEventCategoryForm
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        initialData={defaultValues}
      />

      {/* Confirmation modal for removing category */}
      <Modal isOpen={showModel} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Confirm Deletion</ModalHeader>
        <ModalBody>
          Are you sure you want to remove this event category?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
          <Button color="danger" onClick={removeCategory}>Delete</Button>
        </ModalFooter>
      </Modal>

      <ToastContainer />
    </React.Fragment>
  );
};

export default EditEventCategory;

