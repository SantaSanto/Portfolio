import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'

const db = new PouchDB('PORTFOLIO');
PouchDB.plugin(PouchDBFind);

const nameIndex = {
  index: {
    ddoc: "portfolio-name",
    fields: ['name']
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

export const readAll = async () => {
  const query = {
    selector: {
      name: { $gte: null }
    },
    fields: ['_id', 'name', 'desc'],
    sort: ['name']
  }

  try {
    var results = await db.find(query);
    return results;
  } catch (err) {
      console.log(err);
  }
}

export const findById = async (folioId) => {
  const query = {
    selector: {
      _id: { $eq: folioId }
    },
    fields: ['_id', 'name']
  }

  try {
    var results = await db.find(query);
    return results;
  } catch (err) {
      console.log(err);
  }
}