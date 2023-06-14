import { Outlet } from "react-router-dom";
import Header from "../components/header/templates/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
