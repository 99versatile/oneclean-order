import ChangeButton from "../components/confirm/changeButton";
import Link from "next/link"
import Title from "../components/common/Title";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router"


export default function Detail() {
    const router = useRouter();
    const customerInfo = router.query.customerInfo;
    const orderInfo = router.query.orderInfo;
    const checkedList = router.query.checkedList;
    console.log(customerInfo);
    console.log(orderInfo);
    console.log(checkedList);

    const detailRef = useRef();
    const [isChanged, setIsChanged] = useState(false);
    const [detailInfo, setDetailInfo] = useState();

    function handleChange(event) {
        setIsChanged(value => !value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Store the value of the input element
        
        router.push({
        pathname: '/confirm',
        query: { 
            customerInfo: customerInfo,
            orderInfo: orderInfo, 
            checkedList: [...checkedList],
            detailInfo: detailInfo
        },
        });
    }

    useEffect(()=>{
        setDetailInfo([
            detailRef.current.elements.trash.value, 
            detailRef.current.elements.pet.value, 
            detailRef.current.elements.CCTV.value,
            detailRef.current.elements.parking.value,
            detailRef.current.elements.cleankitwhere.value, 
            detailRef.current.elements.visithow.value, 
        ]);
    }, [isChanged]);

    return (
        <>
            <section className="text-gray-600 mx-auto text-center body-font relative">
            <Title title={`상세정보 입력`} />
            <div className="container px-5 py-24 flex-col text-center mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">상세정보 입력</h1>
                </div>
                <div className="lg:w-1/3 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <form ref={detailRef} className="flex flex-col text-center w-full" onChange={handleChange} onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="trash" className="leading-7 text-me text-gray-600 font-bold">화장실 쓰레기 배출 방법</label>
                            <input type="radio" name="trash" value="쓰레기통" className=""/>쓰레기통에 버릴게요
                            <input type="radio" name="trash" value="변기" className=""/>변기에 내릴게요<br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="pet" className="leading-7 text-me text-gray-600 font-bold">반려동물</label>
                            <input type="radio" name="pet" value="강아지🐶" className=""/>강아지🐶
                            <input type="radio" name="pet" value="고양이😺" className=""/>고양이😺
                            <input type="radio" name="pet" value="기타🐤" className=""/>기타🐤
                            <input type="radio" name="pet" value="없음🖕" className=""/>없음🖕
                            <br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="CCTV" className="leading-7 text-me text-gray-600 font-bold">CCTV</label>
                            <input type="radio" name="CCTV" value="있음" className="" />있음
                            <input type="radio" name="CCTV" value="없음" className="" />없음<br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="parking" className="leading-7 text-me text-gray-600 font-bold">전용 주차공간</label>
                            <input type="radio" name="parking" value="있음" className="" />있음
                            <input type="radio" name="parking" value="없음" className="" />없음<br/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="cleankitwhere" className="leading-7 text-me text-gray-600 font-bold">청소도구 위치</label>
                            <input placeholder="예)화장실 안에 있어요." type="text" id="cleankitwhere" name="cleankitwhere" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="visithow" className="leading-7 text-me text-gray-600 font-bold">찾아오는 방법</label>
                            <input placeholder="예)안암역 3번 출구로 나오시면 빨라요." type="text" id="visithow" name="visithow" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue- font-bold rounded text-lg">다음</button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
        </>
    )
}