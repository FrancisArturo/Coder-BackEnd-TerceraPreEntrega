import { CartsService, ProductsService } from '../repositories/index.js';

export default class ViewsController {
    productsService;
    cartsService;
    constructor() {
        this.productsService = ProductsService;
        this.cartsService = CartsService;
    }
    loginViewController = async (req, res) => {
        res.render("login");
    }
    registerViewController = async (req, res) => {
        res.render("register");
    }
    recoverViewController = async ( req, res) => {
        res.render("recover");
    }
    homeViewController = async (req, res) => {
        //query para buscar productos por categoria: frutas, lacteos o panificados
        const { limit = 10, page = 1, category = "all", sort = undefined  } = req.query;
        const user = req.user;
        //console.log(user)
        try {
            const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } = await this.productsService.getallProducts(limit, page, category, sort);
            res.render("home", { products : docs, hasPrevPage, hasNextPage, nextPage, prevPage, page, limit, category, sort, user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    getProductsCartViewController = async (req, res) => {
        try {
            const { cid } = req.params;
            const cartProducts = await this.cartsService.getProductsCart(cid);
            if (cartProducts === "Cart does not exist") {
                return res.json({
                    message: "Cart does not exist",
                    data: cart
                })
            }
            res.render("cart", { cartProducts, cid });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}