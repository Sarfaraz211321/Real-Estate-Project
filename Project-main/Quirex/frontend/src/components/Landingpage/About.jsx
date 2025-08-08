// import React from 'react'
// import { FaCarSide } from "react-icons/fa";
// import { FaBed } from "react-icons/fa";
// import { FaBath } from "react-icons/fa";
// import { FiSquare } from "react-icons/fi";
// import Navbar from './Navbar'
// import { useLocation } from "react-router-dom"; 
// const About = () => {
//   const location= useLocation();
//   return (
//     <>
//        {location?.pathname!='/'&&<Navbar/>}
//     <div className="container py-5">
//     <div className="row align-items-center">
//       {/* Left Section */}
//       <div className="col-md-6">
//         <span className="badge bg-light text-danger px-3 py-2 mb-2 fw-semibold"><h6>About Us</h6></span>
//         <h2 className="fw-bold">Today Sells Properties</h2>
//         <p className="text-muted">
//           Houzez allows you to design unlimited panels and real estate <br /> custom forms
//           to capture leads and keep record of all information.
//         </p>

//         <ul className="list-unstyled text-muted">
//           <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
//           <li><i className="text-danger me-2">—</i> Our Secret Island Boat Tour is Just for You</li>
//           <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
//           <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
//         </ul>

//         <div className="d-flex flex-wrap mt-3">
//           <div className="me-4 mb-2 text-center">
//             <h5 className="mb-0 fw-bold">3 <FaBed /></h5>
//             <small className="text-muted">Bedrooms</small>
//           </div>
//           <div className="me-4 mb-2 text-center">
//             <h5 className="mb-0 fw-bold">2 <FaBath /></h5>
//             <small className="text-muted">Bathrooms</small>
//           </div>
//           <div className="me-4 mb-2 text-center">
//             <h5 className="mb-0 fw-bold">2 <FaCarSide /></h5>
//             <small className="text-muted">Car Parking</small>
//           </div>
//           <div className="mb-2 text-center">
//             <h5 className="mb-0 fw-bold">3450 <FiSquare /></h5>
//             <small className="text-muted">Square Ft</small>
//           </div>
//         </div><br /><br /><br />
//         <div className="row">
//         <div className="col-md-4">
//           <img
//           src="livingroom.jpg" 
//           style={{height:200 ,width:700}}
//           className="img-fluid rounded mb-3" 
//           alt="Living Room" />
//           </div>
//         <div className="col-md-4">
//           <img
//           src="kitchen.jpg" 
//           style={{height:200 ,width:700}}
//           className="img-fluid rounded mb-3" 
//           alt="kitchen" />
//           </div>
//         <div className="col-md-4">
//           <img
//           src="room.jpg" 
//           style={{height:200 ,width:700}}
//           className="img-fluid rounded mb-3" 
//           alt="room" />
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="col-md-6 mt-4 mt-md-0">
//         <div className="row g-2">
//           <div className="col-12">
//             <img
//               src="lhouse.jpeg"
//               className="img-fluid rounded"
//               alt="Main"
//             />
//           </div>
//           <div className="col-6">
//             <img
//               src="bathroom.jpg"
//               style={{height:200 ,width:312}}
//               className="img-fluid rounded"
//               alt="Kitchen"
//             />
//           </div>
//           <div className="col-6">
//             <img
//               src="bedroom.webp"
//               style={{height:200 ,width:312}}
//               className="img-fluid rounded"
//               alt="Exterior"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default About








import React from 'react'
import { FaCarSide, FaBed, FaBath } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";
import Navbar from './Navbar';
import { useLocation } from "react-router-dom"; 

const About = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname !== '/' && <Navbar />}

      <div className="container py-5" data-aos="fade-up">
        <div className="row align-items-center">
          
          {/* Left Section */}
          <div className="col-md-6" data-aos="fade-right">
            <span className="badge bg-light text-danger px-3 py-2 mb-2 fw-semibold" data-aos="fade-down"><h6>About Us</h6></span>
            <h2 className="fw-bold" data-aos="zoom-in" data-aos-delay="100">Today Sells Properties</h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Houzez allows you to design unlimited panels and real estate <br />
              custom forms to capture leads and keep record of all information.
            </p>

            <ul className="list-unstyled text-muted" data-aos="fade-left" data-aos-delay="300">
              <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
              <li><i className="text-danger me-2">—</i> Our Secret Island Boat Tour is Just for You</li>
              <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
              <li><i className="text-danger me-2">—</i> Live Music Concerts at Luviana</li>
            </ul>

            <div className="d-flex flex-wrap mt-3" data-aos="zoom-in-up" data-aos-delay="400">
              <div className="me-4 mb-2 text-center">
                <h5 className="mb-0 fw-bold">3 <FaBed /></h5>
                <small className="text-muted">Bedrooms</small>
              </div>
              <div className="me-4 mb-2 text-center">
                <h5 className="mb-0 fw-bold">2 <FaBath /></h5>
                <small className="text-muted">Bathrooms</small>
              </div>
              <div className="me-4 mb-2 text-center">
                <h5 className="mb-0 fw-bold">2 <FaCarSide /></h5>
                <small className="text-muted">Car Parking</small>
              </div>
              <div className="mb-2 text-center">
                <h5 className="mb-0 fw-bold">3450 <FiSquare /></h5>
                <small className="text-muted">Square Ft</small>
              </div>
            </div>

            <br /><br /><br />

            <div className="row">
              <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                <img
                  src="livingroom.jpg"
                  style={{ height: 200, width: 700 }}
                  className="img-fluid rounded mb-3"
                  alt="Living Room"
                />
              </div>
              <div className="col-md-4" data-aos="flip-up" data-aos-delay="200">
                <img
                  src="kitchen.jpg"
                  style={{ height: 200, width: 700 }}
                  className="img-fluid rounded mb-3"
                  alt="Kitchen"
                />
              </div>
              <div className="col-md-4" data-aos="flip-right" data-aos-delay="300">
                <img
                  src="room.jpg"
                  style={{ height: 200, width: 700 }}
                  className="img-fluid rounded mb-3"
                  alt="Room"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left">
            <div className="row g-2">
              <div className="col-12" data-aos="zoom-in" data-aos-delay="100">
                <img
                  src="lhouse.jpeg"
                  className="img-fluid rounded"
                  alt="Main"
                />
              </div>
              <div className="col-6" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="bathroom.jpg"
                  style={{ height: 200, width: 312 }}
                  className="img-fluid rounded"
                  alt="Bathroom"
                />
              </div>
              <div className="col-6" data-aos="fade-down" data-aos-delay="300">
                <img
                  src="bedroom.webp"
                  style={{ height: 200, width: 312 }}
                  className="img-fluid rounded"
                  alt="Bedroom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;