import Header from './components/Header';
import './App.scss';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Kettlebell from './components/Kettlebell';


function App() {
  return (
    <>
    <div className='content-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
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
