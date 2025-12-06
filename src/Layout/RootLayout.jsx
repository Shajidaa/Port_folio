import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default RootLayout;
