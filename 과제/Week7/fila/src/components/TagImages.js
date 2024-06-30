import React, { useState } from 'react';
import '../assets/scss/TagImages.scss';

const TagImages = () => {
    const [selectedTag, setSelectedTag] = useState('all');

    const images = {
        all: ['https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3369553%2F33695536978.jpg&type=f372_372', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_4140622%2F41406222914.jpg&type=f372_372'],
        tag1: ['https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_3369553%2F33695536978.jpg&type=f372_372'],
        tag2: ['https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_4140622%2F41406222914.jpg&type=f372_372'],
    };

    return (
        <div>
            <div className='tagTitle'>지금 많이 찾는 상품</div>
            <div className="tags">
                <button
                    className={selectedTag === 'all' ? 'active' : ''}
                    onClick={() => setSelectedTag('all')}
                >
                    All
                </button>
                <button
                    className={selectedTag === 'tag1' ? 'active' : ''}
                    onClick={() => setSelectedTag('tag1')}
                >
                    Tag1
                </button>
                <button
                    className={selectedTag === 'tag2' ? 'active' : ''}
                    onClick={() => setSelectedTag('tag2')}
                >
                    Tag2
                </button>
            </div>
            <div className="images">
                {images[selectedTag].map((src, index) => (
                    <img key={index} src={src} alt={`tag ${selectedTag} ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default TagImages;
