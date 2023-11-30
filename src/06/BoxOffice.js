import { BiCameraMovie } from "react-icons/bi";
import TailH1 from "../UI/TailH1";
import { useEffect, useState } from "react";

export default function BoxOffice() {
  const [trs, setTrs] = useState();
  const [boxlist, setBoxlist] = useState();

  useEffect(() => {
    //환경 변수값 가져오기
    let apikey = process.env.REACT_APP_BOXOFFICE;
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    url = url + `key=${apikey}`
    url = url + `&targetDt=20231129`;

    console.log(url);
    fetch(url)
      .then(resp => resp.json())
      .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))

    //boxlist 변경시실행
  }, []);

  useEffect(() => {  //삼항연산자 이용. ? ㅁ : ㅁ   왼쪽 값을 쓰진 않지만 값이 있어야하기에 빈 값 넣어준다.
    (boxlist === undefined)
      ? setTrs(
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>)
      : setTrs(boxlist.map((item) => (
        <tr key={item.movieCd} className="bg-orange-200 border-b dark:bg-gray-800 border-red-500 hover:bg-gray-50 hover:font-bold border-red-500">
          <td className="px-6 py-4">
            <span className="inline-flex justify-center items-center w-5 h-5 bg-red-950 text-white rounded-md mx-2">
              {item.rank}
            </span>
            {item.movieNm}
          </td>

          <td className="px-6 py-4">{parseInt(item.salesAmt).toLocaleString('ko-KR')}원</td>

          <td className="px-6 py-4">{parseInt(item.audiCnt).toLocaleString('ko-KR')}명</td>

          <td className="px-6 py-4">
            {
              (parseInt(item.rankInten) > 0)
                ? <span className="text-red-600">▲{item.rankInten}</span>
                : (parseInt(item.rankInten) < 0)
                  ? <span className="text-blue-600">▼{item.rankInten}</span>
                  : "-"
            }
          </td>
        </tr>
      ))
      );
    //console.log(boxlist);
  }, [boxlist]);

  return (
    <div className="container mx-auto h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex m-8">
          <BiCameraMovie className="text-5xl text-amber-400" />

          <span className="text-red-700 font-bold text-4xl">박스오피스</span>
        </div>

        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-0 dark:text-gray-400">
            <thead className="text-xs text-amber-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-red-500">
                <th scope="col" className="px-6 py-3">
                  영화명
                </th>
                <th scope="col" className="px-6 py-3">
                  매출액
                </th>
                <th scope="col" className="px-6 py-3">
                  관객수
                </th>
                <th scope="col" className="px-6 py-3">
                  증감율
                </th>
              </tr>
            </thead>
            <tbody>
              {trs}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

