import { Button, Checkbox, Input } from "@headlessui/react"
import Link from "next/link"
import { Label } from "@/components/ui/label";
import imagen from '../../../src/img/ic-ad_97607.svg'
import Image from "next/image";
const inputs = 'w-full py-1  rounded-sm m-2 border-1 text-center'
export default function LoginPage() {

    return (
        <div className="flex min-h-screen">
            {/* Left column - Login form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-6 lg:px-8 xl:px-12">
                <div className="mx-auto w-full max-w-sm">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Inicia Sesión</h1>
                        <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
                    </div>

                    <form action={''} className="mt-8 space-y-6 ">
                        <div className="space-y-4 flex flex-col justify-center items-center">
                            <div className="space-y-2 w-full text-lg">
                                <Label htmlFor="email" >Email</Label>
                                <Input className={inputs} id="email" placeholder="name@example.com" type="email" required />
                            </div>
                            <div className="space-y-2 w-full text-lg">
                                <Label htmlFor="password">Password</Label>
                                <Input className={inputs} id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full bg-amber-400 rounded-lg py-2 cursor-pointer text-lg font-black hover:bg-amber-500 uppercase">

                                Entrar
                            </Button>
                        </div>


                        <div className="text-center text-sm">
                            No tienes cuenta?{" "}
                            <Link href="#" className="text-amber-400 hover:underline ">
                                Crear una
                            </Link>
                        </div>
                        <div className="text-center text-sm ">
                            <Link href="/" className="bg-red-500 text-white w-fit px-6 py-2 rounded-lg ">
                                Volver
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right column - Image or decorative content */}
            <div className="hidden bg-auth md:block md:w-1/2 border-l-1">
                <div className="flex h-full items-center justify-center p-6  ">
                    <div className="max-w-md text-center space-y-6  ">
                        <div className="flex items-center gap-2 shadow px-2 py-1 dark:bg-white bg-white  rounded-lg border-1">
                            <Image src={imagen} alt="Logo" width={80} height={60} className="rounded-md dark:bg-white " />
                            <span className="text-3xl font-black text-black uppercase">facturinga</span>
                        </div>
                        <p className=" text-lg bg-gray-500 text-white rounded-lg border-1 border-white ">
                            Crea, Edita y Envía tus facturas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

