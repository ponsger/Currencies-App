import '../css/BodyContent/bodyContent.css'
import '../css/BodyContent/content.css'
import '../css/BodyContent/News/news-content.css'

import React, { Suspense } from 'react';
const Exchange = React.lazy(() => import('./Exchange'));
const News = React.lazy(() => import('./News'));



function BodyContent() {
    return (
        <section className="bodyContent">
            <div className="content">
                <div className='news-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <News />
                    </Suspense>
                </div>
                <div className='exchange-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Exchange />
                    </Suspense>

                </div>
            </div>
        </section>
    );
}

export default BodyContent;