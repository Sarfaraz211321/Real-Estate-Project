// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from '../Landingpage/Navbar'

// const  AdminContactUsList = () => {
//   return (
//     <>
//     <Navbar/>
//     <section style={{ backgroundColor: "#FFFFD0", padding: "60px 0" }}>
//       <div className="container text-center mb-4">
//         <h2 className="fw-bold text-danger">Contact Us!</h2>
//       </div>
//       <div className="container d-flex justify-content-center">
//         <div className="p-4 shadow bg-white rounded" style={{ width: "100%", maxWidth: "900px" }}>
//           <form>
//             <div className="row mb-3">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Your Name</label>
//                 <input type="text" className="form-control" placeholder="Enter your name" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Your Email</label>
//                 <input type="email" className="form-control" placeholder="Enter your email" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Phone Number</label>
//                 <input type="text" className="form-control" placeholder="Enter phone number" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Subject</label>
//                 <input type="text" className="form-control" placeholder="Subject" />
//               </div>
//               <div className="col-12 mb-3">
//                 <label className="form-label fw-bold">Message</label>
//                 <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
//               </div>
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-outline-danger px-4">
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default AdminContactUsList;


import React, { useEffect, useState } from 'react'
import Navbar from '../Landingpage/Navbar'
import axios from 'axios'
const AdminContactUsList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {

    const response = await axios.post('http://localhost:3000/api/contact-us-list'

    );
    if (response?.data?.code == 200) {
      setList(response?.data?.data)
    }
  };

  const show = (data) => {
    Swal.fire({
      title: "Message",
      text: data,
      icon: "information"
    })
  }
  return (
    <>
      <Navbar />
      <div className="row">
        <h1 className='text-danger text-center'>Contact List </h1>
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          {/* table ki starting */}
          <table className="table">
            <thead className='table table-dark'>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact No.</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>

              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.contact}</td> 
                      <td>{item?.message}</td>
                      <td onClick={()=>show(item?.message)}>{item?.message?.slice(0, 30)}...</td>

                    </tr>
                  </>)
              })}


            </tbody>
          </table>
          {list?.length == 0 && <p className='text-center'>No Record Found!</p>}

        </div>
        <div className="col-sm-1"></div>
      </div>
    </>
  )
}

export default AdminContactUsList