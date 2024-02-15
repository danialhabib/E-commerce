import './App.css';
import About from './Ecomponent/About';
import Navbar from './Ecomponent/Navbar';
import Section from './Ecomponent/Section';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Services from './Ecomponent/Services';
import Trusted from './Ecomponent/Trusted';
import Contact from './Ecomponent/Contact';
import Footer from './Ecomponent/Footer';
import Errorpage from './Ecomponent/Errorpage';
import Project from './Ecomponent/Project';
import FeatureProduct from './Ecomponent/FeatureProduct';
import SinglePage from './Ecomponent/SinglePage';
import Home from './Ecomponent/Home';
import Images from './Ecomponent/Images';
import Cart from './Ecomponent/Cart';
import AllProducts from './Ecomponent/AllProducts';
import SearchTest from './Ecomponent/SearchBlankPage';
import SearchBlankPage from './Ecomponent/SearchBlankPage';
import EmptyCart from './Ecomponent/EmptyCart';
import SignUppage from './Ecomponent/SignUppage';
import LoginPage from './Ecomponent/LoginPage';
import SlidingImages from './Ecomponent/SlidingImages';
import Todolist from './TODOLIST/Todolist';


function App() {
  
  return (
    <>
 {/*
     <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/singlepage/:id" element={<SinglePage/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path='/Products' element={ <AllProducts/>} />
          <Route path='/Login' element={  <LoginPage/>} />
          <Route path='/Signup' element={  <SignUppage/>} />
        </Routes>
       
        <Footer />   
      </BrowserRouter>  */}




      <Todolist/>


     
    </>
  );
}

export default App;
