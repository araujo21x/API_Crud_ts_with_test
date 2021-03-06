import { Router } from "express"
import UserController from '../controller/UserControler';
const userController = new UserController;

export default (app:Router) => {

    app.route(`/user`)
        .post( userController.creat)
        .get( userController.show);
    
    app.route('/user/:id')
        .get(userController.index)
        .patch(userController.edit)
        .delete(userController.delete);
}