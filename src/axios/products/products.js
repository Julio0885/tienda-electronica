import { instance } from "../instance";

export async function createProducts(request) {
  try {
    const response = await instance.post('/products', request, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response;
  } catch (error) {
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