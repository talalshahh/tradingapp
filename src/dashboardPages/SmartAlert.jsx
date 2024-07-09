import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import cardImage from "../images/aptos.webp";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import smartImg from "../images/smart-alerts.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const segments = [
  {
    segment: "Whale WBTC",
    description: "Addresses holding more than 100 WBTC",
    status: "Ready",
    wallets: 180,
  },
  {
    segment: "Doge Gank",
    description: "The segment of addresses that hold variety of doge tokens",
    status: "Preparing",
    wallets: 2282,
  },
];

const SmartAlert = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
      >
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
            Smart Alert
          </Typography>
          <HelpIcon sx={{ color: "rgb(0, 255, 167)" }} />
        </Box>

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2ch",
              backgroundColor: "rgb(18, 28, 38)",
              borderRadius: "10px",
              marginTop: "15px",
              gap: "9px",
            }}
          >
            <InfoIcon sx={{ color: "rgb(120, 211, 248)" }} />
            <Typography variant="body2" sx={{ fontWeight: "" }}>
              Your Smart Alerts have been migrated to 2, and your 1 Smart Alerts
              have been disabled. To set up new alerts or edit your existing
              Smart Alerts, please use 2.
              <br />
              Please note that this migration excludes several types of Smart
              Alerts.
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "2ch",
              height: "500px",
              borderRadius: "1ch",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(18, 28, 38)",
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
                src={smartImg}
                style={{ width: "100px", height: "auto" }}
                alt=""
              />
              <Typography variant="h6" sx={{}}>
                Upgrade to create Smart Alerts
              </Typography>
              <Typography variant="body2">
                Use Smart Alerts to receive instant notifications about onchain
                activities involving specific wallets or entities, so you can
                react promptly to capitalize on opportunities or mitigate risks.
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

          <Box sx={{ padding: "20px", backgroundColor: "rgb(18, 28, 38)" }}>
            <Typography variant="h6" gutterBottom>
              Example Segments
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ backgroundColor: "black", color: "white" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Segment</TableCell>
                    <TableCell sx={{ color: "white" }}>Description</TableCell>
                    <TableCell sx={{ color: "white" }}>Status</TableCell>
                    <TableCell sx={{ color: "white" }}># Wallets</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {segments.map((segment) => (
                    <TableRow key={segment.segment}>
                      <TableCell sx={{ color: "white" }}>
                        {segment.segment}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {segment.description}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {segment.status}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {segment.wallets}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SmartAlert;
