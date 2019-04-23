"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const google_auth_library_1 = require("google-auth-library");
const db_1 = require("../../../db/db");
const sessionGenerate_1 = require("./sessionGenerate");
const CLIENT_ID = '1003309333518-q4o99up9h9tks4mt25eq8cravsfgepe9.apps.googleusercontent.com';
const client = new google_auth_library_1.OAuth2Client(CLIENT_ID);
exports.apiTokenSignin = (req, res, next) => {
    client
        .verifyIdToken({
        idToken: req.body.idtoken,
        audience: CLIENT_ID
    })
        .then(ticket => {
        const payload = ticket.getPayload();
        const email = payload.email;
        // res.json(payload);
        db_1.db.one('select * from users where email = ${email}', { email: email })
            .then((user) => {
            res.json(user);
            // Generate Session Token
            req.user = user;
            sessionGenerate_1.apiSessionGenerate(req, res, next);
        })
            .catch(err => {
            if (err.code == db_1.pgp.errors.queryResultErrorCode.noData) {
                // Create User
                const user = {
                    id: uuid(),
                    email: email,
                    family_name: payload.family_name || null,
                    given_name: payload.given_name || null
                };
                db_1.db.none(db_1.pgp.helpers.insert(user, undefined, 'users')).then(() => {
                    res.json(user);
                    // Generate Session Token
                    req.user = user;
                    sessionGenerate_1.apiSessionGenerate(req, res, next);
                });
            }
        });
    });
};
