import Image from 'next/image'
import React from 'react'

import { Button } from '@headlessui/react'
import Link from 'next/link'
import Logo from '@/src/ui/Logo'
import { MobileNav } from './MovilNav/MovilNav'

export default function NavBarApp() {
    return (
        <header className="sticky top-0 z-50 w-full bg-amber-300 dark:border-b-white border-b-black border-b-1">
            <div className="container m-5 flex h-16 items-center justify-between text-lg text-black  ">
                <Logo />
                <nav className="hidden md:flex gap-6 font-black text-lg ">
                    <Link href="#features" className=" hover:text-white  font-medium transition-colors hover:text-primary">
                        Features
                    </Link>
                    <Link href="#testimonials" className="hover:text-white  font-medium transition-colors hover:text-primary">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="hover:text-white  font-medium transition-colors hover:text-primary">
                        Pricing
                    </Link>
                    <Link href="#faq" className="hover:text-white  font-medium transition-colors hover:text-primary">
                        FAQ
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <MobileNav />
                    <Link href='/auth/login' className="hidden md:flex rounded-xl bg-red-500 hover:bg-red-800 px-6 py-2 text-white ">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    )
}
