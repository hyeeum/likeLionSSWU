import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Influencer = lazy(() => import('./pages/Influencer'));
const Webd = lazy(() => import('./pages/Webd'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/influencer" element={<Influencer />} />
                    <Route path="/webd" element={<Webd />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;