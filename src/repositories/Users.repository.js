

export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createUser = async (user) => {
        let result = await this.dao.createUserDao(user);
        return result;
    }
    loginUser = async (user) => {
        let result = await this.dao.loginUserDao(user);
        return result;
    }
    recoverPassword = async (user) => {
        let result = await this.dao.recoverPasswordDao(user);
        return result;
    }
}