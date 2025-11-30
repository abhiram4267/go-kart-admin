import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
import "./masonry.css";
import axios from "axios";
import "./departmentscards.css"
import { useState, useEffect } from "react";
// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Sample department images
import img1 from "../../assets/images/DSP.png";
import img2 from "../../assets/images/Hanumanthu.png";
import img3 from "../../assets/images/Kishore.png";
import img4 from "../../assets/images/Girish.png";

const EventCatagory = () => {
  document.title = "Go-Karting | Admin";
  const BaseUrl = process.env.REACT_APP_BASEURL;
  const [eventCatagoryName, setEventCatagoryName] = useState([]);
  useEffect(() => {
    axios
      .get(BaseUrl + "/api/view-Event-Category")
      .then((res) => {
        console.log(res.data);

        // res.data.map((item) => {
        //   let [year, month, day] = item.eventCatDate.split('-');
        //   item.eventCatDate = `${day}-${month}-${year}`;
        // });
    
        setEventCatagoryName(res.data);
    })
    
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
        <div className='page-content'>
            <div className='DepartmentCard'>
                {eventCatagoryName.map((data, index) => {
                    return (
                        <div style={{ color: 'white', fontSize: '16px', display: 'flex', flexDirection: 'column' }} className='catagory'>
                          <div style={{ width: 75, height: 75, borderRadius: 50, overflow: 'hidden' }}>
                            <img src={`${BaseUrl}/public/${data.eventCatImage}`} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                                  Event Name:  {data.eventCatName}
                                  <div style={{fontSize: '16px'}}>Event Date:  {data.eventCatDate}</div>
                                  <div style={{fontSize: '16px'}}>Event Time:  {data.eventCatTime}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </React.Fragment>
);
};

export default EventCatagory;
