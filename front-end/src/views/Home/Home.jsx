import React, { useEffect, useState } from 'react';
import { loaderState } from '../../recoil/loaderState';
import { useRecoilState } from 'recoil';
import articleApi from '../../api/articleApi';

import CardArticle from '../../components/CardArticle/CardArticle';
function Home(props) {

    const [loader, setLoader] = useRecoilState(loaderState);
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        const fetchArticleList = async () => {
            setLoader(true);
            try {
                const response = await articleApi.getAll();
                setArticleList(response);
                setLoader(false);
            } catch (error) {
                setLoader(false);
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