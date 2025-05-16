import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListProductForm() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/api/v1/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    })
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id) => {
    // Aquí puedes navegar a un formulario de edición o abrir un modal
    alert(`Editar producto con ID: ${id}`);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      try {
        await axios.delete(`http://localhost:3000/api/v1/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true
        });
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        alert('Error al eliminar el producto');
      }
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Productos</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Precio</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Imagen</th>
            <th className="py-2 px-4 border-b">Categoría</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name || product.productname}</td>
              <td className="py-2 px-4 border-b">{product.price || product.precio}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                {product.image
                  ? <img src={`http://localhost:3000/uploads/${product.image}`} alt="Producto" className="w-16 h-16 object-cover" />
                  : 'Sin imagen'}
              </td>
              <td className="py-2 px-4 border-b">{product.category_id || product.categorie_id}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center py-4">No hay productos registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
