import '../css/BodyContent/bodyContent.css'
import '../css/BodyContent/content.css'

import React ,{ Suspense } from 'react';
const Exchange = React.lazy(() => import('./Exchange'));



function BodyContent() {
    return (
        <section className="bodyContent">
            <div className="content">
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