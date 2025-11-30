import { Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditFacultyForm from './EditFacultyForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import coordinator from "./coorinatorr.jpg";

const EditFaculty = () => {
  const [validUrls, setValidUrls] = useState({});
  const divisions = [ 'AEC', 'ACET', 'ACOE'];
  const [FacultyData, setFacultyData] = useState([]);
  const [defaultValues, setDefaultValues] = useState({});
  const [modal_list, setmodal_list] = useState(false);
  const [Dataupdate, setDataupdate] = useState(false);
  const [dumimg, setdumimg] = useState('');
  const BaseUrl = process.env.REACT_APP_BASEURL;
  const [fakedata, setfakedata] = useState([]);

  useEffect(() => {
    axios.get(BaseUrl + "/api/view-Faculty-Coordinator")
      .then(res => {
          // Assuming response is in the format of an array of objects, 
          // and each object contains details for the faculty coordinator.
          const updatedData = res.data.map(item => ({
            cordinatorName: item.FacultyCoordinatorName,
            cordinatorId: item.FacultyCoordinatorCollegeId,
            cordinatorCollege: item.FacultyCoordinatorCollege,
            cordinatorPhone: item.FacultyCoordinatorMobile,
            cordinatorEmail: item.FacultyCoordinatorEmail,
            cordinatorImage: item.FacultyCoordinatorImage,
            _id: item._id // Assuming the backend gives the _id as well.
          }));
          setfakedata(updatedData);
      })
      .catch(err => {
          console.log(err);
      });
  }, []);

    

    

  const editfun = (customer) => {
    setDefaultValues({
      cordinatorName: customer.cordinatorName,
      cordinatorId: customer.cordinatorId,
      cordinatorCollege: customer.cordinatorCollege,
      cordinatorPhone: customer.cordinatorPhone,
      cordinatorEmail: customer.cordinatorEmail,
      cordinatorImage: customer.cordinatorImage,
      _id: customer._id
    });

    setmodal_list(true);
  }

  const removefun = (customer) => {
    const Id = customer._id;
    axios.delete(`${BaseUrl}/api/delete-Faculty-Coordinator/${Id}`)
    .then((res) => {
      toast.warn('Faculty Removed Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.href = "/EditFaculty";
    }).catch((er) => {
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
    });
  }

  const columns = [
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13px" }}>PhotoGraph</span>,
      selector: row => row.cordinatorImage,
      width: "110px",
      cell: (ele) => (
        <img className="img-fluid rounded-circle" style={{ height: "70px", width: "68px", margin: "5px 0px" }} src={`${BaseUrl}/public/${ele.cordinatorImage}`} alt={ele?.cordinatorId ?? "Cord"} />
      ),
      sortable: true
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>Name</span>,
      selector: row => row.cordinatorName,
      sortable: true,
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>College ID</span>,
      selector: row => row.cordinatorId,
      sortable: true,
      width: "110px",
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>Email</span>,
      selector: row => (
        <a href={`mailto:${row.cordinatorEmail}`}>{row.cordinatorEmail}</a>
      ),
      sortable: true,
      width: "150px"
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>Phone</span>,
      selector: row => row.cordinatorPhone,
      sortable: true,
      width: "102px"
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>College</span>,
      selector: row => row.cordinatorCollege,
      sortable: true,
      width: "92px"
    },
    {
      name: <span className='font-weight-bold fs-13' style={{ fontWeight: "900", fontSize: "13.5px" }}>Action</span>,
      sortable: true,
      width: "150px",
      cell: (ele) => {
        return (
          <div className="d-flex gap-2">
            <div className="edit">
              <button
                className="btn btn-sm btn-success edit-item-btn"
                onClick={() => editfun(ele)}
                style={{ height: "30px", width: 50 }}
              >
                Edit
              </button>
            </div>
            <div className="remove">
              <button
                className="btn btn-sm btn-danger remove-item-btn"
                onClick={() => removefun(ele)}
                style={{ height: "30px", width: "70px" }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Faculty Admins" breadcrumbItem="Edit Faculty Admin" />
          <Row className="g-4 mb-3">
            <Col className="col-sm">
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search..."
                    style={{ border: 'none', paddingRight: '30px' }}
                  />
                  <i
                    className="ri-search-line search-icon"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: '#aaa'
                    }}
                  ></i>
                </div>
              </div>
            </Col>
          </Row>
          <DataTable
            columns={columns}
            data={fakedata}
            pagination
          />
        </Container>
      </div>
      {/* Modal Component */}
      <EditFacultyForm
        isOpen={modal_list}
        toggle={() => setmodal_list(!modal_list)}
        initialData={defaultValues}
      />
      <ToastContainer />
    </React.Fragment>
  );
}

export default EditFaculty;
