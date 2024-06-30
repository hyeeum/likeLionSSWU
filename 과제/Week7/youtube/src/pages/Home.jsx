import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Influencer from '../components/contents/Influencer'
import Webd from '../components/contents/Webd'


const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            
            <Today />
            <Influencer />
            <Webd />
        </Main>
    )
}

export default Home
