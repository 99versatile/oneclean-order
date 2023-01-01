import Link from "next/link"
import { useRouter } from "next/router"
import CheckBox from "../components/order/Checkbox";
import Title from "../components/common/Title";
import { useState, useEffect, useRef } from "react";
import checkedListAtom, { checkedListValue } from "../components/order/checkedListAtom";
import { useRecoilState, useRecoilValue } from "recoil";


export default function Order() {
    const router = useRouter();
    const customerInfo = router.query.customerInfo;
    let checkedList = useRecoilValue(checkedListValue);

    const orderRef = useRef();
    const [isChanged, setIsChanged] = useState(false);
    const [orderInfo, setOrderInfo] = useState();

    function handleChange(event) {
        setIsChanged(value => !value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Store the value of the input element
        
        router.push({
        pathname: '/detail',
        query: { 
            customerInfo: customerInfo,
            orderInfo: orderInfo, 
            checkedList: [...checkedList]
        },
        });
    }

    useEffect(()=>{
        setOrderInfo([
        orderRef.current.elements.frequency.value, 
        orderRef.current.elements.stay.value, 
        orderRef.current.elements.cleankit.value
        ]);
    }, [isChanged]);
    
    console.log(orderRef.current);
    console.log([...checkedList]);
    return (
        <section className="text-gray-600 body-font relative">
            <Title title={`예약정보 입력`} />
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/3 mx-auto md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-1 md:mt-0">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">예약정보 입력</h1>
                    </div>
                    <form ref={orderRef} className="flex flex-col text-center w-full" onChange={handleChange} onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="frequency" className="leading-7 text-me font-bold text-gray-600">서비스 이용 횟수</label>
                            <input type="radio" name="frequency" value="1회권" className=""/>1회권
                            <input type="radio" name="frequency" value="3회권" className=""/>3회권
                            <input type="radio" name="frequency" value="6회권" className=""/>6회권(+1회권 event!)
                            <br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="stay" className="leading-7 text-me font-bold text-gray-600">출입 방법</label>
                            <input type="radio" name="stay" value="집에 있음" className="" />집에 있음
                            <input type="radio" name="stay" value="비밀번호" className="" />비밀번호<br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="checkbox" className="leading-7 text-me font-bold text-gray-600">청소 예약가능 시간</label>
                            <CheckBox />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="cleankit" className="leading-7 text-me font-bold text-gray-600">청소키트 구매 여부</label>
                            <input type="radio" name="cleankit" value="예" className="" />예
                            <input type="radio" name="cleankit" value="아니오" className="" />아니오<br/>
                        </div>
                        <div className="p-2 w-full">
                            <button type="submit" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue- font-bold rounded text-lg">다음</button>
                        </div>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    )
}