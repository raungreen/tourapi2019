"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
const CLIENT_ID = '537494576631-bm0ss0qnqj3adp194ej0k0ebo95f7i9i.apps.googleusercontent.com';
const client = new google_auth_library_1.OAuth2Client(CLIENT_ID);
exports.apiTokenSignin = (req, res, next) => {
    client
        .verifyIdToken({
        idToken: req.body.idtoken,
        audience: CLIENT_ID
    })
        .then(ticket => {
        const payload = ticket.getPayload();
        res.json(payload);
    });
};
