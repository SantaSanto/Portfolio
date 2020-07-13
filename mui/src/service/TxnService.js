import { AbstractService } from './AbstractService'
import { txnDao } from '../dao/TxnDao'
import { getAsset, updateAsset } from './asset/AssetService'

class TxnService extends AbstractService {

    constructor() {
        super(txnDao)
        console.log('TxnService::constructor')
    }

    async validate(txn) {
        const errors = {};
        return errors;
    }    

    async createTxn(txn) {
        let isCreated = await super.create(txn);
    
        if(isCreated) {
            this.calcAndUpdateAsset(txn.assetId)
        }    
        return isCreated
    }

    async getTxnByAssetId(assetId) {     
        const txns =  await txnDao.findByAssetId(assetId);
        return txns?.docs
    }

    async calcAndUpdateAsset(assetId) {
        const txns = await this.getTxnByAssetId(assetId) 
        const asset = await getAsset(assetId)
        console.log(asset)
        asset.deposit = txns.reduce(sumDeposit, 0)
        asset.credit  = txns.reduce(sumCredit,  0)
        asset.nav    = reduceNAV(txns)
        console.log(asset)
        updateAsset(asset)        
    }
}

const instance = new TxnService()
Object.freeze(instance);
export const txnService = instance;


export const TXN_TYPE = [
    { key: "Deposit", value: "Deposit" },
    { key: "Credit",  value: "Credit"  },
    { key: "NAV",     value: "NAV"     }
]

const sumDeposit = (total, txn) => {
    if(txn.type == 'Deposit') {
        return (total + parseFloat(txn.amount))
    } 
    return total;      
}

const sumCredit = (total, txn) => {
    if(txn.type == 'Credit') {
        return (total + parseFloat(txn.amount))
    } 
    return total;      
}

const reduceNAV = (txns) => {
    let total = 0
    for(let i=0; i<txns.length; i++) {
        const txn = txns[i]
        total = total + parseFloat(txn.amount); 
        
        if(txn.type == 'NAV') {
            break;     
        }
    }
    return total
}