import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'

const db = new PouchDB('TXN');
PouchDB.plugin(PouchDBFind);

const createIndex = (indexObj) => {
  db.createIndex(indexObj)
    .then(result =>  console.log(result) )
    .catch(error =>  console.log(error)  )
}

createIndex({
  index: { ddoc: 'findByAssetId', fields: ['date', 'assetId'] }
})

const find = async (query) => {
  try {
    var results = await db.find(query);
    return results;
  } catch (err) {
    console.log(err);
  }
}

export const create = async (model) => {
  try {
    var result = await db.put(model)
    return result.ok
  } catch (error) {
    console.log(error)
    return false
  }
}

export const findById = async (txnId) => {
  const query = {
    selector: { _id: { $eq: txnId } }
  }
  return find(query)
}

export const findByAssetId = async (assetId) => {
  const query = {
    use_index: 'findByAssetId',
    selector: { 
        date: { $gte: null },
        assetId: { $eq:  assetId }        
    },
    sort: [ { date: 'desc' }]
  }
  return find(query)
}