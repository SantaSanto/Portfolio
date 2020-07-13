import { AbstractService } from './AbstractService'
import { folioDao } from '../dao/PortfolioDao'


class PortfolioService extends AbstractService {
    constructor(dao) {
        super(dao)
        console.log('PortfolioService::constructor')
    }

    async validate(folio) {
        const errors = {};
        return errors;
    }    

    async getAll() {
        const folios =  await folioDao.findAll();
        return folios?.docs;
    }
}

const instance = new PortfolioService(folioDao)
Object.freeze(instance);
export const folioService = instance;