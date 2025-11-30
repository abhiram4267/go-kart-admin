import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./masonry.css";
import "./AdminCard.css"
import coordinator from "./coorinatorr.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import img1 from "../../assets/images/DSP.png"
import img2 from "../../assets/images/Hanumanthu.png"
import img3 from "../../assets/images/Kishore.png"
import img4 from "../../assets/images/Girish.png"

const FacultyAdminCards = () => {
        document.title = "Go-Karting | Admin";
        const BaseURL = process.env.REACT_APP_BASEURL;
        const breakpointColumnsObj = {
            default: 3,
            1100: 3,
            700: 2,
            500: 1
        };
        const [fakedata, setfakedata] = useState([]);
        const [Loading, setLoading] = useState(true);
        const divisions = ['ACET', 'AEC', 'ACOE'];

        useEffect(() => {

            toast.info("Loading data, please wait...", {
                position: "top-right",
                autoClose: false, // Don't auto-close the toast
                closeOnClick: false, // Prevent closing the toast on click
            });


            axios.get(BaseURL + "/api/view-Faculty-Coordinator")
                .then(res => {
                    setfakedata(res.data);
                    setLoading(false);
                    toast.dismiss();
                    // console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    toast.error("Failed to load data.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                })
        }, [])
        const maxLength = 20;
        // useEffect(() => {
        //     const checkImage = (division, EmpId, callback) => {
        //         const img = new Image();
        //         const url = `https://info.aec.edu.in/${division}/employeephotos/${EmpId}.jpg`;

        //         img.onload = () => {

        //             setValidUrls(prev => ({...prev, [EmpId]: url}));
        //             callback(url); 
        //         };

        //         img.onerror = () => {
        //             callback(null); 
        //         };

        //         img.src = url;
        //     };

        //     const findValidUrl = (idx, EmpId, callback) => {

        //         const attemptDivision = (divisionIndex) => {
        //             if (divisionIndex >= divisions.length) {
        //                 callback(coordinator); 
        //                 return;
        //             }

        //             checkImage(divisions[divisionIndex], EmpId, (url) => {

        //                 if (url) {
        //                     callback(url);
        //                 } else {
        //                     attemptDivision(divisionIndex + 1);
        //                 }
        //             });
        //         };

        //         attemptDivision(0);
        //     };

        //     const updateValidUrls = async () => {
        //         // console.log(fakedata);
        //         const urls = await Promise.all(fakedata.map((item, idx) => {

        //             new Promise((resolve) => {
        //                 if (item?.cordinatorId) {
        //                     // console.log('firstttt')
        //                     findValidUrl(idx, item.cordinatorId.trim(), resolve);
        //                 } else {
        //                     resolve(coordinator); 
        //                 }
        //             })
        //     }));

        //     };

        //     updateValidUrls();
        // }, [fakedata]);
        return (
            <>
                <div className='page-content'>
                    <div className='fcardParent'>

                        {Loading ? (
                            <></>
                        ) : fakedata.length > 0 ? (
                            fakedata.map((data, index) => (
                                <div style={{ color: 'white' }} className='fcard' key={index}>
                                    <div className='ftop'>
                                        <div className='ftl'>
                                            <img src={`${BaseURL}/public/${data.FacultyCoordinatorImage}`} alt={data.FacultyCoordinatorName} />
                                        </div>
                                        <div className='ftr'>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontWeight: 'bold' }}>Name : </td>
                                                        <td title={data.FacultyCoordinatorName}>
                                                            {data.FacultyCoordinatorName ? data.FacultyCoordinatorName.length > maxLength ? `${data.FacultyCoordinatorName.substring(0, maxLength)}...` : data.FacultyCoordinatorName : " "}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontWeight: 'bold' }}>Emp ID : </td>
                                                        <td>{data.FacultyCoordinatorCollegeId}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontWeight: 'bold' }}>Contact: </td>
                                                        <td>{data.FacultyCoordinatorMobile}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='fcenter'>
                                        <div className='fcc' style={{ fontSize: '18px' }}>{data.FacultyCoordinatorCollege?.toUpperCase()}</div>
                                    </div>
                                    <div className='fbot'>
                                        <p className='fgmail'>{data.FacultyCoordinatorEmail}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h1>No Coordinator Data Provided At...</h1>
                            </div>
                        )}
                    </div>
                </div>

                {/* ToastContainer for displaying toasts */}
                <ToastContainer />
            </>
        );

    };

export default FacultyAdminCards;