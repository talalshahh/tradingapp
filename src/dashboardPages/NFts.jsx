import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
// import NFTsTable from "../components/NFTsTable";
import NftsSlider from "../components/NFTsSlider";
import NftsCollections from "./NftsCollectons";
import NFtsCards from "./NFtsCards";
// import Collections from "./Collectons";
// import NftsTableData from "../components/NftsTableData";
// import NFTTable from "../components/NftsTableData";

const NFTs = () => {
  const [active, setActive] = useState("Market Overview");
  return (
    <>
      <Box
        sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
      >
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
              color: active === "Spotlight" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Spotlight" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Market Overview")}
          >
            Market Overview
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "Highlights" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Highlights" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Highlights")}
          >
            Highlights
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "PnL" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "PnL" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("PnL")}
          >
            PnL
          </Typography>
        </Box>

        <Box sx={{ width: "90%", marginTop: "2ch" }}>
          <NftsSlider />
        </Box>

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "4ch",
            }}
          >
            <Box
              sx={{
                width: "90%",
                background: "#081224",
                color: "white",
                // height: "500px",
              }}
            >
              <NftsCollections />
            </Box>
          </Box>
        </Container>
        <NFtsCards />
      </Box>
    </>
  );
};

export default NFTs;
