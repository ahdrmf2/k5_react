//rfc + Tab 
import style from './Lotto.module.css';
//import LogoP from '../01/LogoP';
import { useState, useEffect } from 'react';


export default function Lotto() {
    //let tags = "Lotto번호 생성기"
    const [tags, setTags] = useState();
    const handleClick = (n) => {
        //tags = Math.floor(Math.random()*45) + 1;
        let lottoNum = [];

        while (lottoNum.length < 7) {//언제끝날지 모르는건 와일
            let n = Math.floor(Math.random() * 45) + 1;

            if (!lottoNum.includes(n)) lottoNum.push(n);
        }
        //+추가 splice이용 = 6번의 위치 뒤에 0-지우지 않고 +를 넣는다.
        lottoNum.splice(6, 0, '+');

        //map는 콜백함수 (()=> ); 써야함
        let tmTags = lottoNum.map((item, idx) =>
            (item === '+')
                ? <span key={`sp${idx}`} className={style.spp}>{item} </span>
                : <span key={`sp${idx}`} className={style[`sp${Math.floor(item / 10)}`]}>
                    {item}
                </span>
            //콜백연산 - 리턴문 한 문장만 있어야한다. if쓰려면 중괄호써야함. +인것과 숫자인지 아닌지 구분해야함
        );
        console.log(tmTags);
        //자바의 array는 동일한 배열만 저장가능.
        //자바스크립트는 array가 리스트 개념이라 데이터 타입이 달라도 저장가능
        //배열 한개씩 다돌고 싶으면 map이용
        //map의 결과는 배열. sp 스팬태그 붙이는
        //8개의 배열에 태그가 들어간다.
        //배열안에 태그가 있으면 그대로 나온다.
        //리액트 가상돔에 필요하다

        setTags(tmTags);
    }

    useEffect(() => {
        setTags("Lotto번호 생성기");
    }, []); //무조건 한번만t 

    useEffect(() => {
        //console.log(tags)
    }, [tags]);
    return (
        <>
            <div className={style.divLotto}>
                <div className={style.d1}>
                    <p className={style.divp}>
                        {tags}
                    </p>
                </div>
                <button className={style.bt} onClick={handleClick}>Lotto 번호생성</button>
            </div>
            <div>

            </div>
        </>
    )
}
