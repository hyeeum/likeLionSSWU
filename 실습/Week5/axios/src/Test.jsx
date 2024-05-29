import React, { useState } from 'react'
import axios from 'axios'
import { Map } from "react-kakao-maps-sdk"

const Test = () => {

  const [change,setChange] = useState('보내기 전')

  // const Changebutton = () => {
  //   axios.get('https://httpbin.org/get')
  //   .then((response)=>{
  //     if(response.status===200){
  //       setChange('연결이 성공하였습니다.')
  //     }
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //     setChange('연결이 실패하였습니다.')
  //   })
  // }

  return (
    <div className='btn_box'>
      {/* <p>{change}</p>
      <button onClick={() => {Changebutton()}}>Axios</button> */}
      <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    />
    </div>
  )
}

export default Test