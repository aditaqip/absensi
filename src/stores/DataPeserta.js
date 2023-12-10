import './../axioslogged'
import axios from 'axios'
const DataPesertaIndex = await axios.get('peserta').then((e) => {
    return e.data.length
}).catch(error => {

})

export {
    DataPesertaIndex,
}