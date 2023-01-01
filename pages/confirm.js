import ChangeButton from "../components/confirm/changeButton";
import Link from "next/link"
import Title from "../components/common/Title";
import { useRouter } from "next/router"

const name = 'name';

export default function Confirm() {
    const router = useRouter();
    const customerInfo = router.query.customerInfo;
    const orderInfo = router.query.orderInfo;
    const checkedList = router.query.checkedList;
    const detailInfo = router.query.detailInfo;

    function handleSubmit(event) {
        event.preventDefault();
        // Store the value of the input element
        
        router.push({
        pathname: '/payment',
        query: { 
            customerInfo: customerInfo,
            orderInfo: orderInfo, 
            checkedList: [...checkedList],
            detailInfo: detailInfo
        },
        });
    }

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <Title title={`예약정보 확인`} />
                <div className="container px-5 py-24 mx-auto text-center flex-col flex sm:flex-nowrap flex-wrap">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">예약정보 확인</h1>
                    </div>
                    <div className="lg:w-1/3 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">이름 - {customerInfo[0]}</p>
                            <ChangeButton pageName='/' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">전화번호 - {customerInfo[1]}</p>
                            <ChangeButton pageName='/' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">주소 - {customerInfo[3]}</p>
                            <ChangeButton pageName='/' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">서비스 이용 횟수 - {orderInfo[0]}</p>
                            <ChangeButton pageName='/order' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">출입 방법 - {orderInfo[1]}</p>
                            <ChangeButton pageName='/order' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">청소 예약가능 시간 - {checkedList}</p>
                            <ChangeButton pageName='/order' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">청소키트 구매 여부 - {orderInfo[2]}</p>
                            <ChangeButton pageName='/order' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">화장실 쓰레기 배출 방법 - {detailInfo[0]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">반려동물 - {detailInfo[1]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">CCTV - {detailInfo[2]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">전용 주차공간 - {detailInfo[3]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">청소도구 위치 - {detailInfo[4]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <div className="relative mb-4">
                            <p className="leading-7 text-me text-gray-600">찾아오는 방법 - {detailInfo[5]}</p>
                            <ChangeButton pageName='/detail' className="leading-7 text-me text-gray-600 font-bold" />
                        </div>
                        <button onClick={handleSubmit} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">제출</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </>
    )
}