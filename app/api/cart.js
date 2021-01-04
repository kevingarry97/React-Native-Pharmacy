import client from './client';

const addToCart = (id) => client.post(`/addThisMedecineToCart/${id}`);
const getCart = () => client.get('/myCart');

export default {
    addToCart,
    getCart
}