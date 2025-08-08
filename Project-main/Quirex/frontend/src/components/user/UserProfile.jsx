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




import React, { useEffect } from 'react';
import { BsTelephoneInbound } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoKeySharp } from "react-icons/io5";
import { BsImageFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../Landingpage/Navbar';
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
  password: yup.string().required().min(8).max(20),
  address: yup.string().required(),
  profile: yup.mixed().required()
});
const ContactUs = () => {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    setValue('name', userData?.name);
    setValue('email', userData?.email);
    setValue('contact', userData?.contact);
    setValue('password', userData?.password);
    setValue('address', userData?.address);
    setValue('profile', userData?.profile);
  }, [])
  const { register, handleSubmit, setValue, formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});
const handleRegister = async (data) => {
  try {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('password', data.password);
    formData.append('address', data.address);
    formData.append('profile', data.profile[0]);

    const response = await axios.post('http://localhost:3000/api/user-register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      Swal.fire({
        title: "Registration Successful",
        text: response?.data?.message,
        icon: "success"
      });

    }
  } catch (error) {
    console.error('Registration error:', error);
    Swal.fire({
      title: "Registration Failed",
      text: response?.data?.message,
      icon: "error"

    });
  }
};
  return (
    <>
    <Navbar/>
    <div className="py-5" style={{ backgroundColor: '#fdf1f0' }}>
        <div className="container">;
          <h2 className="text-center text-danger fw-bold mb-4">Register Here</h2>

          <div className="bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '1000px' }}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Your Name</label>
                  <div className="input-group">
                    <span className="input-group-text"><BsFillPersonFill /></span>
                    <input {...register('name')} type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Your Email</label>
                  <div className="input-group">
                    <span className="input-group-text"><BsEnvelopeFill /></span>
                    <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
                  </div>
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text"><BsTelephoneInbound /> </span>
                    <input type="tel" {...register('contact')} className="form-control" placeholder="Enter phone number" />
                  </div>
                  {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><IoKeySharp /></span>
                    <input type="password" {...register('password')} className="form-control" placeholder="Password" />
                  </div>
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>

              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaRegAddressCard /></span>
                    <input type="text" {...register('address')} className="form-control" placeholder="Enter your Address" />
                  </div>
                  {errors.address && <p className="text-danger">{errors.address.message}</p>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Profile Picture</label>
                  <div className="input-group">
                    <span className="input-group-text"><BsImageFill /></span>
                    <input type="file" {...register('profile')} className="form-control" />
                  </div> 
                  {errors.profile && <p className="text-danger">{errors.profile.message}</p>}
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-outline-danger px-4">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs