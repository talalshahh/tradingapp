import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BugReportIcon from "@mui/icons-material/BugReport";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
// import DiscordIcon from "@mui/icons-material/Discord";

const PortfolioSideMenu = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#06152A",
          color: "#fff",
        },
      }}
    >
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" noWrap component="div">
          Nansen Portfolio
        </Typography>
      </div>
      <Divider />
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Avatar alt="Syed Talal Hassan" src="/static/images/avatar/1.jpg" />
        <Typography variant="body1" noWrap component="div">
          Syed Talal Hassan
        </Typography>
      </div>
      <Divider />
      <List>
        {[
          "Dashboard",
          "Portfolios",
          "Entities",
          "Protocols",
          "Bug Report",
          "Feature Request",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <DashboardIcon style={{ color: "#ffffff" }} />}
              {index === 1 && (
                <AccountCircleIcon style={{ color: "#ffffff" }} />
              )}
              {index === 2 && <GroupsIcon style={{ color: "#ffffff" }} />}
              {index === 3 && (
                <AccountBalanceIcon style={{ color: "#ffffff" }} />
              )}
              {index === 4 && <BugReportIcon style={{ color: "#ffffff" }} />}
              {index === 5 && <LightbulbIcon style={{ color: "#ffffff" }} />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          style={{ color: "#ffffff" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          aria-label="Telegram"
          href="https://telegram.org"
          target="_blank"
          style={{ color: "#ffffff" }}
        >
          <TelegramIcon />
        </IconButton>
        <IconButton
          aria-label="Discord"
          href="https://discord.com"
          target="_blank"
          style={{ color: "#ffffff" }}
        >
          {/* <DiscordIcon /> */}
        </IconButton>
      </div>
    </Drawer>
  );
};

export default PortfolioSideMenu;
