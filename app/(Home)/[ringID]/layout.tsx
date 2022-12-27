import FramerMotionDiv from "../../(Layout)/FramerMotionDiv";
import Feed from "../Feed";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <FramerMotionDiv>
        {/*@ts-ignore */}
        <Feed />
      </FramerMotionDiv>
    </div>
  );
}
