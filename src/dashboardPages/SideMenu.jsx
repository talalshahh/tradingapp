import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#121212",
          color: "#FFFFFF",
        },
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <SearchIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("/dashhome")}>
          <ListItemIcon>
            <HomeIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate("/signals")}>
          <ListItemIcon>
            <AccountBalanceWalletIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Signals" />
        </ListItem>
        <ListItem button onClick={() => navigate("/chaingrowth")}>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Smart money" />
        </ListItem>
        <ListItem button onClick={() => navigate("/smartalert")}>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Token" />
        </ListItem>
        <ListItem button onClick={() => navigate("/nfts")}>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Nfts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Hot Contracts" />
        </ListItem>
        <ListItem button onClick={() => navigate("/chaingrowth")}>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Chian Growth" />
        </ListItem>
        <ListItem button onClick={() => navigate("/ecosystem")}>
          <ListItemIcon>
            <AssessmentIcon style={{ color: "#00E676" }} />
          </ListItemIcon>
          <ListItemText primary="Eco system" />
        </ListItem>

        {/* Add more items as needed */}
      </List>

      <Divider />
      <ListItem button onClick={() => navigate("/smartalert")}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Smart Alerts" />
      </ListItem>
      <ListItem button onClick={() => navigate("/")}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Smart Segments" />
      </ListItem>

      <List>
        <ListItem button>
          <ListItemText primary="Hot Contracts" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="What's New" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Collapse Menu" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
