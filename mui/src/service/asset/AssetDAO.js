import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'

const db = new PouchDB('ASSET');
PouchDB.plugin(PouchDBFind);

const nameIndex = {
  index: {
    ddoc: "asset-folioId",
    fields: ['folioId']
  }
}

db.createIndex(nameIndex)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })


export const create = async (model) => {
  try {
    var result = await db.put(model)
    return result.ok
  } catch (error) {
    console.log(error)
    return false
  }
}

const find = async (query) => {
  try {
    var results = await db.find(query);
    return results;
  } catch (err) {
    console.log(err);
  }
}

export const findByFolioId = async (folioId) => {
  const query = {
    use_index: 'asset-folioId',
    selector: { folioId: { $eq: folioId } },
    fields: ['_id', 'name', 'type', 'fi', 'holder', 'nav']
  }  
  return find(query)
}

export const findById = async (assetId) => {
  const query = {
    selector: { _id: { $eq: assetId } }
  }
  return find(query)
}