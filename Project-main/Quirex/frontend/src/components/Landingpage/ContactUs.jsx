// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ContactUs = () => {
//   return (
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
//   );
// };

// export default ContactUs;


import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom';


const schemacontact = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(200),
    email: yup.string().required(),
    phone: yup.string().required().min(10),
    subject: yup.string().required().min(2).max(200),
    message: yup.string().required().min(2).max(1000)
  })

const ContactUs = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemacontact),
      });
      const contactUser = async (data) => {
        const response = await axios.post('http://localhost:3000/api/contact-us', data);
        if (response?.data?.code == 200) {
                  Swal.fire({
                    title: "Contact Us",
                    text: response?.data?.message,
                    icon: "success"
                  })
                  navigate('/')
                  reset()
                } else {
                  Swal.fire({
                    title: "Contact Us",
                    text: response?.data?.message,
                    icon: "error"
                  })
                }
      }
  return (
   <>
     <Navbar/>
     <div className="container my-5">
             <h2 className="text-center">Contact Us!</h2>
             <div className="row justify-content-center">
               <div className="col-md-10 col-lg-8">
                 <div className="form-box">
                   <form onSubmit={handleSubmit((d)=> contactUser(d))}>
                     <div className="row g-3">
     
                       <div className="col-md-6">
                         <label className="form-label">Your Name</label>
                         <div className="input-group">
                           <span className="input-group-text"><FaUser /></span>
                           <input type="text" className="form-control" placeholder="Enter your name" {...register('name')} />
                         </div>
                         {errors?.name && <p className='text-danger'>{errors?.name?.message}</p>}
                       </div>
     
                       <div className="col-md-6">
                         <label className="form-label">Your Email</label>
                         <div className="input-group">
                           <span className="input-group-text"><FaEnvelope /></span>
                           <input type="email" className="form-control" placeholder="Enter your email" {...register('email')}/>
                         </div>
                         {errors?.email && <p className='text-danger'>{errors?.email?.message}</p>}
                       </div>
     
                       <div className="col-md-6">
                         <label className="form-label">Phone Number</label>
                         <div className="input-group">
                           <span className="input-group-text"><IoMdCall /></span>
                           <input type="text" className="form-control" placeholder="Enter phone number" {...register('phone')}/>
                         </div>
                         {errors?.phone && <p className='text-danger'>{errors?.phone?.message}</p>}
                       </div>
     
                       <div className="col-md-6">
                         <label className="form-label">Subject</label>
                         <div className="input-group">
                           <span className="input-group-text"><i className="fa-solid fa-pencil"></i></span>
                           <input type="text" className="form-control" placeholder="Subject" {...register('subject')}/>
                         </div>
                         {errors?.subject && <p className='text-danger'>{errors?.subject?.message}</p>}
                       </div>

                       <div className="col-md-12 contactMessage">
                         <label className="form-label">Message</label>
                         <div className="input-group">
                             <textarea class="form-control" aria-label="With textarea" {...register('message')}></textarea>
                         </div>
                         {errors?.message && <p className='text-danger'>{errors?.message?.message}</p>}
                       </div>
     
                       
     
                       <div className="text-center mt-4">
                         <button type="submit" className="btn  px-5 btn-login hoverbtn">Send Message</button>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
   </>
  )
}

export default ContactUs