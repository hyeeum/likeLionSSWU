import React from 'react'

import { influencerText } from '../../data/influencer';
import { Link } from 'react-router-dom';

const Influencer = () => {
    return (
        <section id='influencer'>
            <h2>😪 추천 인플루언서를 소개합니다.</h2>
            <div className="influencer__inner overflow">
                {influencerText.map((influencer, key) => (
                    <div className="influencer" key={key}>
                        <div className="influencer__img play__icon">
                            <Link to={`/channel/${influencer.channelId}`}>
                                <img src={influencer.img} alt={influencer.name} />
                            </Link>
                        </div>
                        <div className="influencer__info">
                            <Link to={`/channel/${influencer.channelId}`}>
                                {influencer.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Influencer
