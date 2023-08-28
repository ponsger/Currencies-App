import '../css/BodyContent/News/news-card.css'
import '../css/BodyContent/News/news-image.css'
import '../css/BodyContent/News/news-information.css'
import '../css/BodyContent/News/news-title.css'
import '../css/BodyContent/News/news-description.css'
import '../css/BodyContent/News/news-link.css'
import '../css/BodyContent/News/more-news.css'

import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { apiKeyNews } from "../data/apiKey";

function News() {

    const [allNews, setAllNews] = useState([]);
    const [numberNewsToShow, setNumberNewsToShow] = useState(3);

    const onShowMoreOrLess = () => {
        numberNewsToShow === 3 ? setNumberNewsToShow(10) : setNumberNewsToShow(3);
    }

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
                <section className='news-content'>
                    {allNews.articles.slice(0, numberNewsToShow).map(article =>
                        <div key={uuidv4()} className="news-card">
                            <div>
                                <img className='news-image' src={article.image} />
                            </div>
                            <div className='news-information'>
                                <h1 className='news-title'>{article.title}</h1>
                                <p className='news-description'>{article.description}</p>
                                <a className='news-link' href={article.url} target='_blank'>Read More</a>
                            </div>

                        </div>
                    )}
                    <p className='more-news' onClick={() => onShowMoreOrLess()}>
                        {numberNewsToShow === 3 ? "Show More..." : "Show Less..."}
                    </p>
                </section>
                : <p>Loading...</p>}
        </Fragment>
    );
}

export default News;