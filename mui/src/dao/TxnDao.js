import { AbstractDao } from './AbstractDao'

const txn_date_assetId = {
    index: { ddoc: 'txn_date_assetId', fields: ['date', 'assetId'] }
}

class TxnDao extends AbstractDao {

    constructor(dbName) {
        super(dbName)
        console.log('TxnDao::constructor')
        super.createIndex(txn_date_assetId)
    }

    async findByAssetId(assetId) {
        const query = {
            use_index: 'txn_date_assetId',
            selector: {
                date: { $gte: null },
                assetId: { $eq: assetId }
            },
            sort: [{ date: 'desc' }]
        }
        return super.find(query)
    }
}

const instance = new TxnDao('TXN')
Object.freeze(instance);
export const txnDao = instance;
