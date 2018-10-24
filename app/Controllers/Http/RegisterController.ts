'use strict';
import { Http, View } from "@adonisjs";
import {User} from "../../Models/User";

const Hash = use('Hash');

class RegisterController {
    public async index({view} : {view: View}) : Promise<string> {
        return view.render("register");
    }

    public async register({request, response, view} : {request: Http.Request, response: Http.Response, view: View})
    : Promise<string> {
        const user = new User();
        user.username = request.input('name');
        user.email = request.input('email');
        user.password = await Hash.make(request.input('password'));

        await user.save();

        const registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        };

        return view.render('register', { registerMessage });
    }
}

export = RegisterController;
