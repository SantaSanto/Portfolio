export class AbstractService {

    #dao = null

    constructor(dao) {
        this.#dao = dao
        console.log('AbstractService::constructor')
    }

    getDao() {
        return this.#dao
    }

    async create(model) {
        const id = Date.now().toString();
        const _model = {
            _id: id,
            ...model
        }        
        return this.getDao().put(_model);
    }
}

