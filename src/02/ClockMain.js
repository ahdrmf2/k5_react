import Logoimg from "../01/Logoimg";
import {useState} from "react"; //상태저장
                    //리액트가 상태 저장 해주는 장치.
                    //원래 펑션에선 못쓰는 함수이지만
                    //클래스형 함수에서만 쓰이고
                    //펑션형 컴퍼넌트 사용
                    //상태가 바꾸면 다시그려줌..
                    //스테이트는 값을 바꾸는
function ClockMain (){
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

    setInterval (() =>{
        setCtime(new Date().toLocaleTimeString())
    }, 1000);
    //1초에 한번씩
    //setInterval(()=>{},1000);
    // let ctime = new Date().toLocaleTimeString();
    return(
        //<main className="App-header">
        <main className="App-header">
            <Logoimg />
            <div>현재시간 : {ctime}</div>
        </main>
    );
}

export default ClockMain;