import axios from 'axios'

const BASE_API_URL = "http://192.168.31.122:8080/api"

const CONFIG = {
	baseURL: BASE_API_URL,
    responseType: "json"
};

const URI = "/asset"

export const getAssetByFolio = (folioId) => {
	const url = `/folio/${folioId}${URI}`
	return axios.get(url, CONFIG)
}

export const getAsset = (assetId) => {
	const url = `${URI}/${assetId}`
	return axios.get(url, CONFIG)
}

export const createAsset = (assetData) => axios.post(URI, assetData, CONFIG)

export const deleteAsset = (assetId) => {
	const url = `${URI}/${assetId}`
	return axios.delete(url, CONFIG)
}


export const filterAsset = (asset, filterTxt) => {    
	if (asset.name.toUpperCase().includes(filterTxt)) return asset;
	if (asset.type.toUpperCase().includes(filterTxt)) return asset;
	if (asset.institution.toUpperCase().includes(filterTxt)) return asset;
	if (asset.holder.toUpperCase().includes(filterTxt)) return asset;
	if (asset.startDate.toUpperCase().includes(filterTxt)) return asset;
}