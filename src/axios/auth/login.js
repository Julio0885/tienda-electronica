import { instance } from "../instance";

export async function login(request) {
    try {
        const { data } = await instance.post('/auth/login', request)
        return data
    } catch (error) {
        throw error
    }
}

// esto debe estar en el archivo user

export async function logout() {
    try {
        const { status } = await instance.post('/auth/logout')
        return status
    } catch (error) {
        throw error
    }
}



export async function changePassword(data) {
    try {
        const { status } = await instance.put('/auth/change-password', data)
        return status
    } catch (error) {
        throw error
    }
}