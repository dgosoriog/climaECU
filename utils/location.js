const axios = require('axios');

const getCiudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '82bcaeb5eemsh96210c86b08918dp1e1752jsn21ec3b8fec8d' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];
    const lat = data.lat;
    const lon = data.lon;

    return {
        lat,
        lon
    }
}
module.exports = {
    getCiudadLatLon
}