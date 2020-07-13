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

    async get(modelId) {
        const model =  await this.getDao().findById(modelId);
        return (model?.docs)?.[0];
    }

    async update(model) {
        return this.getDao().put(model);    
    }
}

