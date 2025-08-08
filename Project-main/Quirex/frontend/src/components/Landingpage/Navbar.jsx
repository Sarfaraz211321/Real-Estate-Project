



// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../index.css";
// import { IoMdSearch } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoHomeOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross1 } from "react-icons/rx";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="border-bottom shadow-sm bg-white">
//       <div className="container d-flex justify-content-between align-items-center py-3">
//         {/* Logo */}
//         <div className="d-flex align-items-center gap-2 fw-bold text-danger fs-4">
//           <IoHomeOutline /> Quirex
//         </div>

//         {/* Hamburger Icon - visible on small screens */}
//         <div className="d-lg-none fs-3" onClick={toggleMenu} style={{ cursor: "pointer" }}>
//           {isMobileMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
//         </div>

//         {/* Navigation Links - visible on large screens */}
//         <nav className="d-none d-lg-block">
//           <ul className="nav gap-2">
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Home+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">About+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Property+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">News+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Pages+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         {/* Right Icons - visible on large screens */}
//         <div className="d-none d-lg-flex gap-3 fs-5">
//           <IoMdSearch style={{ cursor: "pointer" }} />
//           <CgProfile style={{ cursor: "pointer" }} />
//           <MdOutlineShoppingCart style={{ cursor: "pointer" }} />
//         </div>
//       </div>

//       {/* Collapsible Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="d-lg-none bg-light px-4 pb-3">
//           <ul className="nav flex-column gap-2">
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Home+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">About+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Property+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">News+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Pages+</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">Contact</a>
//             </li>
//             {/* Icons in mobile menu */}
//             <div className="d-flex gap-3 mt-2 fs-5">
//               <IoMdSearch style={{ cursor: "pointer" }} />
//               <CgProfile style={{ cursor: "pointer" }} />
//               <MdOutlineShoppingCart style={{ cursor: "pointer" }} />
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate()
  const [useData, setUserData] = useState(null)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login')
  }

  if (useData?.usertype == "admin") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-add">Add</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-list">List</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-sold">Sold</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-user">User</Link></li>

              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-profile">Profile</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-contact">Contact</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
              <Link > <button className=" btn btn-lm btn-danger ms-2 ">LogOut</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else if (useData?.usertype == "user") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-property">Property</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-bought">Bought</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-profile">Profile</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
              <Link > <button className="btn btn-lm btn-danger ms-2 ">LogOut</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
              <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-5 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/services">Services</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/property">Property</Link></li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <Link to='/register'>  <button className=" btn btn-lm btn-danger ms-2  ">Registration</button></Link>
                <Link to='/login'> <button className=" btn btn-lm btn-danger ms-2 ">Login</button></Link>
              {/* <Link to='/admin-add'> <button className=" btn btn-lm btn-danger ms-2 ">Add Property</button></Link> */}
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }

}

export default NavBar