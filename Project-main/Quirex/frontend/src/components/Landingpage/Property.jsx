
// import React, { useEffect, useState } from 'react'
// import { BsGeoAltFill } from "react-icons/bs";
// import { AiOutlineCamera } from "react-icons/ai";
// import { BsHouseDoor } from "react-icons/bs";
// import { CiDroplet } from "react-icons/ci";
// import { BiFullscreen } from "react-icons/bi";
// import { BsArrowsAngleExpand } from "react-icons/bs";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { BsClockHistory } from "react-icons/bs";
// import { useLocation,useNavigate } from "react-router-dom";
// import NavBar from './Navbar';
// import axios from 'axios'
// import Swal from 'sweetalert2'

// const listings = [
//     {
//         title: 'New Apartment Nice View',
//         price: '$38,900',
//         location: 'Belmont Gardens, Chicago',
//         img: 'house4.jpg',
//         desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
//         beds: 3,
//         baths: 2,
//         area: 3450,
//         label: 'FOR RENT'
//     },
//     {
//         title: 'Modern Apartments',
//         price: '$40,900',
//         location: 'Belmont Gardens, Chicago',
//         img: 'house6.jpg',
//         desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
//         beds: 3,
//         baths: 2,
//         area: 3450,
//         label: 'FOR RENT'
//     },
//     {
//         title: 'Comfortable Apartment',
//         price: '$30,900',
//         location: 'Belmont Gardens, Chicago',
//         img: 'house2.webp',
//         desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
//         beds: 3,
//         baths: 2,
//         area: 3450,
//         label: 'FOR RENT'
//     },
//     {
//         title: 'Luxury villa in Rego Park',
//         price: '$34,900',
//         location: 'Belmont Gardens, Chicago',
//         img: 'house5.webp',
//         desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
//         beds: 3,
//         baths: 2,
//         area: 3450,
//         label: 'FOR RENT'
//     }
// ];



// const Property = () => {
//   const [listData, setListData] = useState([])
//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     const response = await axios.get('http://localhost:3000/api/property-list');
//     if (response?.data?.code == 200) {
//       setListData(response?.data?.data)
//       console.log(listData)
//     }

//   }

//     const location = useLocation();
//   const navigate=useNavigate();
//     const handleBuy = async (propertyId) => {
//         const userData = JSON.parse(localStorage.getItem('userInfo'));
//       if(!userData?._id){
//         navigate('/login')
//         return
//       }
//         const response = await axios.post('http://localhost:3000/api/buy', { userId: userData?._id, propertyId });
//         console.log(response)
//         if (response?.data?.code == 200) {
//             Swal.fire({
//                 title: "Buy Property",
//                 text: response?.data?.message,
//                 icon: 'success'
//             })
//         } else {
//             Swal.fire({
//                 title: "Buy property",
//                 text: response?.data?.message,
//                 icon: 'error'
//             })
//         }

//     }
//     return (
//         <>
//             {location?.pathname != "/" && <NavBar />}
//             <section className="py-5 bg-light">
//                 <div className="container">
//                     <div className="text-center mb-4">
//                         <span className="badge bg-danger-subtle text-danger mb-2">Properties</span>
//                         <h2 className="fw-bold">Featured Listings</h2>
//                     </div>
//                     <div className="row g-4">
//                         {listData.map((item, i) => (
//                             <div key={i} className="col-md-6 col-lg-3">
//                                 <div className="card h-100 shadow-sm border-0 property">
//                                     <div className="position-relative">
//                                         <img src={item?.pic} className="card-img-top" alt={item.title} />
                                        

//                                         <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
//                                         <div className="position-absolute bottom-0 text-white d-flex justify-content-between w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
//                                             <small><BsGeoAltFill />{item.location}</small>
//                                             <small><AiOutlineCamera />4 <i className="bi bi-box me-1 ms-2"></i>2</small>
//                                         </div>
//                                     </div>
//                                     <div className="card-body">
//                                         <h6 className="text-danger">{item.price} <small className="text-muted"></small></h6>
//                                         <h5 className="card-title">{item.title}</h5>
//                                         <p className="card-text text-muted small">{item.desc}</p>
//                                         <div className="d-flex justify-content-between text-muted small">
//                                             <div><BsHouseDoor />{item.beds} 8-Bedrooms</div>
//                                             <div><CiDroplet />{item.baths} 3-Bathrooms</div>
//                                             <div><BiFullscreen />{item.area} sqft</div>
//                                         </div>
//                                     </div>

//                                   {location?.pathname!=='property' &&  <button onClick={() => handleBuy(item?._id)} className='btn btn-lm btn-danger ms-6'>Buy</button>}
//                                     <div className="card-footer bg-white d-flex justify-content-between align-items-center">
//                                         <div className="d-flex align-items-center">
//                                             <img
//                                                 src="3.jpg_2.jpeg"
//                                                 style={{ height: 30, width: 30 }}
//                                                 className="rounded-circle me-2"
//                                                 alt="agent" />
//                                             <div>
//                                                 <div className="fw-semibold small">William Seklo</div>
//                                                 <div className="text-muted small">Estate Agents</div>
//                                             </div>
//                                         </div>
//                                         <div className="d-flex gap-2">
//                                             <BsArrowsAngleExpand />
//                                             <IoMdHeartEmpty />
//                                             <BsClockHistory />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Property;






import React, { useEffect, useState } from 'react';
import { BsGeoAltFill, BsHouseDoor, BsArrowsAngleExpand, BsClockHistory } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';

const Property = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/property-list');
    if (response?.data?.code === 200) {
      setListData(response?.data?.data);
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (!userData?._id) {
      navigate('/login');
      return;
    }
    const response = await axios.post('http://localhost:3000/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code === 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'error'
      });
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <NavBar />}
      
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-4" data-aos="zoom-in">
            <span className="badge bg-danger-subtle text-danger mb-2">Properties</span>
            <h2 className="fw-bold">Featured Listings</h2>
          </div>

          <div className="row g-4">
            {listData.map((item, i) => {
              const effects = ["fade-right", "fade-up", "fade-left", "fade-down"];
              const fadeType = effects[i % effects.length]; // rotate through effects

              return (
                <div
                  key={i}
                  className="col-md-6 col-lg-3"
                  data-aos={fadeType}
                  data-aos-delay={i * 100 + 100}
                >
                  <div className="card h-100 shadow-sm border-0 property">
                    <div className="position-relative">
                      <img src={item?.pic} className="card-img-top" alt={item.title} />
                      <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
                      <div className="position-absolute bottom-0 text-white d-flex justify-content-between w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
                        <small><BsGeoAltFill /> {item.location}</small>
                        <small><AiOutlineCamera /> 4</small>
                      </div>
                    </div>

                    <div className="card-body">
                      <h6 className="text-danger">{item.price}</h6>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted small">{item.desc}</p>
                      <div className="d-flex justify-content-between text-muted small">
                        <div><BsHouseDoor /> {item.beds} Bedrooms</div>
                        <div><CiDroplet /> {item.baths} Bathrooms</div>
                        <div><BiFullscreen /> {item.area} sqft</div>
                      </div>
                    </div>

                    {location?.pathname !== 'property' && (
                      <button onClick={() => handleBuy(item?._id)} className='btn btn-lm btn-danger ms-6'>
                        Buy
                      </button>
                    )}

                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src="3.jpg_2.jpeg"
                          style={{ height: 30, width: 30 }}
                          className="rounded-circle me-2"
                          alt="agent"
                        />
                        <div>
                          <div className="fw-semibold small">William Seklo</div>
                          <div className="text-muted small">Estate Agents</div>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <BsArrowsAngleExpand />
                        <IoMdHeartEmpty />
                        <BsClockHistory />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;