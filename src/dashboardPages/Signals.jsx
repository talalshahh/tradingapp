import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import cardImage from "../images/aptos.webp";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import chart from "../images/6256878.jpg";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Signals = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
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
          Signals
        </Typography>
        <HelpIcon sx={{ color: "rgb(0, 255, 167)" }} />
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            marginTop: "2ch",
            height: "300px",
            borderRadius: "1ch",
            display: "flex",
            padding: "1ch",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(18, 28, 38)",
            width: "70%",
            padding: "2ch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "column",
              gap: "50px",
              height: "5%",
            }}
          >
            <Typography sx={{}}>Upgrade to create Smart Alerts</Typography>
            <span>30min</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "50%",
              justifyContent: "space-between",
              marginTop: "4rem",
            }}
          >
            <Box sx={{ width: "40%", display: "flex" }}>
              <Typography>
                Fresh wallets received $1,147,229 of ABC in the last 24 hours
                (22x of recent average)
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <img
                src={chart}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "2ch",
            height: "300px",
            borderRadius: "1ch",
            display: "flex",
            padding: "1ch",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(18, 28, 38)",
            width: "70%",
            padding: "2ch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "column",
              gap: "50px",
              height: "5%",
            }}
          >
            <Typography sx={{}}>Upgrade to create Smart Alerts</Typography>
            <span>30min</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "50%",
              justifyContent: "space-between",
              marginTop: "4rem",
            }}
          >
            <Box sx={{ width: "40%", display: "flex" }}>
              <Typography>
                Fresh wallets received $1,147,229 of ABC in the last 24 hours
                (22x of recent average)
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <img
                src={chart}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt=""
              />
            </Box>
          </Box>
          {/* <Box sx={{ display: "flex" }}>
            <Box>
              <Typography></Typography>
            </Box>
          </Box> */}
        </Box>
        <Box
          sx={{
            marginTop: "2ch",
            height: "300px",
            borderRadius: "1ch",
            display: "flex",
            padding: "1ch",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(18, 28, 38)",
            width: "70%",
            padding: "2ch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "column",
              gap: "50px",
              height: "5%",
            }}
          >
            <Typography sx={{}}>Upgrade to create Smart Alerts</Typography>
            <span>30min</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "50%",
              justifyContent: "space-between",
              marginTop: "4rem",
            }}
          >
            <Box sx={{ width: "40%", display: "flex" }}>
              <Typography>
                Fresh wallets received $1,147,229 of ABC in the last 24 hours
                (22x of recent average)
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <img
                src={chart}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                alt=""
              />
            </Box>
          </Box>
          {/* <Box sx={{ display: "flex" }}>
            <Box>
              <Typography></Typography>
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Signals;
