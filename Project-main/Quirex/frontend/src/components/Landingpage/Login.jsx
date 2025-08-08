
import React from 'react';
import Navbar from '../Landingpage/Navbar'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
  })


const SignIn = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const handleLogin = async (data) => {
    const response = await axios.post('http://localhost:3000/api/login', data);
    if (response?.data?.code == 200) {


      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "success"
      });
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.data));
      if (response?.data?.data?.usertype === "admin") {
        navigate('/admin-add');
      } else if (response?.data?.data?.usertype === "user") {
        navigate('/user-property');
      }

    } else {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "error"
      });
    }

  }

  return (
    <>
    <Navbar/>
    <div className="py-5" style={{ backgroundColor: "#FFFDD0" }}>
      <div className="container">
        <h2 className="text-center text-danger mb-4">Login Here</h2>
        <div className="mx-auto p-4 bg-white shadow rounded" style={{ maxWidth: "500px" }}>
          <form onSubmit={handleSubmit((d) => handleLogin(d))}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Your Email</label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <MdEmail />
                </span>
                <input type="email" {...register('email')} className="form-control" id="email" placeholder="Enter your email" />

              </div>
              {errors?.email && <p className="text-danger"> {errors?.email?.message} </p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-bold">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaKey />
                </span>
                <input type="password" {...register('password')} className="form-control" id="password" placeholder="Password" />
              </div>
              {errors?.password && <p className="text-danger"> {errors?.password?.message} </p>}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-outline-danger px-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;