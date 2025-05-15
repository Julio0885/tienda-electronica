import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import headphone from '/assets/hero/headphone.png'
import Products from './components/Products/Products';
import ProductsForm from './pages/ProductsForm';
import { Routes, Route } from 'react-router';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
  bgColor: "#f42c37"
};

function App() {
  

  return (
    <>
      <div>
        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Category2 />
              <Services />
              <Products />
            </>
          }
        />
        {/* Ejemplo de otra ruta:*/}
        <Route path="/form" element={<ProductsForm />} />
        
      </Routes>
      </div>
    </>
  )
}

export default App
