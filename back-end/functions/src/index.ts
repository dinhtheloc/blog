import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

import ArticleController from './controllers/article.controller';
import { routesConfig } from './users/routers-config';

admin.initializeApp({
    credential: admin.credential.cert(require('./permission.json')),
    databaseURL: "https://blog-cayghe.firebaseio.com"
});

const db = admin.firestore();
const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser());

ArticleController(app, db);
routesConfig(app);

export const blog = functions.https.onRequest(app);
