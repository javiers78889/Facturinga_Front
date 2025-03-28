import { Button } from '@headlessui/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imagenes from '../../src/img/Sociodrama.jpeg'
import IngresarButton from './boton/IngresarButton'
export default function Intro() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Transforma Tu Negocio Con Nuestra Solucion Innovadora
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Crea facturas de forma ilimitada y envialas a tus clientes
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <IngresarButton/>
                            
                                <Link href="#demo" className='hidden md:flex rounded-xl bg-green-500 hover:bg-green-800 px-6 py-2 text-white'>Contacto </Link>
                            
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
