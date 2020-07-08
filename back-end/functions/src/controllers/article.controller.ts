import Article from '../interfaces/article.interface';
import { Application } from 'express';
import { v4 as uuidv4 } from 'uuid';

function ArticleController(app: Application, db:any) {
    // create
    app.post('/api/article/create', (req:any, res:any) => {
        (async () => {
            try {
                const {
                    title,
                    slug_name,
                    body,
                    published
                } = req.body;
                const uid = uuidv4();
                const article: Article = {
                    article_id: uid,
                    slug_name: slug_name,
                    title: title,
                    body: body,
                    published: published,
                    date_update: new Date(),
                    date_create: new Date()
                };
                await db.collection('articles').doc('/' + uid + '/').create(article);
                return res.status(200).send('Create success');
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // read item
    app.get('/api/article/getone/:item_id', (req:any, res:any) => {
        (async () => {
            try {
                const document = db.collection('articles').doc(req.params.item_id);
                const item = await document.get();
                const response = item.data();
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // read all
    app.get('/api/article/getall', (req:any, res:any) => {
        (async () => {
            try {
                const query = db.collection('articles');
                const response: any = [];
                await query.get().then((querySnapshot: any) => {
                    const docs = querySnapshot.docs;
                    for (const doc of docs) {
                        response.push(doc.data());
                    }
                });
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // update
    app.put('/api/article/update', (req:any, res:any) => {
        (async () => {
            try {
                const { article_id,
                     title,
                     slug_name,
                     body,
                     published
                 } = req.body;

                const document = db.collection('articles').doc(article_id);
                await document.update({ 
                    title: title,
                    slug_name: slug_name,
                    body: body,
                    published: published,
                    date_update: new Date()});
                return res.status(200).send(`Update ${article_id} success`);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // delete
    app.delete('/api/article/delete', (req:any, res:any) => {
        (async () => {
            try {
                const { article_id } = req.body;
                const document = db.collection('articles').doc(article_id);
                await document.delete();
                return res.status(200).send(`Delete ${article_id} success`);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });
}

export default ArticleController