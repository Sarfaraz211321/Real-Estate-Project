
// import React from "react";
// import Navbar from './Navbar';
// import { useLocation } from "react-router-dom"; 

// const Services = () => {
//   const location= useLocation();
//   return (
//     <>
//    {location?.pathname!='/'&&<Navbar/>}
//     <section className="slider-section text-center">
//       <div className="container">
//         <h5 className="text-danger fw-bold"></h5>
//         <p className="text-danger small fw-semibold bg-danger-subtle d-inline px-3 py-1 rounded-pill mb-2 ">Our Services</p>
//         <h2 className="text-center fw-bold mb-5">Our Main Focus</h2>
//         <div className="row justify-content-center gap-4">
//           <div className="col-md-3 bg-white p-4 rounded shadow text-center service-card">
//             <i className="ri-home-4-line fs-1 text-danger mb-3"></i>
//             <h4 className="fw-bold position-relative mb-2">
//               Buy a home
//               <div className="red-underline"></div>
//             </h4>
//             <p className="text-muted">
//               Over 1 million homes for sale available. Find your perfect match today.
//             </p>
//           </div>
//           <div className="col-md-3 bg-white p-4 rounded shadow text-center service-card">
//             <i className="ri-building-line fs-1 text-danger mb-3"></i>
//             <h4 className="fw-bold position-relative mb-2">
//               Rent a home
//               <div className="red-underline"></div>
//             </h4>
//             <p className="text-muted">
//               Browse rental homes and apartments in the best areas near you.
//             </p>
//           </div>
//           <div className="col-md-3 bg-white p-4 rounded shadow text-center service-card">
//             <i className="ri-upload-cloud-line fs-1 text-danger mb-3"></i>
//             <h4 className="fw-bold position-relative mb-2">
//               Sell a home
//               <div className="red-underline"></div>
//             </h4>
//             <p className="text-muted">
//               List your property easily and reach thousands of active buyers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Services;








import React from "react";
import Navbar from './Navbar';
import { useLocation } from "react-router-dom"; 

const Services = () => {
  const location = useLocation();
  return (
    <>
      {location?.pathname !== '/' && <Navbar />}

      <section className="slider-section text-center" data-aos="fade-up">
        <div className="container">
          <h5 className="text-danger fw-bold" data-aos="fade-down-left"></h5>

          <p
            className="text-danger small fw-semibold bg-danger-subtle d-inline px-3 py-1 rounded-pill mb-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Our Services
          </p>

          <h2
            className="text-center fw-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Main Focus
          </h2>

          <div className="row justify-content-center gap-4">
            {/* Card 1 */}
            <div
              className="col-md-3 bg-white p-4 rounded shadow text-center service-card"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <i className="ri-home-4-line fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold position-relative mb-2">
                Buy a home
                <div className="red-underline"></div>
              </h4>
              <p className="text-muted">
                Over 1 million homes for sale available. Find your perfect match today.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="col-md-3 bg-white p-4 rounded shadow text-center service-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="ri-building-line fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold position-relative mb-2">
                Rent a home
                <div className="red-underline"></div>
              </h4>
              <p className="text-muted">
                Browse rental homes and apartments in the best areas near you.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="col-md-3 bg-white p-4 rounded shadow text-center service-card"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <i className="ri-upload-cloud-line fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold position-relative mb-2">
                Sell a home
                <div className="red-underline"></div>
              </h4>
              <p className="text-muted">
                List your property easily and reach thousands of active buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;