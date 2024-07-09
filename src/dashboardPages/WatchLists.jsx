import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import cardImage from "../images/aptos.webp";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import emptyWhistlist from "../images/empty-watchlist.webp";

const WatchLists = () => {
  const [active, setActive] = useState("Wallets");
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
            gap: "2px",
          }}
        >
          <Typography sx={{ fontSize: "20px", marginLeft: "14px" }}>
            WatchLists
          </Typography>
          <HelpIcon sx={{ color: "rgb(0, 255, 167)" }} />
        </Box>
        <Box
          sx={{
            width: "100vw",
            height: "75px",
            display: "flex",
            borderBottom: "1px solid white",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              marginLeft: "15px",
              color: active === "Wallets" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Wallets" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Wallets")}
          >
            Wallets
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "Tokens" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Tokens" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Tokens")}
          >
            Tokens
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "NFTs" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "NFTs" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("NFTs")}
          >
            NFTs
          </Typography>
        </Box>

        <Container maxWidth="xl">
          <Box
            sx={{
              marginTop: "2ch",
              height: "500px",
              borderRadius: "1ch",
              backgroundColor: "rgb(18, 28, 38)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: " 12px 15px 0 15px",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Typography>Wallet Watchlist</Typography>
                <Button
                  variant="text"
                  sx={{
                    border: "1px solid white",
                    // padding: "10px",
                    color: "black",
                    border: "1px solid white  ",
                    color: "white",
                    height: "22px",
                    "&:hover": {
                      color: "rgb(0, 255, 167)",
                    },
                  }}
                >
                  + Filter
                </Button>
              </Box>

              <Box>
                <Button
                  sx={{
                    border: "1px solid white",
                    // padding: "10px",
                    color: "black",
                    border: "1px solid white  ",
                    color: "white",
                    height: "22px",
                    "&:hover": {
                      color: "rgb(0, 255, 167)",
                    },
                  }}
                >
                  + Add Wallet
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10ch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <img
                  src={emptyWhistlist}
                  style={{ width: "100px", height: "auto" }}
                  alt=""
                />
                <Typography variant="h6">No items in your watchlist</Typography>
                <Typography variant="body2">
                  Add items to your list while browsing Nansen or by clicking
                  the “Add” button on this page.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: "8px",
                    backgroundColor: "rgb(0, 255, 167)",
                    borderRadius: "1ch",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Upgrade Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WatchLists;
