import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthLayout from './Layouts/AuthLayout'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Rent,{rentLoader} from './pages/Rent'
import EditCar from './pages/EditCar';
import Cars from './pages/Cars'
import Terms from './pages/Terms'
import AddCar from './pages/AddCar'
import NotFound from './pages/NotFound';
import Viewmessage from './pages/Viewmessage';
import ViewBookuser from './pages/ViewBookuser';
import ViewBookadmin from './pages/ViewBookadmin';
// import Footer from './components/Footer'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route element={<MainLayout/>}>
      <Route element={<AuthLayout/>}>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/ViewBookuser" element={<ViewBookuser/>}/>
      <Route path="/ViewBookadmin" element={<ViewBookadmin/>}/>
      <Route path="/Rent/:carnumber" element={<Rent/>} loader={rentLoader}/>
      <Route path="/editcar/:id" element={<EditCar />} />

      <Route path="/Cars" element={<Cars/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/AddCar" element={<AddCar/>}/>
      <Route path="/ViewMessage" element={<Viewmessage/>}/>
      </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      </>
    )
  )
  return (
<RouterProvider router={router}/>
  )
}

export default App