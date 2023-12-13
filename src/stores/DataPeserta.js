import './../axioslogged'
import axios from 'axios'
const DataPesertaIndex = axios.get('/data-peserta').then(e => {
    return e.data
}).catch(e => console.log(e));

export {
    DataPesertaIndex,
}