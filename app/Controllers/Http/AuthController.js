'use strict'

const User = use('App/Models/User');

class AuthController {
    async register({ request, response }){
        try {
            const data = request.only(['username', 'email', 'password']);
            const user = await User.create(data);
            return user;
        } catch (errror){
            return { "error": "Failed to register user" }
        }
        
    }

    async authenticate({ request, auth }){
        const {email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }
}

module.exports = AuthController
