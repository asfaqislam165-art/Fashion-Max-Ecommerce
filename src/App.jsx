import { useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Megamenu from './components/Megamenu';
import Home from './components/Home';
import Catagories from './components/Catagories';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Congrats from './components/Congrats';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Shirt from './components/Men/Shirt';
import Pant from './components/Men/Pant';
import Shoes from './components/Men/Shoes';
import Sunglass from './components/Men/Sunglass';
import Watch from './components/Men/Watch';
import Top from './components/Women/Top';
import Bottom from './components/Women/Bottom';
import Bag from './components/Women/Bag';
import Shoestwo from './components/Women/Shoestwo';
import Earrings from './components/Women/Earrings';
import Suit from './components/Kid/Suit';
import Shorts from './components/Kid/Shorts';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
 return (
    <div>
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="relative">
        <Megamenu isOpen={isOpen} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/pant" element={<Pant />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/sunglass" element={<Sunglass />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/top" element={<Top />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/shoestwo" element={<Shoestwo />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/suit" element={<Suit />} />
        <Route path="/shorts" element={<Shorts />} />
      </Routes>
    </div>
  );
};

export default App;
