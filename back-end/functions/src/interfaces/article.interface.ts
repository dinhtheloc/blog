interface Article {
    uid: string;
    article_id: string;
    slug_name: string;
    title: string;
    body: string;
    published: boolean;
    date_update: Date;
    date_create: Date;
}

export default Article