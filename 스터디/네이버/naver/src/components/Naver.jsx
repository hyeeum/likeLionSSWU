import React, { useState } from 'react';
import naverBanner from '../img/naver_banner.png';

const Naver = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (id.trim() !== '' && password.trim() !== '') {
        alert('로그인이 완료되었습니다.'); // 팝업창
    }
  };

  return  (
    <div className="naver-login">
      <div className="naver-logo-text">NAVER</div>
      <div className="login-box">
        <input type="text" placeholder="아이디" className="login-input" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="비밀번호" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={handleLogin}>로그인</button>
      </div>


    {/** 배너 */}
      <div className="ad-banner">
        <img src={naverBanner} alt="Naver Banner" className="naver-banner" />
      </div>
    </div>
  );
};

export default Naver;
