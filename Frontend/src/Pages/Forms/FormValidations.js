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
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../cardUpdate.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { set } from "lodash";

const FormValidations = ({ onFormSubmit }) => {
  document.title = "Go-Karting | Admin";
  const BaseUrl = process.env.REACT_APP_BASEURL;
  const DummyTeamsData = [
    {'RCB': 1234},
    {'CSK': 1123},
    {'MI': 1211},
    {'KKR': 1941},
    {'DC': 1111},
    {'PBK': 1344},
  ];


  const [FormData, setFormData] = useState({
    EventName: "",
    TeamName: "",
    TeamID: '',
    Time: '',
    Penality: '',
    Laps: '',
    Score: ''
  });
  const [AllRegisteredTeams, setAllRegisteredTeams] = useState(DummyTeamsData);
  const [AllEvents, setAllEvents] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const [showLaps, setShowLaps] = useState(false);

  const HandleSubmit = () => {
    console.log(FormData);
    axios.post(`${BaseUrl}/api/add-Live-Score`, FormData)
      .then((res) => {
        console.log(res);
        toast.success('Event Added Successfully!', {
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
      setFormData({
        EventName: "",
        TeamName: "",
        TeamID: '',
        Time: '',
        Penality: '',
        Laps: '',
        Score: ''
      });
      }).catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    axios.get(`${BaseUrl}/api/view-Event-Category`)
    .then((res) => {
      setAllEvents(res.data);
    })
    .catch((err) => {
      console.log("error");
    })


    axios.get(`${BaseUrl}/api/get-Team-Details`)
    .then((res) => {
      console.log(res);
      const resultData = res.data.map((data) => {
        return {
          [data.teamName] : data.uniqueTeamCode
        }
      })
      console.log(resultData);
      setAllRegisteredTeams(resultData);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if(FormData.EventName.toUpperCase() === 'ENDURANCE' || FormData.EventName.toUpperCase() === 'SKID PAD' || FormData.EventName.toUpperCase() === 'SKIDPAD' || FormData.EventName.toUpperCase() === 'AUTOCROSS' || FormData.EventName.toUpperCase() === 'AUTO CROSS'){
      setShowTime(true);
      if(FormData.EventName.toUpperCase() === 'ENDURANCE'){
        setShowLaps(true);
      }
      else{
        setShowLaps(false);
      }
    }
    else{
      setShowLaps(false);
      setShowTime(false);
    }
  }, [FormData])

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      EventName: "",
      TeamName: "",
      TeamID: '',
      Time: '',
      Penality: '',
      Laps: '',
      Score: ''
    },
    validationSchema: Yup.object({
      EventName: Yup.string().required("Please Enter the Event Name"),
      TeamName: Yup.string().required("Please Enter the Team Name"),
      Time: Yup.string().required("Please Enter the Time"),
      Penality: Yup.string().required("Please Enter the Penality"),
      Score: Yup.string().required("Please Enter the Score"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted successfully");
      console.log("Form values:", values);

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
          <Breadcrumbs title="BRANCH - Scores" breadcrumbItem="Add Scores Form" />
          <Row>
            <Col className="cardBodyParent">
              <Card className="cardBody">
                <CardBody>
                  <h4 className="card-title">Add Scores Form</h4>
                  <p className="card-title-desc">Please Provide Valid Details.</p>
                  <Form onSubmit={validation.handleSubmit}>
                    <Row>
                      <Col lg="6" className="mb-3">
                        <label htmlFor="eventCatagoryName">Select Event Name:</label>
                        <select
                          id="eventName"
                          name="eventName"
                          value={FormData.EventName}
                          onChange={(e) => {
                            setFormData(prevData => ({
                              ...prevData,
                              EventName: e.target.value
                            }));
                          }}
                          onBlur={validation.handleBlur}
                          className="form-select"
                        >
                          <option value="">Select Event</option>
                          {AllEvents.map((event, index) => (
                            <option key={index} value={event.eventCatName}>{event.eventCatName}</option>
                          ))}
                        </select>
                        {validation.touched.EventName && validation.errors.EventName && (
                          <FormFeedback>{validation.errors.EventName}</FormFeedback>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" className="mb-3">
                        <label htmlFor="teamName">Select Team Name:</label>
                        <select
                          id="teamName"
                          name="TeamName"
                          value={FormData.TeamName}
                          onChange={(e) => {
                            const selectedTeamName = e.target.value;
                            const selectedTeam = AllRegisteredTeams.find(item => item.hasOwnProperty(selectedTeamName));
                            const selectedTeamId = selectedTeam ? selectedTeam[selectedTeamName] : null;
                            setFormData(prevData => ({
                              ...prevData,
                              TeamName: selectedTeamName,
                              TeamID: selectedTeamId
                            }));
                          }}
                          onBlur={validation.handleBlur}
                          className="form-select"
                        >
                          <option value="">Select Team</option>
                          {AllRegisteredTeams.map((teamData, index) => {
                            const teamName = Object.keys(teamData)[0];
                            return (
                              <option key={teamName} value={teamName}>
                                {teamName}
                              </option>
                            );
                          })}
                        </select>
                        {validation.touched.TeamName && validation.errors.TeamName && (
                          <FormFeedback>{validation.errors.TeamName}</FormFeedback>
                        )}
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="teamId">Team ID</Label>
                          <Input
                            name="TeamID"
                            placeholder="Team ID"
                            type="text"
                            value={FormData.TeamID}
                            disabled
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" style={{display: showTime ? "block": "none"}}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="time">Time</Label>
                          <Input
                            name="Time"
                            placeholder="Time"
                            type="number"
                            value={FormData.Time}
                            onChange={(e) => {
                              setFormData(prevData => ({
                                ...prevData,
                                Time: e.target.value
                              }));
                            }}
                          />
                          {validation.touched.Time && validation.errors.Time && (
                            <FormFeedback>{validation.errors.Time}</FormFeedback>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6" style={{display: showLaps ? "block": "none"}}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="laps">Laps</Label>
                          <Input
                            name="Laps"
                            placeholder="Laps"
                            type="number"
                            value={FormData.Laps}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="penality">Penality</Label>
                          <Input
                            name="Penality"
                            placeholder="Penality"
                            type="number"
                            value={FormData.Penality}
                            onChange={(e) => {
                              setFormData(prevData => ({
                                ...prevData,
                                Penality: e.target.value
                              }));
                            }}
                          />
                          {validation.touched.Penality && validation.errors.Penality && (
                            <FormFeedback>{validation.errors.Penality}</FormFeedback>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="score">Score</Label>
                          <Input
                            name="Score"
                            placeholder="Score"
                            type="number"
                            value={FormData.Score}
                            onChange={(e) => {
                              setFormData(prevData => ({
                                ...prevData,
                                Score: e.target.value
                              }));
                            }}
                          />
                          {validation.touched.Score && validation.errors.Score && (
                            <FormFeedback>{validation.errors.Score}</FormFeedback>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit" onClick={() => HandleSubmit()}>
                          Submit
                        </Button>
                      </Col>
                    </Row>
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

export default FormValidations;
