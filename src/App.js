import Header from './components/Header';
import './App.scss';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/services' component={Services} exact/>
        <Route path='/blog' component={Blog} exact />
        <Route path='/testimonials' component={Testimonials} exact />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
