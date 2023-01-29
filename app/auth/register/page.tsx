import React from "react";
import RegisterForm from "./RegisterForm";

const Register = async() => {
  return (
    <main className="flex w-screen justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md h-[50%] w-[25%]">
        <div className="p-4 flex flex-col h-full">
          <h1 className="font-bold text-5xl text-gray-400 text-center mb-3">
            RingoTunes
          </h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default Register;
