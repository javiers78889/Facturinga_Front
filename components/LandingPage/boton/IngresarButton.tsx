import Link from 'next/link'
import React from 'react'

export default function IngresarButton() {
    return (
        <Link href='/auth/login' className="hidden md:flex rounded-xl bg-red-500 hover:bg-red-800 px-6 py-2 text-white ">
            Get Started
        </Link>
    )
}
