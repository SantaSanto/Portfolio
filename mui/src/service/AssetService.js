import { AbstractService } from './AbstractService'
import { assetDao } from '../dao/AssetDao'


class AssetService extends AbstractService {
    constructor(dao) {
        super(dao)
        console.log('AssetService::constructor')
    }

    async validate(asset) {
        const errors = {};
        return errors;
    }    

    async getByFolioId(folioId) {
        const assets =  await assetDao.findByFolioId(folioId);
        return assets?.docs;
    }
}

const instance = new AssetService(assetDao)
Object.freeze(instance);
export const assetService = instance;


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