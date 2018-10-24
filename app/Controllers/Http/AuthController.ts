'use strict';
import { Auth, Http, View } from "@adonisjs";

class AuthController {
    async index({view} : {view: View} ) : Promise<string> {
        return view.render("login");
    }

    async login({auth, request, response, view}
        : {auth : Auth, request: Http.Request, response: Http.Response, view : View}) : Promise<any> {
        const email = request.input('email');
        const password = request.input('password');

        const loginMessage = {
            success: 'Logged-in Successfully!',
            error: 'Invalid Credentials'
        };

        // Attempt to login with email and password
        const authCheck = await auth.attempt(email, password);
        if (authCheck) {
            return response.redirect('/properties');
        }

        return view.render('login', { error: loginMessage.error });
    }

    async logout({auth, request, response} : {auth: Auth, request: Http.Request, response: Http.Response}) {
        await auth.logout();

        return response.redirect('/');
    }
}

export = AuthController;
