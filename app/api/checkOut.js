import client from './client';

const addToCheckOut = (Id, NberOfMedecines) => client.post('/calculateTotal', { Id, NberOfMedecines});
const viewCheckout = () => client.get('/myTotal')

export default {
    addToCheckOut,
    viewCheckout
}