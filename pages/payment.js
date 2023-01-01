import FloatingButton from "../components/common/FloatingButton"
import Title from "../components/common/Title";
import { useRouter } from "next/router";

export default function Payment({ orderQuery }) {
    const router = useRouter();
    const customerInfo = router.query.customerInfo;
    const orderInfo = router.query.orderInfo;
    const checkedList = router.query.checkedList;
    const detailInfo = router.query.detailInfo;

    console.log(customerInfo);
    console.log(orderInfo);
    console.log(checkedList);
    console.log(detailInfo);

    return (
        <>
            <Title title={`이용금액 결제`} />
            <FloatingButton btnName='KakaoChannel' destPage={`https://pf.kakao.com/_YKxfxbxj`} />
        </>
    )
}