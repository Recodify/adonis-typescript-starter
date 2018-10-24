const Hash = use('Hash');
const Model = use('Model');

namespace Models {
    export class User extends Model {

        static boot() {
            super.boot();

            /**
             * A hook to hash the user password before saving
             * it to the database.
             */
            this.addHook('beforeSave', async (userInstance) => {
                const user = (userInstance as any);
                if (user.dirty.password) {
                    user.password = await Hash.make(user.password);
                }
            });
        }

        email : string  = "";
        password : string = "";
        username : string = "";

        /**
         * A relationship on tokens is required for auth to
         * work. Since features like `refreshTokens` or
         * `rememberToken` will be saved inside the
         * tokens table.
         *
         * @method tokens
         *
         * @return {Object}
         */
        tokens() {
            return this.hasMany('App/Models/Token');
        }
    }

    module.exports = User;
}
