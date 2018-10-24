
'use strict';

import { Http, View } from "@adonisjs";

const User = use("App/Models/User");
const Hash = use('Hash');

class RegisterController {

    static get inject () {
        return ['App/Services/UserService', 'App/Models/User'];
    }

    userService : Services.UserService;
    user : Models.User;

    constructor(userService : Services.UserService, user : Models.User) {
        this.userService = userService;
        this.user = user;
    }

    public async index({view} : {view: View}) : Promise<string> {
        return view.render("register");
    }

    public async register({request, response, view} : {request: Http.Request, response: Http.Response, view: View})
    : Promise<string> {

        const result = await this.userService.create(
            request.input('name'),
            request.input('email'),
            request.input('password'));

        const registerResult = {
            result,
            message: result ? 'Registration Successful! Now go ahead and login' : 'Error please try again'
        };

        return view.render('register', { registerResult });
    }
}

export = RegisterController;
