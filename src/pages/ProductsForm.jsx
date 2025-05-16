import React from 'react'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createProducts } from '../axios/products/products';
import axios from 'axios';

export default function ProductsForm() {
    const { register, handleSubmit, reset} = useForm();
    const [categories, setCategories] = useState([]);

    // Obtener categorías al montar el componente
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/category')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, []);

    const onSubmit = async (formData) => {
        try {
            console.log('Token antes de enviar:', localStorage.getItem('token'));
            const data = new FormData();
            data.append('name', formData.name);
            data.append('price', formData.price);
            data.append('stock', formData.stock);
            data.append('category_id', formData.category_id);
            if (formData.image && formData.image[0]) {
                data.append('image', formData.image[0]);
            }
            
            const response = await createProducts(data);
            if (response && response.status === 201) {
                alert("Producto creado correctamente");
                reset();
            } else {
                alert("No se pudo crear el producto");
            }
        } catch (error) {
            console.log(error);
            alert("Ocurrió un error al crear el producto");
        }
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} role="profile" className="space-y-6">
            <fieldset className="border border-gray-300 p-5 rounded-lg">
                <legend className="text-xl font-semibold text-gray-700">Registro Productos</legend>
                <label className="block mt-4">
                    <span className="text-gray-600">Nombre Producto</span>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    />
                </label>

                <label className="block mt-4">
                    <span className="text-gray-600">Precio</span>
                    <input
                        type="text"
                        {...register("price", { required: true })}
                        className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    />
                </label>

                <label className="block mt-4">
                    <span className="text-gray-600">Stock</span>
                    <input
                        type="text"
                        {...register("stock", { required: true })}
                        className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-600">Imagen</span>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="mt-2 block w-full h-10 px-3 rounded-lg border-gray-300 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-600">Categoría</span>
                    <select
                        {...register("category_id", { required: true })}
                        className="mt-2 block w-full h-10 px-3 rounded-lg  border-gray-300  outline-none bg-white text-black"
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map(cat => (
                            <option
                                key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </label>
            </fieldset>

            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

