import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
