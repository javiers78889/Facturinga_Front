import { Button } from '@headlessui/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imagenes from '../../src/img/Sociodrama.jpeg'
export default function Intro() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Transform Your Business with Our Innovative Solution
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Streamline your workflow, increase productivity, and drive growth with our all-in-one platform.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button>
                                <Link href="#contact">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button>
                                <Link href="#demo">Watch Demo</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={imagenes}
                            alt="Hero Image"
                            width={550}
                            height={550}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
