import React,{Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header />
      <Main myName="송혜음" /> {/*감싸줄 필요가 없으면 한번만 작성해도 괜찮음 */}
      <Footer />
    </div>
  );
}

export default App; //다른 파일에서도 불러올 수 있도록 내보내기