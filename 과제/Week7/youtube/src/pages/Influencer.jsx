import React from 'react'
import Main from '../components/section/Main'

import { influencerText } from '../data/influencer'
import { Link } from 'react-router-dom'

const Influencer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 인플루언서입니다.">
            
            <section id='influencerPage'>
                <h2>🥰 오늘의 추천 인플루언서입니다.</h2>
                <div className="influencer__inner">
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
        </Main>
    )
}

export default Influencer
