import axios from 'axios'

const BASE_API_URL = "http://192.168.31.122:8080/api"

const CONFIG = {
	baseURL: BASE_API_URL,
    responseType: "json"
};

const URI = "/txn"

export const getTxnByAsset = (assetId) => {
    const url = `/asset/${assetId}${URI}`
	return axios.get(url, CONFIG)
}

export const getTxn = (txnId) => {
    const url = `${URI}/${txnId}`
	return axios.get(url, CONFIG)
}

export const createTxn = (txnData) => axios.post(URI, txnData, CONFIG)

export const deleteTxn = (txnId) => {
    const url = `${URI}/${txnId}`
	return axios.delete(url, CONFIG)
}




