import { Pacifico } from "@next/font/google";
import FramerMotionDiv from "../../(Providers)/FramerMotionDiv";
import MinimalFeed from "../MinimalFeed";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

function MyDownloads() {
  return (
    <FramerMotionDiv>
      <div className="flex flex-col justify-center space-y-10 mt-8">
        <div className="text-center">
          <h1 className={`${pacifico.className} font-bold text-5xl`}>
            Your Downloaded Rings!
          </h1>
          <p className={`${pacifico.className} text-gray-400 text-xl`}>
            How are you liking your Downloads?!
          </p>
        </div>
        <MinimalFeed fetchKey={"/user/mydownloads"} />
      </div>
    </FramerMotionDiv>
  );
}

export default MyDownloads;
