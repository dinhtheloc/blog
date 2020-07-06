import React, {useEffect, useState} from 'react';


import articleApi from '../../api/articleApi';

import CardArticle from '../../components/CardArticle/CardArticle';
function Home(props) {

    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        const fetchArticleList = async () => {
            try {
                const response = await articleApi.getAll();
                console.log('Fetch Articles successfully: ', response);
                setArticleList(response);
            } catch (error) {
                console.log('Failed to fetch article list: ', error);
            }
        }
        fetchArticleList();
    }, []);

    return (
        <>
            <div id="blog-blog-1" title="blog/blog-1.html">
                <section className="slice-xl delimiter-top">
                    <div className="container">
                        <div className="mb-5 text-center">
                            <h3>Chia sẻ kiến thức chuyên sâu về Frontend</h3>
                        </div>
                        <div className="row">
                            <CardArticle articleList={articleList}></CardArticle>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;