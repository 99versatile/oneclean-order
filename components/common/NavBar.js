import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react";
import Image from "next/image";

const logoDir = "/logo.png"

export default function NavBar() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link href="https://oneclean.oopy.io/" legacyBehavior>
                        <Image
                        src={logoDir}
                        alt="Oneclean"
                        width="70"
                        height="70"
                        />
                    </Link>
                    <Link href="https://oneclean.oopy.io/" legacyBehavior>
                        <span className="ml-3 text-xl">원클린</span>
                    </Link>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">            
                    <Link href="/" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">기본정보 입력</a>
                    </Link>
                    <Link href="/order" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">예약정보 입력</a>
                    </Link>
                    <Link href="/detail" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">상세정보 입력</a>
                    </Link>
                    <Link href="/confirm" legacyBehavior>
                        <a className="mr-5 hover:text-gray-900">예약정보 확인</a>
                    </Link>
                </nav>
            </div>
        </header>  
    )

    /*return <nav>
        <Link href="/" legacyBehavior>
            <a className={router.pathname === '/' ? 'active' : 'deactive'}>Home</a>
        </Link>
        <Link href="/service" legacyBehavior>
            <a className={router.pathname === '/service' ? 'active' : 'deactive'}>서비스 이용</a>
        </Link>
        <Link href="/review" legacyBehavior>
            <a className={router.pathname === '/review' ? 'active' : 'deactive'}>실제 고객후기</a>
        </Link>
        <style jsx>{`
            .active {
                background-color: palegreen;
                color : rgb(36, 133, 52);
                text-decoration: none;
            }
            
            .deactive {
                background-color: azure; 
                color : black;
                text-decoration: none;
            }
        `}</style>
    </nav>*/
}