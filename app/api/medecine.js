import client from './client';

const getMedecine = () => client.get('/viewAllMedecines');

export default {
    getMedecine
}