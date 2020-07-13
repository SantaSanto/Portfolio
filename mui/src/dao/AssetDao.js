import { AbstractDao } from './AbstractDao'

const asset_folioId = { 
    index: { ddoc: "asset_folioId", fields: ['folioId'] }
  }

class AssetDao extends AbstractDao {

    constructor(dbName) {
        super(dbName)
        console.log('TxnDao::constructor')
        super.createIndex(asset_folioId)
    }

    async findByFolioId(folioId) {
        const query = {
          use_index: 'asset_folioId',
          selector: { folioId: { $eq: folioId } }
        }  
        return super.find(query)
      }
}

const instance = new AssetDao('ASSET')
Object.freeze(instance);
export const assetDao = instance;
