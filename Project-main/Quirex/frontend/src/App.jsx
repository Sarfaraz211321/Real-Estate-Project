import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useLocation, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Landingpage/Home'
import About from './components/Landingpage/About'
import Services from './components/Landingpage/Services'
import Property from './components/Landingpage/Property'
import UserRegister from './components/Landingpage/UserRegister'
import Login from './components/Landingpage/Login'
import AddProperty from './components/admin/AddProperty'
import AdminPropertylist from './components/admin/AdminPropertyList'
import AdminSoldProperty from './components/admin/AdminSoldProperty'
import UserList from './components/admin/UserList'
import AdminProfile from './components/admin/AdminProfile'
import AdminContactUsList from './components/admin/AdminContactUsList'
import AdminLogout from './components/admin/AdminLogout'
import UserBoughtList from './components/user/UserBoughtList'
import UserProfile from './components/user/UserProfile'
import UserLogout from './components/user/UserLogout'
import Footer from './components/Landingpage/Footer'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import NotFound from './NotFound'

function App() {
  const location = useLocation()
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user);
  }, [location])



  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })



  return (
    <>

      <Routes>
        {/* landing page router */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/property' element={<Property />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/login' element={<Login />} />
        {/* admin section */}
        {userData?.usertype == "admin" && <>

          <Route path='/admin-add' element={<AddProperty />} />
          <Route path='/admin-list' element={<AdminPropertylist />} />
          <Route path='/admin-sold' element={<AdminSoldProperty />} />
          <Route path='/admin-user' element={<UserList />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/admin-contact' element={<AdminContactUsList />} />
          <Route path='/admin-logout' element={<AdminLogout />} />

        </>}
        {/* user section */}
        {userData?.usertype == 'user' && <>
          <Route path='/user-property' element={<Property />} />
          <Route path='/user-bought' element={<UserBoughtList />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/user-logout' element={<UserLogout />} />
        </>}

        <Route path="*" element={<NotFound/>}/>

      </Routes>

      <Footer />
    </>
  )
}

export default App



