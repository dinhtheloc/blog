import React from 'react';
import {
    Link
} from "react-router-dom";

function parseDateToString(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

function CardArticle(props) {
    const { articleList } = props;
    return (
        articleList ? articleList.map((item, i) => {
            const date = new Date(item.date_create._seconds * 1000);
            const strCreateDate = parseDateToString(date);

            return (<div key={item.article_id} className="col-lg-4">
                <div className="mb-5 mb-lg-0" data-animate-hover="1">
                    <div className="animate-this">
                        <Link to={`/article/${item.slug_name}`}>
                            <img alt="Image placeholder" className="img-fluid rounded shadow"
                                src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-1-800x600.jpg" />
                        </Link>
                    </div>
                    <div className="pt-4">
                        <small className="text-uppercase">{strCreateDate}</small>
                        <h5>{item.title}</h5>
                        <p className="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                    </div>
                </div>
            </div>)
        }) : ''
    );
}

export default CardArticle;