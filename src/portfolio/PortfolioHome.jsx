import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
// import SmartMoney from "../dashboardPages/SmartMoney";
import SmartMoneyBuy from "./SmartMoneyTable";

const PortfolioHome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(0, 19, 33)",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "1ch",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
        }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            // label="fullWidth"
            placeholder="Search"
            id="fullWidth"
            sx={{
              height: "40px",
              "& .MuiInputBase-root": {
                backgroundColor: "black",
                color: "white",
              },
              "& .MuiInputBase-input": {
                color: "white",
                height: "5px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box>
          <Typography>Visit Website</Typography>
        </Box>
      </Box>

      <Box sx={{}}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: "40vh",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>Net Worth</Typography>
              <Typography sx={{ fontSize: "50px" }}>$0</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "60px" }}>
              <Box>
                <Typography>Net Worth</Typography>
                <Typography>$0</Typography>
              </Box>
              <Box>
                <Typography>CLAIMABLE</Typography>
                <Typography>$0</Typography>
              </Box>
              <Box>
                <Typography>TOTAL ASSETS</Typography>
                <Typography>$0</Typography>
              </Box>
              <Box>
                <Typography>TOTAL DEBTS</Typography>
                <Typography>$0</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          borderBottom: "1px solid white",
        }}
      >
        <Typography sx={{ color: "rgb(0, 255, 167)" }}>Porfolio</Typography>
        <Typography sx={{ color: "rgb(0, 255, 167)" }}>Transaction</Typography>
        <Typography sx={{ color: "rgb(0, 255, 167)" }}>Analytics</Typography>
        <Typography sx={{ color: "rgb(0, 255, 167)" }}>
          Wallet Profiler
        </Typography>
        <Typography sx={{ color: "rgb(0, 255, 167)" }}>NFT Profiler</Typography>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "2ch",
          }}
        >
          <Typography
            sx={{
              color: "rgb(0, 255, 167) ",
              backgroundColor: "rgb(0, 19, 33)",
              padding: "5px",
            }}
          >
            All{" "}
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 53, 65)",
              padding: "1ch",
              borderRadius: "2ch",
            }}
          >
            Ethereum
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 53, 65)",
              padding: "1ch",
              borderRadius: "2ch",
            }}
          >
            Ethereum
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 53, 65)",
              padding: "1ch",
              borderRadius: "2ch",
            }}
          >
            Ethereum
          </Typography>
        </Box>

        <Box sx={{ marginTop: "3ch" }}>
          <Container sx={{ display: "flex", gap: "10px" }}>
            <Box
              sx={{
                display: "flex",
                width: "25%",
                backgroundColor: "rgb(0, 26, 44)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100px",
                borderRadius: "3ch",
              }}
            >
              <Typography>Net Worth</Typography>
              <Typography>$0</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "25%",
                backgroundColor: "rgb(0, 26, 44)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100px",
                borderRadius: "3ch",
              }}
            >
              <Typography>Net Worth</Typography>
              <Typography>$0</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "25%",
                backgroundColor: "rgb(0, 26, 44)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100px",
                borderRadius: "3ch",
              }}
            >
              <Typography>Net Worth</Typography>
              <Typography>$0</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "25%",
                backgroundColor: "rgb(0, 26, 44)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100px",
                borderRadius: "3ch",
              }}
            >
              <Typography>Net Worth</Typography>
              <Typography>$0</Typography>
            </Box>
          </Container>
        </Box>

        <Box sx={{ marginTop: "3ch" }}>
          <Container sx={{ display: "flex", gap: "60px" }}>
            <Box sx={{ width: "46%" }}>
              <SmartMoneyBuy />
            </Box>
            <Box sx={{ width: "46%" }}>
              <SmartMoneyBuy />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioHome;
