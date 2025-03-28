import Image from 'next/image'
import React from 'react'
import imagen from '../img/ic-ad_97607.svg'

export default function Logo() {
    return (
        <div className="flex items-center gap-2 shadow px-2 py-1 dark:bg-white bg-white  rounded-lg border-1">
            <Image src={imagen} alt="Logo" width={32} height={32} className="rounded-md dark:bg-white " />
            <span className="text-xl font-bold text-black">FACTURINGA</span>
        </div>
    )
}
