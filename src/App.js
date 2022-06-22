import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage/Home/Home';

import AboutPage from './pages/AboutPage/AboutPage'
import Collages from './pages/Collages/Collages'
import Academics from './pages/Academics/Academics'
import Admission from './pages/Admission/Admission'
import ContactUs from './pages/ContactUs/ContactUs'
import Courses from './pages/Courses/Courses'


function App() {
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {

    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }, [])

  return (
    <>





      {!loading ?
        <div>
          <div className="preloader">
            <div className="preloader__image"></div>
          </div>
        </div>
        :
        <>


          <div className='page-wrapper'>



            <Navbar></Navbar>


            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="about" element={<AboutPage />} />

              <Route exact path="collages" element={<Collages />} />
              <Route exact path="courses" element={<Courses />} />
              <Route exact path="academics" element={<Academics />} />
              <Route exact path="admission" element={<Admission />} />
              <Route exact path="contact-us" element={<ContactUs />} />
            </Routes>

            <Footer></Footer>

          </div>

        </>

      }


    </>
  );
}

export default App;