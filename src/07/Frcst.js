import { useEffect, useState } from "react"
import TailH1 from "../UI/TailH1";
import TailButton from "../UI/TailButton";

export default function Frcst() {
  //상태변수
  const [dataF, setDataF] = useState();
  const [dtTags, setDtTags] = useState();
  const [cnTags, setCnTags] = useState();//날짜 클릭되면 바뀌는 것

  //키배열
  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
  //배열 첨부터 끝까지 도는.

  //fetch 해오는 사용자 정의 함수
  const getData = () => {
    //에어사이트에서 제공해주는 미세먼지 데이터 들고 오는 것

    //fetch 주소  가져오기
    let url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&returnType=json&numOfRows=100&pageNo=1`;
    url = url + `&searchDate=2023-11-30`;
    console.log(url)

    //.then 에 지정된 순서대로 실행(이전 작업 완료된 후에 다음 작업 실행된다.)
    fetch(url) //패치 내가 가져오는 것
      .then(resp => resp.json())//resp는 변수
      .then(data => setDataF(data.response.body.items[0]))
      .catch(err => console.log) //패치 잡는 캐치
    //패치를 .then으로 잡아 놓고 제이슨 만들고 데이터 잡고 오류 캐치.
  }

  //날짜를 선택했을 때 실행되는 사용자 정의함수
  const handleDtClick = (idx) => {
    console.log(dataF[cnKey[idx]])
    
    let tm = dataF[cnKey[idx]].split(',');
    tm = tm.map((item) => item.split(':'))

    tm = tm.map((item, idx) => 
    <div key={`dt${idx}`} className="flex flex-col justify-center items-center bg-slate-400
    bg-yellow-100">
      <span className="p-10">{item[0] }</span>
      <span>{item[1]}</span>
    </div>
    )
    console.log(tm);
    setCnTags(tm);

    //idx를 전달받으면 cnKey배열에서 데이터F 의 키값을 가져오는 것
  }


  //api키 노출 안되게 환경 변수 만듬. 환경 변수 위치는 리액트 src등 폴더가 아닌 바깥 루트 부분에 뉴 파일 만들어서 숨긴 파일 형태로 .(점)을 쓰고 .env라고 파일 하나 만들기.

  //컴퍼넌트가 생성될때 처음 한번 패치 땡겨오기
  useEffect(() => {//임포트해주기, ()=>{} 화살표 함수  , []디펜더시 어레이 한 번 실행 해주는 것  
    //API키 확인
    console.log(process.env.REACT_APP_APIKEY)

    getData(); //fetch 하는 사용자 정의 함수 호출
  }, []);

  //state 변수 dataF가 변경되었을때 실행
  useEffect(() => {
    if (dataF === undefined) return;
    console.log(dataF);
    let tm = dtKey.map((k, idx) =>
      //<div key={`dt${idx}`} onClick={() => handleDtClick(idx)}>{dataF[k]}</div>//날짜 만드는 것
      <TailButton key={`dt${idx}`} caption={dataF[k]} handleClick={() => handleDtClick(idx)} />
    );

    setDtTags(tm);
  }, [dataF]);
  //함수 useEffect - 무조건 불러서 실행.
  //초기값 없을때 나온다.


  return (
    //dataF &&                       풀      1280        중간으로
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto font-bold">
      <div className="flex justify-center items-center bg-lime-200 text-white h-20">
        <TailH1 title={"초미세먼지예보"} />
      </div>
      <div className="grow flex flex-col justify-top items-center bg-yellow-100 w-full">
        <div>
          {dtTags}
        </div>
        <div className="w-8/12">
          <div className="grid grid-cols-4 gap-4 w-full bg-orange-900">
          {cnTags}
          </div>
        </div>
      </div>
    </div>
  )
}
