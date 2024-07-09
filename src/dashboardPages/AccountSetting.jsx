import { Box, Link, Typography } from "@mui/material";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const AccountSetting = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black", color: "white", height: "100vh" }}>
        <Box
          sx={{
            width: "100vw",
            height: "50px",
            display: "flex",
            borderBottom: "1px solid white",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", padding: "2ch" }}>
            Account Settings
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "300px",
              backgroundColor: "rgb(18, 28, 38)",
              width: "30%",
              padding: "5ch",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "bolder" }}>Details</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2ch",
              }}
            >
              <Typography>Email:</Typography>
              <Typography>abc@gmail.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2ch",
              }}
            >
              <Typography>Account Type</Typography>
              <Typography>xyz</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2ch",
              }}
            >
              <Typography>Joined on:</Typography>
              <Typography>5 July 2024</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Link
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid white",
                  width: "100%",
                  height: "25px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Upgrade Options
              </Link>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              width: "30%",
            }}
          >
            <Link
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid white",
                width: "100%",
                height: "25px",
                borderRadius: "12px",
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
                "&:hover": {
                  color: "rgb(0, 230, 118)",
                  "& .icon": {
                    color: "rgb(0, 230, 118)",
                  },
                },
              }}
            >
              SignOut
              <ExitToAppIcon
                className="icon"
                sx={{
                  color: "inherit", // inherits color from the parent Link
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountSetting;
