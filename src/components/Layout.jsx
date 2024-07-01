import React from "react";
import { Box } from "@mui/material";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "black" }}>
      <Navbar />

      <Box sx={{ minHeight: "100vh" }}> {children}</Box>

      <Footer />
    </Box>
  );
};
export default Layout;
