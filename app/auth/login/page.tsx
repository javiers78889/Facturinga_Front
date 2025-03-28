import LoginForm from '@/components/auth/LoginForm';
import imagen from '../../../src/img/ic-ad_97607.svg'
import Image from "next/image";

export default function LoginPage() {

    return (
        <div className="flex min-h-screen">
            {/* Left column - Login form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-6 lg:px-8 xl:px-12">
                <div className="mx-auto w-full max-w-sm border-1 p-6 rounded-lg shadow-lg">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Inicia Sesión</h1>
                        <p className="text-sm text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta</p>
                    </div>
                        
                    <LoginForm />
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

