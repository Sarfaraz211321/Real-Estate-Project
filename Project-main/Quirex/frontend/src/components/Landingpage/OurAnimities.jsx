// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../index.css";
// import { FaCar, FaSwimmer, FaLock, FaStethoscope, FaBook, FaBed, FaHome, FaSlidersH } from "react-icons/fa";

// const OurAnimities = () => {
//   const amenities = [
//     { icon: <FaCar />, title: "Parking Space" },
//     { icon: <FaSwimmer />, title: "Swimming Pool" },
//     { icon: <FaLock />, title: "Private Security" },
//     { icon: <FaStethoscope />, title: "Medical Center" },
//     { icon: <FaBook />, title: "Library Area" },
//     { icon: <FaBed />, title: "King Size Beds" },
//     { icon: <FaHome />, title: "Smart Homes" },
//     { icon: <FaSlidersH />, title: "Flaticon- Slider" },
//   ];

//   return (
//     <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
//       <div className="container text-center">
//         <h6 className="text-danger fw-bold">Our Amenities</h6>
//         <h2 className="fw-bold mb-4">Building Arminities</h2>
//         <div className="row">
//           {amenities.map((item, index) => (
//             <div className="col-md-3 mb-4" key={index}>
//               <div className="border p-4 rounded bg-white shadow-sm">
//                 <div className="text-danger fs-1 mb-3">{item.icon}</div>
//                 <h5 className="fw-bold text-dark">{item.title}</h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurAnimities;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import {
  FaCar,
  FaSwimmer,
  FaLock,
  FaStethoscope,
  FaBook,
  FaBed,
  FaHome,
  FaSlidersH,
} from "react-icons/fa";

const OurAnimities = () => {
  const amenities = [
    { icon: <FaCar />, title: "Parking Space" },
    { icon: <FaSwimmer />, title: "Swimming Pool" },
    { icon: <FaLock />, title: "Private Security" },
    { icon: <FaStethoscope />, title: "Medical Center" },
    { icon: <FaBook />, title: "Library Area" },
    { icon: <FaBed />, title: "King Size Beds" },
    { icon: <FaHome />, title: "Smart Homes" },
    { icon: <FaSlidersH />, title: "Flaticon- Slider" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up">
      <div className="container text-center">
        <h6 className="text-danger fw-bold" data-aos="fade-down">Our Amenities</h6>
        <h2 className="fw-bold mb-4" data-aos="zoom-in" data-aos-delay="100">Building Arminities</h2>

        <div className="row">
          {amenities.map((item, index) => (
            <div
              className="col-md-3 mb-4"
              key={index}
              data-aos="fade-down-right"
              data-aos-delay={index * 100 + 200} // staggered delay
            >
              <div className="border p-4 rounded bg-white shadow-sm">
                <div className="text-danger fs-1 mb-3">{item.icon}</div>
                <h5 className="fw-bold text-dark">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAnimities;