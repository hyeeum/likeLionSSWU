import React from 'react';
import Navbar from './components/Navbar';
import SwiperComponent from './components/SwiperComponent';
import TagImages from './components/TagImages';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
    return (
        <div className="App">
            <Navbar />
            <SwiperComponent />
            <TagImages />
        </div>
    );
}

export default App;
