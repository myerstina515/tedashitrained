import { useEffect } from 'react';
import Header from './components/Header';
import './App.scss';
import Home from './components/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Kettlebell from './components/Kettlebell';
import InPerson from './components/InPerson';
import Online from './components/Online';
import InBody from './components/InBody';
import Blueprint from './components/Blueprint';
// import ReactGA from 'react-ga4';

// Initializing Google Analytics GA4, which is a newer version that helps track pages in react
// ReactGA.initialize('G-0LL8QNHKTM');

function App() {

  const location = useLocation();
  useEffect(() => {
    // Check if the native Google tag has loaded on the window object
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // Triggers on every single page change cleanly

  return (
    <>
    <div className='content-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/inperson' element={<InPerson />} />
        <Route path='/services/online' element={<Online />} />
        <Route path='/services/InBody' element={<InBody />} />
        <Route path='/services/ForeverBodyBlueprint' element={<Blueprint />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/kettlebell' element={<Kettlebell />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
