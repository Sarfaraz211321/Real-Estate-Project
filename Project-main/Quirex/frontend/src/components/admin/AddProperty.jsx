// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from '../Landingpage/Navbar';
// import { useLocation } from "react-router-dom"; 

// const AddProperty = () => {
//   const location= useLocation();
//   return (
//     <>  {location?.pathname!='/'&&<Navbar/>}
//     <section style={{ backgroundColor: "#FFFFD0", padding: "60px 0" }}>
//       <div className="container text-center mb-4">
//         <h2 className="fw-bold text-danger">Add Property</h2>
//       </div>
//       <div className="container d-flex justify-content-center">
//         <div className="p-4 shadow bg-white rounded" style={{ width: "100%", maxWidth: "900px" }}>
//           <form>
//             <div className="row mb-3">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Property Title</label>
//                 <input type="text" className="form-control" placeholder="Enter property title" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Location</label>
//                 <input type="text" className="form-control" placeholder="Enter property location" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Status</label>
//                 <select className="form-select">
//                   <option>Rent</option>
//                   <option>Sale</option>
//                 </select>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-bold">Price</label>
//                 <input type="text" className="form-control" placeholder="Enter property price" />
//               </div>
//               <div className="col-12 mb-3">
//                 <label className="form-label fw-bold">Description</label>
//                 <textarea className="form-control" rows="4" placeholder="Enter property description"></textarea>
//               </div>
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-outline-danger px-4">
//                 Add Property
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default AddProperty;




import React from 'react'
import NavBar from '../Landingpage/Navbar'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
const schemaproperty = yup
  .object()
  .shape({
    title: yup.string().required().min(2).max(20),
    price: yup.string().required(),
    area: yup.string().required().min(2).max(20),
    location: yup.string().required().min(2).max(20),
    description: yup.string().required().min(2).max(20),
    pic: yup.mixed()
  })

const AddProperty = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    resolver: yupResolver(schemaproperty),
  });
  const addProperty = async (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('price', data?.price);
    formData.append('area', data?.area);
    formData.append('location', data?.location);
    formData.append('description', data?.description);
    formData.append('pic', data?.pic[0]);
    const response = await axios.post('http://localhost:3000/api/add-property', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "success"
      })
      reset()
    } else {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
    <NavBar />
        <div className=" py-5" style={{ backgroundColor: '#fdf1f0' }}>
          <div className="container">
      <h2 className="text-center text-danger fw-bold mb-4">Add A Property For Sale</h2>

      <div className="bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit((d) => addProperty(d))}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Property Title</label>
              <input{...register('title')} type="text" className="form-control" placeholder="Enter property title" />
            </div>
            {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
            <div className="col-md-6">
              <label className="form-label">Area</label>
              <input  {...register('area')} type="text" className="form-control" placeholder="Enter property area" />
            </div>
            {errors?.area && <p className='text-danger'>{errors?.area?.message}</p>}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input {...register('price')} type="text" className="form-control" placeholder="Enter property price" />
            </div>
            {errors?.price && <p className='text-danger'>{errors?.price?.message}</p>}

            <div className="col-md-6">
              <label className="form-label">Pic</label>
              <input{...register('pic')} type="file" className="form-control" placeholder="Enter property photo" />
            </div>
            {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Discription</label>
              <input {...register('description')}type="message" className="form-control" placeholder="Enter property message" />
            </div>
            {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input {...register('location')} type="text" className="form-control" placeholder="Enter property location" />
            </div>
            {errors?.location && <p className='text-danger'>{errors?.location?.message}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline-danger px-4">Add Property</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default AddProperty