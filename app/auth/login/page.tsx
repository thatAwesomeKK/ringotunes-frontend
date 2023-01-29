import ExternalLogin from "./ExternalLogin";
import LoginForm from "./LoginForm";
import GoogleProvider from "../../(Providers)/GoogleProvider";

const Login = async () => {
  return (
    <main className="flex w-screen justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md h-[50%] w-[25%]">
        <div className="p-4 flex flex-col justify-evenly h-full">
          <div>
            <h1 className="font-bold text-5xl text-gray-400 text-center">
              RingoTunes
            </h1>
          </div>
          <LoginForm />
          <div className="flex items-center justify-center relative">
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
};

export default Login;
