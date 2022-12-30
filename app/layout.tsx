import "../styles/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AuthContextProvider } from "./Context/AuthContext";
import { SideBarContextProvider } from "./Context/SideBarContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <AuthContextProvider>
          <SideBarContextProvider>
            <Navbar />
            <Sidebar />
            {children}
          </SideBarContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
