import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onLogin }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      // Cambia la URL según tu backend
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password 
      }, 
      { withCredentials: true });

     if (response.status === 200) {
      const token = response.data.token;

        if (token) {
          // 👉 Guardar el token en localStorage
          localStorage.setItem('token', token);
      
      alert("Login Exitoso");

      onLogin();
      reset();
      navigate("/");  // 👈 Esto te redirige al home
    } else {
      alert("No se recibio el token en la respuesta")
    }
  }
  } catch (error) {
    console.error("Error en el login", error);
    alert("Error al iniciar sesión. Verifica tus credenciales.");
  }
};

  return (
    <div className='bg-blue-500'>
       <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <label className="block mb-2">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          {...register("email", { required: true })}
          className="mt-1 block w-full border rounded px-3 py-2 text-black"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Contraseña</span>
        <input
          type="password"
          {...register("password", { required: true })}
          className="mt-1 block w-full border rounded px-3 py-2 text-black"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Ingresar
      </button>
    </form>
    </div>
   
  );
}
