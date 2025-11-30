// import React, { useState, useEffect, useMemo } from "react";
// import DataTable from "react-data-table-component";
// import OtherCollegePaymentDetails from "./secondrootdashboardtwo.js";


// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import {
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Input,
//   UncontrolledDropdown,
// } from "reactstrap";
// import axios from "axios";
// import { ThreeDots } from "react-loader-spinner";


// const AlternativePagination = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const exportToExcel = (data) => {
//     // Create a new workbook and a worksheet
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.json_to_sheet(data);

//     // Append the worksheet to the workbook
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // Convert workbook to binary and save it
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(
//       new Blob([wbout], { type: "application/octet-stream" }),
//       "data.xlsx"
//     );
//   };

//   const [loader, setloader] = useState(false);
//   const [userBranch, setuserBranch] = useState();
//   const BASE_URL = process.env.REACT_APP_BASEURL;
//   const [tabledata, settabledata] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("authUser"));
//     setuserBranch(user.userBranch);
//     setloader(true);
//     axios
//       .get(BASE_URL + "/api/get-AllTeams-Details" )
//       .then((res) => {
//         console.log(res.TeamDetails);
//         settabledata(res.TeamDetails);
//         setFilteredData(res.TeamDetails);
//         setloader(false);
//       })
//       .catch((err) => {
//         setloader(false);
//         console.log(err);
//       });
//   }, []);
//   const columns = [
//     {
//       name: <span className="font-weight-bold fs-15"><b>S.No</b></span>,
//       selector: (row, index) => index+1,
//       sortable: true,
//       width: "75px",
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>Team Name</b></span>,
//       selector: (row) => row.teamName,
//       sortable: true,
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>Team Code</b></span>,
//       selector: (row) => row.uniqueTeamCode,
//       sortable: true,
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>College Name</b></span>,
//       selector: (row) => row.collegeName,
//       sortable: true,
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>Captain Name</b></span>,
//       selector: (row) => row.captainName,
//       sortable: true,
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>Vice Captain Name</b></span>,
//       selector: (row) => row.viceCaptainName,
//       sortable: true,
//     },
//     {
//       name: <span className="font-weight-bold fs-15"><b>Team Size</b></span>,
//       selector: (row) => row.teamSize,
//       sortable: true,
//     },
    
    
//     // {
//     //   name: <span className="font-weight-bold fs-15"><b>EVENT CATRGORY</b></span>,
//     //   selector: (row) => row.userEventCategory,
//     //   sortable: true,
//     // },
//     // {
//     //   name: <span className="font-weight-bold fs-15"><b>EVENT</b></span>,
//     //   selector: (row) => row.userEvent,
//     //   sortable: true,
//     // },
//     // {
//     //   name: <span className="font-weight-bold fs-15"><b>College</b></span>,
//     //   selector: (row) => row.userCollege,
//     //   sortable: true,
//     // },
//     // {
//     //   name: <span className="font-weight-bold fs-15"><b>TEAM CODE</b></span>,
//     //   selector: (row) => row.userTeamCode,
//     //   sortable: true,
//     // },
//     // {
//     //   name: <span className="font-weight-bold fs-15"><b>PAID ON</b></span>,
//     //   selector: (row) => row.createdAt,
//     //   sortable: true,
//     // },




//     // {
//     //   name: <span className="font-weight-bold fs-15">Volume %</span>,
//     //   sortable: true,
//     //   selector: (cell) => {
//     //     return (
//     //       <h6 className={"fs-15 mb-0 text-" + cell.volumeClass}>
//     //         {" "}
//     //         <i className={"align-middle me-1 " + cell.icon}></i>https://adityauniversity.in/
//     //         {cell.volume}
//     //       </h6>
//     //     );
//     //   },
//     // },
//     // {
//     //   name: <span className="font-weight-bold fs-15">Action</span>,
//     //   sortable: true,
//     //   cell: () => {
//     //     return <button className="btn btn-sm btn-soft-info">Trade Now</button>;
//     //   },
//     // },
//   ];
//   const Search = (event) => {
//     if (event.target.value.trim() === '') {
//       // If search query is empty, show all records
//       setFilteredData(tabledata);
//     }
//     else {
//       const lowercasedQuery = event.target.value.toLowerCase();
//       const filtered = tabledata.filter(item =>
//         Object.values(item).some(value =>
//           value.toString().toLowerCase().includes(lowercasedQuery)
//         )
//       );
//       setFilteredData(filtered);
//     }
//   }
//   //   const data = [
//   //     {
//   //       srNo: "01",
//   //       currency: [btc, "Bitcoin (BTC)"],
//   //       price: "$47,071.60",
//   //       pairs: "BTC/USD",
//   //       high: "$28,722.76",
//   //       low: "$68,789.63",
//   //       marketVolume: "$888,411,910",
//   //       volume: "1.50%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "02",
//   //       currency: [eth, "Ethereum (ETH)"],
//   //       price: "$3,813.14",
//   //       pairs: "ETH/USDT",
//   //       high: "$4,036.24",
//   //       low: "$3,588.14",
//   //       marketVolume: "$314,520,675",
//   //       volume: "0.42%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //     {
//   //       srNo: "03",
//   //       currency: [ltc, "Litecoin (LTC)"],
//   //       price: "$149.65",
//   //       pairs: "LTC/USDT",
//   //       high: "$412.96",
//   //       low: "$104.33",
//   //       marketVolume: "$314,520,675",
//   //       volume: "0.89%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "04",
//   //       currency: [xmr, "Monero (XMR)"],
//   //       price: "$17,491.16",
//   //       pairs: "XRM/USDT",
//   //       high: "$31,578.35",
//   //       low: "$8691.75",
//   //       marketVolume: "$9,847,327",
//   //       volume: "1.92%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "05",
//   //       currency: [ant, "Aragon (ANT)"],
//   //       price: "$172.93",
//   //       pairs: "SOL/USD",
//   //       high: "$178.37",
//   //       low: "$172.3",
//   //       marketVolume: "$40,559,274",
//   //       volume: "2.87%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //     {
//   //       srNo: "06",
//   //       currency: [sol, "Solana (SOL)"],
//   //       price: "$17,491.16",
//   //       pairs: "XRM/USDT",
//   //       high: "$31,578.35",
//   //       low: "$8691.75",
//   //       marketVolume: "$9,847,327",
//   //       volume: "1.92%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "07",
//   //       currency: [fil, "Filecoin (FIL)"],
//   //       price: "$13.31",
//   //       pairs: "ANT/USD",
//   //       high: "$13.85",
//   //       low: "$12.53",
//   //       marketVolume: "$156,209,195.18",
//   //       volume: "3.96%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "08",
//   //       currency: [fil, "Filecoin (FIL)"],
//   //       price: "$35.21",
//   //       pairs: "FIL/USD",
//   //       high: "$36.41",
//   //       low: "$35.03",
//   //       marketVolume: "$374,618,945.51",
//   //       volume: "0.84%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //     {
//   //       srNo: "09",
//   //       currency: [aave, "Aave (AAVE)"],
//   //       price: "$275.47",
//   //       pairs: "AAVE/USDT",
//   //       high: "$277.11",
//   //       low: "$255.01",
//   //       marketVolume: "$156,209,195.18",
//   //       volume: "8.20%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "10",
//   //       currency: [ada, "Cardano (ADA)"],
//   //       price: "$1.35",
//   //       pairs: "ADA/USD",
//   //       high: "$1.39",
//   //       low: "$1.32",
//   //       marketVolume: "$880,387,980.14",
//   //       volume: "0.42%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //     {
//   //       srNo: "11",
//   //       currency: [fil, "Filecoin (FIL)"],
//   //       price: "$35.21",
//   //       pairs: "FIL/USD",
//   //       high: "$36.41",
//   //       low: "$35.03",
//   //       marketVolume: "$374,618,945.51",
//   //       volume: "0.84%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //     {
//   //       srNo: "12",
//   //       currency: [aave, "Aave (AAVE)"],
//   //       price: "$275.47",
//   //       pairs: "AAVE/USDT",
//   //       high: "$277.11",
//   //       low: "$255.01",
//   //       marketVolume: "$156,209,195.18",
//   //       volume: "8.20%",
//   //       icon: "mdi mdi-trending-up",
//   //       volumeClass: "success",
//   //     },
//   //     {
//   //       srNo: "13",
//   //       currency: [ada, "Cardano (ADA)"],
//   //       price: "$1.35",
//   //       pairs: "ADA/USD",
//   //       high: "$1.39",
//   //       low: "$1.32",
//   //       marketVolume: "$880,387,980.14",
//   //       volume: "0.42%",
//   //       icon: "mdi mdi-trending-down",
//   //       volumeClass: "danger",
//   //     },
//   //   ];
//   return (
//     <div
//       style={{
//         marginTop: "80px",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <div className="my-3"
//         style={{
//           width: "90%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignContent: 'center',
//         }}
//       >
//         <Input
//           name="email"
//           className="form-control"
//           placeholder="Search here...."
//           type="text"
//           onChange={(event) => Search(event)}
//           style={{ width: "300px", height: "40px" }}
//         />
//         <button
//           type="button"
//           className="btn btn-primary waves-effect waves-light"
//           onClick={() => exportToExcel(filteredData)}
//         >
//           Download Excel
//         </button>


//       </div>
//       {loader ? (
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             height: "fit-content",
//             alignItems: "center",
//           }}
//         >
//           {" "}
//           <ThreeDots
//             visible={true}
//             height="120"
//             width="120"
//             color="#4fa94d"
//             radius="9"
//             ariaLabel="three-dots-loading"
//             wrapperStyle={{}}
//             wrapperClass=""
//           />{" "}
//         </div>
//       ) : (
//         <div style={{ width: "90%" }}>
//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             paginationPerPage={8}
//           />
//           <br></br>
//           <div style={{ width: '100%', marginBottom: '20px', height: '700px' }}>
//             <OtherCollegePaymentDetails />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default AlternativePagination;


import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import OtherCollegePaymentDetails from "./secondrootdashboardtwo.js";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Input } from "reactstrap";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const AlternativePagination = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [userBranch, setUserBranch] = useState();
  const [tableData, setTableData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null); // For storing the selected team
  const BASE_URL = process.env.REACT_APP_BASEURL;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser"));
    setUserBranch(user.userBranch);
    setLoader(true);
    axios
      .get(BASE_URL + "/api/get-AllTeams-Details")
      .then((res) => {
        setTableData(res.TeamDetails);
        setFilteredData(res.TeamDetails);
        console.log(res.TeamDetails);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, []);

  const columns = [
    {
      name: <span className="font-weight-bold fs-15"><b>S.No</b></span>,
      selector: (row, index) => index + 1,
      sortable: true,
      width: "75px",
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Team Name</b></span>,
      selector: (row) => row.teamName,
      sortable: true,
      style: {
        wordBreak: 'break-word',   // Break long words onto the next line
        whiteSpace: 'normal',      // Allow text to wrap to the next line
        overflow: 'hidden',        // Hide anything that overflows
        minWidth: '150px',         // Set a minimum width if needed
      }
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Team Code</b></span>,
      selector: (row) => row.uniqueTeamCode,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '120px',
      },
    },
    {
      name: <span className="font-weight-bold fs-15"><b>College Name</b></span>,
      selector: (row) => row.collegeName,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '200px',  // Allow more width for longer names
      },
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Faculty Adviser Name</b></span>,
      selector: (row) => row.facultyAdviserName,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '150px',
      },
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Faculty Adviser Contact</b></span>,
      selector: (row) => row.facultyAdviserContact,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '150px',
      },
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Captain Name</b></span>,
      selector: (row) => row.captainName,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '150px',  // Minimum width for captain's name
      },
    },
    
    {
      name: <span className="font-weight-bold fs-15"><b>Team Size</b></span>,
      selector: (row) => row.teamSize,
      sortable: true,
      style: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        minWidth: '100px',  // Team size should be small, but keep it flexible
      },
    },
    {
      name: <span className="font-weight-bold fs-15"><b>Action</b></span>,
      cell: (row) => (
        <button
          className="btn btn-sm btn-success"
          onClick={() => handleViewMore(row)}
        >
          View Entire Team
        </button>
      ),
    },
  ];
  

  const handleViewMore = (row) => {
    // Set the selected team details to view in the OtherCollegePaymentDetails component
    setSelectedTeam(row);
  };

  const exportToExcel = (filteredData) => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
  
    // Add custom heading with team name
    const wsData = [
      ["S.No", "College Name", "Team Name", "Team Code", "Team Mail","Team Size", "Team Captain", "Captain Contact", "Team Vice Captain", "Vice Captain Contact", "Faculty Adviser Name", "Faculty Adviser Contact"], // Column headers
      ...filteredData.map((item, index) => [index+1,item.collegeName, item.teamName, item.uniqueTeamCode, item.teamMailID, item.teamSize, item.captainName, item.captainContact, item.viceCaptainName, item.viceCaptainContact, item.facultyAdviserName, item.facultyAdviserContact]), // Filtered data rows
    ];
  
    // Convert the data into a sheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);
  
    // Append the sheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  
    // Write the workbook to an array buffer
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${day}-${month}-${year}`;
    };

    const date = formatDate(new Date());
  
    // Save the file with the name: `teamName_Members.xlsx`
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), `TeamsOverViewData${date}.xlsx`);
  };
  

  const Search = (event) => {
    if (event.target.value.trim() === '') {
      setFilteredData(tableData);
    } else {
      const lowercasedQuery = event.target.value.toLowerCase();
      const filtered = tableData.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(lowercasedQuery)
        )
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div
      style={{
        marginTop: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="my-3"
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Input
          name="search"
          className="form-control"
          placeholder="Search here...."
          type="text"
          onChange={Search}
          style={{ width: "300px", height: "40px" }}
        />
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          onClick={() => exportToExcel(filteredData)}
        >
          Download Excel
        </button>
      </div>
      {loader ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <ThreeDots
            visible={true}
            height="120"
            width="120"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <div style={{ width: "90%" }}>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            paginationPerPage={8}
          />
          {selectedTeam && (
            <div style={{ marginTop: "20px", width: "100%" }}>
              <OtherCollegePaymentDetails team={selectedTeam} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlternativePagination;
