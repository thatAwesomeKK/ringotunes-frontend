import FramerMotionDiv from "../../(Providers)/FramerMotionDiv";
import FeedLayout from "./(Components)/FeedLayout";

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
        <FeedLayout />
      </FramerMotionDiv>
    </div>
  );
}
