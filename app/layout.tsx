import "../styles/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AuthContextProvider } from "./Context/AuthContext";
import { SideBarContextProvider } from "./Context/SideBarContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from "./(Providers)/Providers";

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
            <Providers>
            <Navbar />
            <Sidebar />
            {children}
            </Providers>
          </SideBarContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
