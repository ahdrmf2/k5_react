import { useState, useRef } from "react";
import TailButton from "../UI/TailButton";
import TailH1 from "../UI/TailH1";
import TailInputNum from "../UI/TailInputNum";


export default function RefTest() {
    let cnt = 0;
    const [stCnt, setStCnt] = useState(0);
    const rfCnt = useRef(0);
    const rfNum1 = useRef();
    const rfNum2 = useRef();
    const rfNum3 = useRef();

    const handleCntUp = () => {
        cnt = cnt + 1;
        console.log(cnt);
    }

    const handleStCntUp = () => {
        setStCnt(stCnt + 1)
        console.log("stCnt=", stCnt + 1)
    }

    const handleRfCntUp = () => {
        rfCnt.current = (rfCnt.current + 1);
        console.log("rfCnt=", rfCnt.current + 1)
    }

    const handleSum = () => {
        let n1 = parseInt(rfNum1.current.value);
        let n2 = parseInt(rfNum2.current.value);
        rfNum3.current.value = n1 + n2;
    }


    return (
        <section>
            <div className="flex flex-col justify-center items-center bg-amber-100">
                <TailH1 title={"useRef Hook"} />
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <div>cnt = {cnt}</div>
                    <div><TailButton caption={'증가'} handleClick={handleCntUp} /></div>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <div>cnt = {stCnt}</div>
                    <div><TailButton caption={'St증가'} handleClick={handleStCntUp} /></div>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <div>cnt = {rfCnt.current}</div>
                    <div><TailButton caption={'rfCnt증가'} handleClick={handleRfCntUp} /></div>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <div>
                        <TailInputNum id={'num1'} name={'num1'} rf={rfNum1} />
                    </div>
                    +
                    <div>
                        <TailInputNum id={'num2'} name={'num2'} rf={rfNum2} isOnly={false}/>
                    </div>
                    <div>
                        <TailButton caption={'='} handleClick={handleSum} isOnly={false}/>
                    </div>
                    <div>
                        <TailInputNum id={'num3'} name={'num3'} rf={rfNum3} isOnly={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
