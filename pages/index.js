import Title from "../components/common/Title";
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react";
//import { Inter } from '@next/font/google'
//import styles from '../styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Customer() {
  const router = useRouter();
  const customerRef = useRef();
  const [isChanged, setIsChanged] = useState(false);
  const [customerInfo, setCustomerInfo] = useState();

  function handleChange(event) {
    setIsChanged(value => !value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Store the value of the input element
    
    router.push({
      pathname: '/order',
      query: { customerInfo: customerInfo },
    });
  }

  useEffect(()=>{
    setCustomerInfo([
      customerRef.current.elements.name.value, 
      customerRef.current.elements.phonenumber.value, 
      customerRef.current.elements.address.value
    ]);
  }, [isChanged])
  
  return (
    <section className="text-gray- font-bold body-font relative">
      <Title title={`기본정보 입력`} />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">기본정보 입력</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <form ref={customerRef} className="flex flex-col text-center w-full" onChange={handleChange} onSubmit={handleSubmit}>
              <div className="p-2 w-full mx-auto">
                <div className="relative mx-auto text-center">
                  <label htmlFor="name" className="leading-7 text-me text-gray- font-bold">이름</label>
                  <input type="text" id="name" name="name" className="w-1/2 ml-12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative text-center">
                  <label htmlFor="number" className="leading-7 text-me text-gray- font-bold">전화번호</label>
                  <input type="number" id="phonenumber" name="phonenumber" className="w-1/2 ml-5 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative text-center">
                  <label htmlFor="address" className="leading-7 text-me text-gray- font-bold">주소</label>
                  <input type="text" id="address" name="address" className="w-1/2 ml-12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue- font-bold rounded text-lg">다음</button>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-blue-500">example@email.com</a>
              <p className="leading-normal my-5">49 Smith St. <br/>
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
