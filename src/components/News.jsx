import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { apiKeyNews } from "../data/apiKey";

function News() {

    const [allNews, setAllNews] = useState([]);

    const fetchingNews = async () => {
        const newsRequest = await fetch(`https://gnews.io/api/v4/search?q=crypto&apikey=${apiKeyNews}&lang=en`);
        const newsData = await newsRequest.json();
        setAllNews(newsData);
    }

    useEffect(() => {
        fetchingNews();
    }, [])

    return (
        <Fragment>
            {allNews.length !== 0 ?
                <section>
                    {allNews.articles.map(article =>
                        <div key={uuidv4()}>
                            <div>
                                <img src={article.image} />
                            </div>
                            <div>
                                <h1>{article.title}</h1>
                                <p>{article.description}</p>
                                <a href={article.url}>Read More</a>
                            </div>

                        </div>
                    )}
                </section>
                : <p>Loading...</p>}
        </Fragment>
    );
}

export default News;