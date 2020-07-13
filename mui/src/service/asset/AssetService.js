import { create, findByFolioId, findById} from './AssetDAO'

export const ASSET_TYPE = [
    { key: "Equity", value: "Equity" },
    { key: "Debt", value: "Debt" },
    { key: "Bullion", value: "Bullion" },
    { key: "Cash", value: "Cash" }
]

export const ASSET_INSTITUTION = [
    { key: "NPS",  value: "NPS"  },
    { key: "DBS",  value: "DBS"  },
    { key: "SBI",  value: "SBI"  },
    { key: "CITI", value: "CITI" },
    { key: "EPFO", value: "EPFO" }
]

export const ASSET_HOLDER = [
    { key: "Santosh", value: "Santosh" },
    { key: "Lavanya",  value: "Lavanya" }
]

export const validate = async(asset) => {
    const errors = {};
    return errors;
}

export const createAsset = async (asset) => {

    const assetId = Date.now().toString();
    const model = {
        _id: assetId,
        ...asset
    }
    return await create(model);
}

export const updateAsset = async (asset) => {
    create(asset);
}

export const getAssetsByFolioId = async (folioId) => {
    const assets =  await findByFolioId(folioId);
    return assets?.docs;
}

export const getAsset = async (assetId) => {
    const asset =  await findById(assetId);
    return (asset?.docs)?.[0];
}