import React from 'react'
import Homepage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OtherPages from './pages/OtherPages';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './containers/Homepage/Footer';
import ContactPage from './pages/ContactPage';
import RequestPage from './pages/RequestPage';
import Landing from './containers/projects/Landing';
import { projectData } from './data';
import "./App.css"

const App = () => {
  
  const landingData = [{name:"MECHANICAL - HVAC ENGINEERING SERVICES",
  details:"Genesiz creates custom HVAC system solutions that are tailored to your specific requirements, maximising energy efficiency and lowering construction costs.",
  className:"hvac",

},
  
{
    name:"ELECTRICAL ENGINEERING SERVICES",
    details:"Buildings today contain more electrical components than ever before. We have your solution for low to high voltage building systems, as well as normal and emergency power.",
    className:"electrical",
},
{
    name:"PLUMBING ENGINEERING & DESIGN SERVICES",
    details:"Our specialty plumbing solutions are intended to be efficient, functional, and long-lasting.",
    className:"plumbing"
},
{
    name:"FIRE PROTECTION ENGINEERING SERVICES",
    details:"Fire can cause significant damage in high-rise New York buildings in a short period of time. To help keep you and your building safe, our systems alert the fire department at the first sign of smoke.",
    className:"fire",
}

]
  
  
  return (
    <div>
         <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Homepage></Homepage>}
        ></Route>
       
        <Route
          path='/hvac'
          element={<OtherPages data={landingData[0]}></OtherPages>}
        ></Route>
        <Route path='/electrical' element={<OtherPages data={landingData[1]}></OtherPages>}></Route>
        <Route path='/plumbing' element={<OtherPages data={landingData[2]}></OtherPages>}></Route>
        <Route path='/fireprotection' element={<OtherPages data={landingData[3]}></OtherPages>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/requestaproposal' element={<RequestPage></RequestPage>}></Route>
        <Route path='/hotel' element={<Landing data={projectData[0]}></Landing>}></Route>
        <Route path='/office' element={<Landing data={projectData[1]}></Landing>}></Route>
        <Route path='/education' element={<Landing data={projectData[2]}></Landing>}></Route>
        <Route path='/airport' element={<Landing data={projectData[3]}></Landing>}></Route>
        <Route path='/mall-stadium'element={<Landing data={projectData[4]}></Landing>}></Route>
        <Route path='/healthcare' element={<Landing data={projectData[5]}></Landing>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App