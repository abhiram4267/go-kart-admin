import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";




const LineColumnArea = () => {

  const [data, setdata] = useState({});
  const [xaxis, setxAxis] = useState([]);
  const [yaxis, setyAxis] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASEURL;
  const [userBranch , setuserBranch] = useState("")

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("authUser"))
    setuserBranch(user.userBranch)
  } , [])

  useEffect(() => {
    axios.get(BASE_URL + '/api/get-College-Wise' )
      .then((res) => {
        setdata(res.CollegeWise);
        // console.log('/api/total-reg-in-each-dept/')
        var ar = [];
        var br = [];
        Object.entries(res.CollegeWise).map(ele => {
          if(ele[1]._id.length > 10){
            ar.push(ele[1]._id.slice(0,10)+"...")
          }
          else{
          ar.push(ele[1]._id);
          }
          br.push(ele[1].count);
        })
        setxAxis(ar);
        setyAxis(br);
        // console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [userBranch]);
  const LineColumnAreaData = {
    series: [
      {
        name: 'Registrations',
        type: "column",
        data: yaxis,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: [0, 1, 1],
        dashArray: [0, 0, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
        },
      },
      legend: {
        show: false,
      },
      colors: ["#0ab39c", "rgba(212, 218, 221, 0.18)", "rgb(251, 77, 83)"],

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: xaxis,
      markers: {
        size: 0,
      },
      xaxis: {
        type: "month",
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Teams"
            }
            return y
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={LineColumnAreaData.options} //labels
        series={LineColumnAreaData.series} // data
        type="line"
        height="350"
        stacked="false"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

export default LineColumnArea;