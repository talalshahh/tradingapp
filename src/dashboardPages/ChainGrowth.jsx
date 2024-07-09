import React from "react";
import { Box, Button, Typography } from "@mui/material";
import cardImage from "../images/aptos.webp";

const ChainGrowth = () => {
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
            Chain Growth
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "1ch",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5vh",
            backgroundColor: " rgb(18, 28, 38)",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "bolder" }}>
            Note: Not all chains displayed here are supported across all Nansen
            features.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "3ch",
            gap: "2ch",
          }}
        >
          <Box
            sx={{
              height: "200px",
              width: "300px",
              display: "flex",
              borderRadius: "2ch",
              backgroundColor: " rgb(18, 28, 38)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cardImage}
              style={{ height: "20%", width: "100%", objectFit: "contain" }}
              alt=""
            />
            <Typography>Aptops</Typography>
            <Button
              variant="text"
              sx={{
                width: "10px",
                borderRadius: "1ch",
                color: "white",
                "&:hover": {
                  color: "rgb(0, 255, 167)",
                },
              }}
            >
              view
            </Button>
          </Box>
          <Box
            sx={{
              height: "200px",
              width: "300px",
              display: "flex",
              borderRadius: "2ch",
              backgroundColor: " rgb(18, 28, 38)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cardImage}
              style={{ height: "20%", width: "100%", objectFit: "contain" }}
              alt=""
            />
            <Typography>Aptops</Typography>
            <Button>view</Button>
          </Box>
          <Box
            sx={{
              height: "200px",
              width: "300px",
              display: "flex",
              borderRadius: "2ch",
              backgroundColor: " rgb(18, 28, 38)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cardImage}
              style={{ height: "20%", width: "100%", objectFit: "contain" }}
              alt=""
            />
            <Typography>Aptops</Typography>
            <Button>view</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChainGrowth;
