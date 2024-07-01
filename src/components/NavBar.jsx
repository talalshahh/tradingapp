import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Logo = styled("div")({
  fontSize: "1.5rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center the logo text
  cursor: "pointer",
  flexGrow: 1, // Ensure the logo takes available space
});

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleOpen = (menu) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleSubMenuToggle = (menu) => () => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const renderMenu = (anchorEl, handleClose, items) => (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          maxHeight: 200,
          width: 150,
          display: "flex",
          padding: 0,
          margin: 0,
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          borderRadius: "2ch",
        },
      }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      MenuListProps={{
        onMouseLeave: handleClose,
      }}
    >
      {items.map((item, index) => (
        <MenuItem
          key={index}
          sx={{
            "&:hover": {
              backgroundColor: "#00ffa7",
              color: "black",
              width: "150",
              borderRadius: "1.9ch",
            },
          }}
          onClick={() => {
            handleClose();
            navigate(item.path);
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderSubMenu = (items) => (
    <Collapse in={Boolean(openSubMenu)} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{ pl: 4 }}
            onClick={() => {
              setDrawerOpen(false);
              navigate(item.path);
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );

  const productsMenuItems = [
    { label: "Page2", path: "/nansen2" },
    { label: "Api", path: "/api" },
    { label: "Alpha", path: "/alpha" },
  ];

  const solutionsMenuItems = [
    { label: "CrypoInvestors", path: "/cryptoinvestor" },
    { label: "Venture Capital", path: "/cryptoinvestor" },
    { label: "BlockChain & L2", path: "/cryptoinvestor" },
  ];

  const learnMenuItems = [
    { label: "Learn", path: "/insight" },
    { label: "Blog", path: "/blog" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        color: "white",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="LOGO" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleSubMenuToggle("products")}>
          <ListItemText primary="Products" />
          {openSubMenu === "products" ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {openSubMenu === "products" && renderSubMenu(productsMenuItems)}

        <ListItem button onClick={handleSubMenuToggle("solutions")}>
          <ListItemText primary="Solutions" />
          {openSubMenu === "solutions" ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {openSubMenu === "solutions" && renderSubMenu(solutionsMenuItems)}

        <ListItem button onClick={handleSubMenuToggle("learn")}>
          <ListItemText primary="Learn" />
          {openSubMenu === "learn" ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {openSubMenu === "learn" && renderSubMenu(learnMenuItems)}

        <ListItem button onClick={() => navigate("/pricing")}>
          <ListItemText primary="Pricing" />
        </ListItem>
        {/* {openSubMenu === "pricing" && renderSubMenu(pricingMenuItems)} */}

        <Divider />
        <ListItem button onClick={() => navigate("/contact-sales")}>
          <ListItemText primary="Contact Sales" />
        </ListItem>
        <ListItem button onClick={() => navigate("/launch-app")}>
          <ListItemText primary="Launch App" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#081224" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Logo onClick={() => navigate("/")}>LOGO</Logo>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ position: "absolute", left: 10 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left" // Open the drawer from the left
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerItems}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "4ch",
              }}
            >
              <Button
                sx={{ backgroundColor: "none", color: "white" }}
                onMouseEnter={handleOpen("products")}
              >
                Products
              </Button>
              {openMenu === "products" &&
                renderMenu(anchorEl, handleClose, productsMenuItems)}

              <Button
                sx={{ backgroundColor: "none", color: "white" }}
                onMouseEnter={handleOpen("solutions")}
              >
                Solutions
              </Button>

              {openMenu === "solutions" &&
                renderMenu(anchorEl, handleClose, solutionsMenuItems)}

              <Button
                sx={{ backgroundColor: "none", color: "white" }}
                onMouseEnter={handleOpen("learn")}
              >
                Learn
              </Button>
              {openMenu === "learn" &&
                renderMenu(anchorEl, handleClose, learnMenuItems)}

              <Button
                sx={{ backgroundColor: "none", color: "white" }}
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </Button>
            </Box>
          )}
          <Box>
            <Button
              color="inherit"
              sx={{
                display: { xs: "none", lg: "inline-block" },
              }}
              onClick={() => navigate("/contact-sales")}
            >
              Contact Sales
            </Button>
            <Button
              sx={{
                display: { xs: "none", lg: "inline-block" },
                marginLeft: 2,
                borderRadius: "1ch",
                height: "5ch",
                color: "#00ffa7",
                border: "1px solid",
                borderColor: "#00ffa7",
                "&:hover": {
                  backgroundColor: "#00ffa7",
                  color: "black",
                },
              }}
              color="inherit"
              onClick={() => navigate("/launch-app")}
            >
              Launch App
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
