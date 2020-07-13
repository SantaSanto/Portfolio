import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'

export class AbstractDao {

    #db = null

    constructor(dbName) {
        PouchDB.plugin(PouchDBFind);
        this.#db = new PouchDB(dbName);
    }

    getDB() {
        return this.#db
    }

    createIndex(index) {
        this.getDB().createIndex(index)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    async put(model) {
        try {
            const result = await this.getDB().put(model)
            return result.ok
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async find(query) {
        try {
            return this.getDB().find(query);
        } catch (error) {
            console.log(error);
        }
    }

    async findById(objId) {
        const query = {
            selector: { _id: { $eq: objId } }
        }
        return this.find(query)
    }
}

