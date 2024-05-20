import React,{useState} from 'react';

const Main = (props) => {
    const [myName,setmyName] = useState("송혜음")
    {/*useState는 배열. [사용하는 실제변수,변수를 넣어줄 곳(변수 값을 바꿈 = 함수느낌)] useState(배열,문자열,객체 등등 넣을 수 있음)*/}

    {/* props 부모가 자식한테 주고 싶은 정보랄까... 종류 상관 없음 단!부모가 관할하지(부모->자식) 자식->자식으로 줄 수는 없다. */}

    function changeName(){
        setmyName(myName === "송혜음" ? "송혜음2" : "송혜음3");
    }

    return (
        <div>
            <h1>안녕하세요,{myName}입니다.</h1> 
            {/*클래스형은 this.props로 불러온다*/} 
            <button onClick={changeName}>Change</button>
        </div>
    );
}

export default Main;