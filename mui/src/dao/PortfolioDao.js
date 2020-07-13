import { AbstractDao } from './AbstractDao'

const folio_name = {
  index: { ddoc: "folio_name", fields: ['name'] }
}

class PortfolioDao extends AbstractDao {

  constructor(dbName) {
    super(dbName)
    console.log('PortfolioDao::constructor')
    super.createIndex(folio_name)
  }

  async findAll() {
    const query = {
      use_index: 'folio_name',
      selector: { name: { $gte: null } },
      sort: ['name']
    }
    return super.find(query)
  }
}

const instance = new PortfolioDao('PORTFOLIO')
Object.freeze(instance);
export const folioDao = instance;
