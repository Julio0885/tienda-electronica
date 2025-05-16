import { instance } from "../instance";

export async function createProducts(request) {
  try {
    const token = localStorage.getItem('token');

    const response = await instance.post('/products', request, {
      headers: { 
        'Content-Type': 'multipart/form-data', 
         Authorization: `Bearer ${token}`, // 🔒 Incluir token
    }
    });
    return response;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw error;
  }
}

export async function products() {
    try {
        const { data } = await instance.get('/products')
        return data
    } catch (error) {
        throw error
    }
}

export async function deleteProducts(id) {
    try {
        const { status } = await instance.delete(`/products/${id}`)
        return status
    } catch (error) {
        throw error
    }
}

export async function updateProducts(request, id) {
    try {
        const { status } = await instance.put(`/products/${id}`, request)
        return status
    } catch (error) {
        throw error
    }
}