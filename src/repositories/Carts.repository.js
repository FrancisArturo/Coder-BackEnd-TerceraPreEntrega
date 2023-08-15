

export default class CartsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    addCart = async () => {
        let result = await this.dao.addCartDao();
        return result;
    }
    getProductsCart = async () => {
        let result = await this.dao.getProductsCartDao();
        return result;
    }
    addProductCart = async () => {
        let result = await this.dao.addProductCartDao();
        return result;
    }
    deleteProductCart = async (limit, page, category, sort) => {
        let result = await this.dao.deleteProductCartDao(limit, page, category, sort);
        return result;
    }
    deleteProductsCart = async (pid) => {
        let result = await this.dao.deleteProductsCartDao(pid);
        return result;
    }
    updateProductCart = async (product) => {
        let result = await this.dao.updateProductCartDao(product);
        return result;
    }
    updateProductsCart = async (idUpdate, product) => {
        let result = await this.dao.updateProductsCartDao(idUpdate, product);
        return result;
    }
}