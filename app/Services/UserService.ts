'use strict';

const User = use("App/Models/User");

namespace Services {
    export class UserService {
        async create(username : string, email: string, password: string) : Promise<boolean> {
            const user : Models.User = new User();

            user.username = username;
            user.email = email;
            user.password = password;

            return await user.save();
        }
    }

    module.exports = UserService;
}