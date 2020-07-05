import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin';

import  ArticleController from './controllers/article.controller';

admin.initializeApp({
    credential: admin.credential.cert(require('./permission.json')),
    databaseURL: "https://blog-cayghe.firebaseio.com"
});

const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));

ArticleController(app, db);

export const blog = functions.https.onRequest(app);
