import Article from '../interfaces/article.interface';
import { v4 as uuidv4 } from 'uuid';

function ArticleController(app: any, db:any) {
    // create
    app.post('/api/article/create', (req:any, res:any) => {
        (async () => {
            try {
                const uid = uuidv4();
                const article: Article = {
                    uid: uid,
                    article_id: uid,
                    slug_name: '',
                    title: '',
                    body: '',
                    published: true,
                    date_update: new Date(),
                    date_create: new Date()
                };
                await db.collection('articles').doc('/' + uid + '/').create({ data: article });
                return res.status(200).send('Create success');
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // read item
    app.get('/api/article/get/:item_id', (req:any, res:any) => {
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
                        // console.log();
                        // const selectedItem: Article = {
                        //     uid: doc.data().uid,
                        //     article_id: doc.data().article_id,
                        //     slug_name: doc.data().slug_name,
                        //     title: doc.data().title,
                        //     body: doc.data().body,
                        //     published: doc.data().published,
                        //     date_update: doc.data().date_update,
                        //     date_create: doc.data().date_create
                        // };
                        response.push(doc.data().data);
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
    app.put('/api/update/:item_id', (req:any, res:any) => {
        (async () => {
            try {
                const document = db.collection('items').doc(req.params.item_id);
                await document.update({
                    item: req.body.item
                });
                return res.status(200).send();
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    // delete
    app.delete('/api/delete/:item_id', (req:any, res:any) => {
        (async () => {
            try {
                const document = db.collection('items').doc(req.params.item_id);
                await document.delete();
                return res.status(200).send();
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

}

export default ArticleController