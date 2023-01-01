import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { useRouter } from "next/router"

const ChangeButton = ({ pageName, className }) => {
    
    return (
        <Link href={pageName} legacyBehavior>
            <button value={pageName} className={className}>변경</button> 
        </Link>
    )
  }

export default ChangeButton;