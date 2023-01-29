import Feed from "../MinimalFeed";
import { Pacifico } from "@next/font/google";
import FramerMotionDiv from "../../(Providers)/FramerMotionDiv";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

function MyLiked() {
  return (
    <FramerMotionDiv>
      <div className="flex flex-col justify-center space-y-10 mt-8">
        <div className="text-center">
          <h1 className={`${pacifico.className} font-bold text-5xl`}>
            Your Liked Rings!
          </h1>
          <p className={`${pacifico.className} text-gray-400 text-xl`}>
            You have a great taste!
          </p>
        </div>
        <Feed fetchKey={"/user/myliked"} />
      </div>
    </FramerMotionDiv>
  );
}

export default MyLiked;
