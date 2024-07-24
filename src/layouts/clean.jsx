import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;