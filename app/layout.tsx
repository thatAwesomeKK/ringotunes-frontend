import "../styles/globals.css";
import Navbar from "./Navbar";
import Providers from "./Providers";
import Sidebar from "./Sidebar";
import Feed from "./(Home)/Feed";
import FramerMotionDiv from "./(Layout)/FramerMotionDiv";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Navbar />
          <Sidebar />
        </Providers>
        {children}
      </body>
    </html>
  );
}
