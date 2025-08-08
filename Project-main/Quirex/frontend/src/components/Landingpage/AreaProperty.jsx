// import React from 'react';


// const properties = [
//   {
//     id: 1,
//     city: 'San Francisco',
//     area: 'Mission District Area',
//     count: '2 PROPERTIES',
//     image: 'villa1.webp',
//   },
//   {
//     id: 2,
//     city: 'New York',
//     area: 'Pacific Heights Area',
//     count: '5 PROPERTIES',
//     image: 'villa2.jpg',
//   },
//   {
//     id: 3,
//     city: 'Sedona, Arizona',
//     area: 'Noe Valley Zones',
//     count: '9 PROPERTIES',
//     image: 'villa3.jpg',
//   },
// ];

// const AreaProperty = () => {
//   return (
//     <div style={{backgroundColor:'#FFFDD0'}} className="container py-5">
//       <p className="text-danger fw-semibold">Area Properties</p>
//       <h2 className="fw-bold mb-4">
//         Find Your Dream House <br /> Search By Area
//       </h2>

//       <div className="row g-4">
//         {properties.map((property) => (
//           <div className="col-md-4" key={property.id}>
//             <div className="card h-100 shadow-sm border-0  overflow-hidden">
//               <div className="position-relative">
//                 <img
//                   src={property.image}
//                   alt={property.area}
//                   className="card-img-top"
//                   style={{ height: '220px', objectFit: 'cover' }}
//                 />
//                 <span className="badge bg-white text-dark position-absolute top-0 start-0 m-2 px-3 py-2 fw-semibold rounded-pill shadow-sm">
//                   {property.count}
//                 </span>
//               </div>
//               <div className="card-body">
//                 <p className="text-muted mb-1">{property.city}</p>
//                 <h5 className="card-title fw-semibold">{property.area}</h5>
//                 <a href="#" className="text-danger fw-medium text-decoration-none">
//                   View Property →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AreaProperty;





import React from 'react';

const properties = [
  {
    id: 1,
    city: 'San Francisco',
    area: 'Mission District Area',
    count: '2 PROPERTIES',
    image: 'villa1.webp',
  },
  {
    id: 2,
    city: 'New York',
    area: 'Pacific Heights Area',
    count: '5 PROPERTIES',
    image: 'villa2.jpg',
  },
  {
    id: 3,
    city: 'Sedona, Arizona',
    area: 'Noe Valley Zones',
    count: '9 PROPERTIES',
    image: 'villa3.jpg',
  },
];

const AreaProperty = () => {
  return (
    <div
      style={{ backgroundColor: '#FFFDD0' }}
      className="container py-5"
      data-aos="fade-up"
    >
      <p className="text-danger fw-semibold" data-aos="fade-right">Area Properties</p>
      <h2 className="fw-bold mb-4" data-aos="fade-left" data-aos-delay="200">
        Find Your Dream House <br /> Search By Area
      </h2>

      <div className="row g-4">
        {properties.map((property, index) => {
          const animations = ['fade-right', 'fade-up', 'fade-left'];
          const delays = [200, 300, 400];

          return (
            <div
              className="col-md-4"
              key={property.id}
              data-aos={animations[index % animations.length]}
              data-aos-delay={delays[index % delays.length]}
            >
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <div className="position-relative">
                  <img
                    src={property.image}
                    alt={property.area}
                    className="card-img-top"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <span className="badge bg-white text-dark position-absolute top-0 start-0 m-2 px-3 py-2 fw-semibold rounded-pill shadow-sm">
                    {property.count}
                  </span>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-1">{property.city}</p>
                  <h5 className="card-title fw-semibold">{property.area}</h5>
                  <a
                    href="#"
                    className="text-danger fw-medium text-decoration-none"
                  >
                    View Property →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProperty;