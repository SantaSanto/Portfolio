import axios from 'axios';

const BASE_API_URL = "http://192.168.31.122:8080/api";

const CONFIG = {
	baseURL: BASE_API_URL,
    responseType: "json"
};

const URI = "/folio"

export const getFolios = () => axios.get(URI, CONFIG)

export const getFolioAllocation = (folioId) => {
    const url = `${URI}/${folioId}/allocation`
	return axios.get(url, CONFIG)
}