import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Section/Header';
import Nav from './components/Section/Nav';
import Loading from './components/Loading';
import Like from './components/Like';
import Search from './components/Search';
import Mypage from './components/Mypage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <Main />
                        <Nav />
                    </>
                } />
                <Route path='/loading' element={<Loading />} />
                <Route path='/like' element={
                    <>
                        <Header />
                        <Like />
                        <Nav />
                    </>
                } />
                <Route path='/search' element={
                    <>
                        <Header />
                        <Search />
                        <Nav />
                    </>
                } />
                <Route path='/mypage' element={
                    <>
                        <Header />
                        <Mypage />
                        <Nav />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
