import { RequestHandler } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { TokenPayload } from 'google-auth-library/build/src/auth/loginticket';
const CLIENT_ID =
  '537494576631-bm0ss0qnqj3adp194ej0k0ebo95f7i9i.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

export const apiTokenSignin: RequestHandler = (req, res, next) => {
  client
    .verifyIdToken({
      idToken: req.body.idtoken,
      audience: CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket!.getPayload() as TokenPayload;
      res.json(payload);
    });
};
