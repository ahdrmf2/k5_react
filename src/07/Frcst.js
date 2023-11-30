import { useEffect, useState } from "react";
import TailH1 from "../UI/TailH1";
import data from './dataFrcst.json'
import TailBlueButton from "../UI/TailBlueButton";

export default function Frcst() {
    const [dtTags, setDtTags] = useState();

                //      0               1              2              3
    const dtKey = ["frcstOneDt" , "frcstTwoDt", "frcstThreeDt","frcstFourDt"]
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn","frcstFourCn"]
    

        //날짜 클릭시 오브젝트 dt
    let dtcn = {}
    for(let i = 0 ; i < dtKey.length ; i++){
        dtcn[data[dtKey[i]]] = data[cnKey[i]]
    }           //dtKey가 들어오고  cnKey가 들어온다.  
    console.log(dtcn)

    const handleClick = (dt) => {
        console.log(dt, dtcn[dt])
    }
    useEffect(()=>{
        setDtTags(
            dtKey.map((k, idx)=>
                <TailBlueButton key={`dt${idx}`} 
                                caption={data[k]} 
                                onClick={()=>handleClick(data[k])}/>
                )               //클릭이벤트
        );
    },[]);
    return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center items-center h-1/6 bg-blue-300" >
        <TailH1 title={"초미세먼지 주간 예보"} />
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <div className="flex justify-center items-center p-5">
            {dtTags}
            </div>
      </div>
    </div>
  )
}
