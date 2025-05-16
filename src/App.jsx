import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import headphone from '/assets/hero/headphone.png'
import Products from './components/Products/Products';
import ProductsForm from './pages/ProductsForm';
import ListProductForm from './pages/ListProductForm';
import { Routes, Route, Navigate } from 'react-router';
import LoginForm from './components/LoginForm';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Leer del localStorage al cargar
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Funcion para manejar el login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      <div>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Hero />
                  <Category />
                  <Category2 />
                  <Services />
                  <Products />
                </>
              ) : (
                <Navigate to="/login" />
              )

            }
          />
          {/* Ejemplo de otra ruta:*/}
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/form" element={<ProductsForm />} />
          <Route path="/listado" element={<ListProductForm />} />

        </Routes>
      </div>
    </>
  )
}

export default App
