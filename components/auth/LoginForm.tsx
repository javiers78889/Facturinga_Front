import { Button, Input } from '@headlessui/react'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
const inputs = 'w-full py-1  rounded-sm  border-1 text-center'
export default function LoginForm() {
    return (
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
    )
}
