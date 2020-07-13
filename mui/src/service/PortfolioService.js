import { create, readAll, findById} from './PortfolioDAO'

export const validate = async(folio) => {
    const errors = {};
    return errors;
}

export const createFolio = async (folio) => {

    const folioId = Date.now().toString();
    const model = {
        _id: folioId,
        ...folio
    }
    return await create(model);
}

export const getFolios = async () => {
    const folios =  await readAll();
    return folios?.docs;
}

export const getFolio = async (folioId) => {
    const folio = await findById(folioId)
    return (folio?.docs)?.[0];
}