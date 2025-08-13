import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";
import "./Layout.css";

const Layout = () => {
  const theme = useTheme();

  return (
    <div
  className="layout"
  style={{ backgroundColor: theme.palette.background.default, minHeight: "100vh" }}
>
  <main
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.default
    }}
  >
    <Header />
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        padding: "2% 5%"
      }}
    >
      <Outlet />
    </div>
    <Footer />
  </main>
</div>

  );
};

export default Layout;
