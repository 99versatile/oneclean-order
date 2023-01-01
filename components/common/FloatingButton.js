import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
//import "../styles/FloatingButton.module.css"
import Link from "next/link"

const FloatingButton = ({btnName, destPage}) => {

    return (
        <Link href={destPage} legacyBehavior>
            <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">{btnName}</button>
        </Link>
    )
}

export default FloatingButton;