import LoginForm from '@/components/Forms/LoginForm';
import React from 'react'
import ExternalLogin from './ExternalLogin';
import GoogleProvider from '@/components/Providers/GoogleProvider';
import ReduxProvider from '@/components/Providers/ReduxProvider';

const SignIn = () => {
    return (
        <main className="flex w-screen justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-xl shadow-md h-[50%] md:w-[50%] lg:w-[26%] sm:w-[25%] w-[80%]">
                <div className="p-4 flex flex-col justify-evenly h-full">
                    <div>
                        <h1 className="font-bold text-5xl text-gray-400 text-center">
                            RingoTunes
                        </h1>
                    </div>
                    <ReduxProvider>
                        <LoginForm />
                    </ReduxProvider>
                    <div className="flex items-center justify-center relative mb-10">
                        <hr className="w-full text-black" />
                        <div className="absolute border rounded-full w-fit text-center bg-white p-2">
                            OR
                        </div>
                    </div>
                    <GoogleProvider>
                        <ExternalLogin />
                    </GoogleProvider>
                </div>
            </div>
        </main>
    );
}

export default SignIn