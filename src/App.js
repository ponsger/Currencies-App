import Navbar from './components/Navbar';
import News from './components/News';
import Exchange from './components/Exchange';
import Graphics from './components/Graphics';
import About from './components/About'
import NoPage from './components/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <main>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route index path="/" element={<News />}></Route>
                    <Route path='/exchange' element={<Exchange />} ></Route>
                    <Route path='/graphics' element={<Graphics />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='*' element={<NoPage />} ></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;