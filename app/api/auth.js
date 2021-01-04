import client from './client';

const login = (phone_no, password) => client.post('/login', { phone_no, password})

export default {
    login
}