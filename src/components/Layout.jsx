import React from "react";
import { Box } from "@mui/material";
import Navbar from "./NavBar";
import Footer from "./Footer";
import SideMenu from "../dashboardPages/SideMenu";
import ScrollControlledVideo from "./ScrollControlledVideo";
import zIndex from "@mui/material/styles/zIndex";

// const Layout = ({ children }) => {
//   // const { user, isLoggedIn, isCheckingAuth } = useAuth();

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Navbar />
//       <Box sx={{ position: "absolute" }}>
//         <ScrollControlledVideo />
//       </Box>
//       <Box sx={{ minHeight: "100vh", zIndex: "1" }}> {children}</Box>
//       <Footer />
//     </Box>
//   );
// };
// export default Layout;

const Layout = ({ children }) => {
  // const { user, isLoggedIn, isCheckingAuth } = useAuth();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "18%", backgroundColor: "black" }}>
          <SideMenu />
        </Box>
        <Box sx={{ width: "82%", minHeight: "100vh" }}>
          <Box sx={{ minHeight: "" }}> {children}</Box>
        </Box>
      </Box>
    </>
  );
};
export default Layout;
