import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";

const StyledTableCell = styled(TableCell)({
  borderBottom: "none",
  color: "#fff",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const plansData = [
  {
    category: "Content & Dashboards",
    features: [
      {
        name: "Nansen labels",
        free: "For entities: Entity name available",
        pioneer:
          "For entities: Exchanges Projects Smart Money (incl. Funds) Public individuals",
        professional: "All Nansen labels",
      },
      {
        name: "Signals",
        free: "NFT Volume NFT Mint Volume",
        pioneer:
          "All Signals in Free, plus: GENX Token Flow Significant DEX Flows Fresh Wallets Flow Top Balances Change Smart Money Token Flows Smart Money NFT Wallet Presence Smart Money NFT Mint",
        professional: "All Signals",
      },
      {
        name: "Smart Segments",
        free: "1",
        pioneer: "20",
        professional: "Unlimited",
      },
    ],
  },
  {
    category: "Profiler & Portfolio Tracker",
    features: [
      {
        name: "Nansen Profiler",
        free: "Excl. Entity Transactions",
        pioneer: "✔",
        professional: "✔",
      },
      {
        name: "Labels & Segments in Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      {
        name: "Wallet Profiler for Token",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
      {
        name: "Wallet Pair Profiler",
        free: "🔒",
        pioneer: "✔",
        professional: "✔",
      },
      { name: "Portfolio Tracker", free: "✔", pioneer: "✔", professional: "✔" },
    ],
  },
];

const priceText = [
  {
    id: 1,
    heading: "Free",
    text: "Discover Nansen's core features. Dive into onchain data analytics, now more powerful than ever.",
    btntxt: "Start for free",
    price: "0",
  },
  {
    id: 2,
    heading: "Pioneer",
    text: "For active investors. Elevate your investments with labeled profiles and in-depth crypto analytics.",
    btntxt: "Pioneer",
    price: 50,
  },
  {
    id: 3,
    heading: "Professional",
    text: "For serious investors and funds. Get complete access to onchain analytics, an exclusive alpha community, and institutional-grade research.",
    btntxt: "Select Plan",
    price: 150,
  },
];

export default function Pricing() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ color: "white" }}>
      <Container maxWidth="lg">
        <motion.div>
          <Box sx={{ marginTop: "5ch" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bolder", textAlign: "center" }}
            >
              Grow With us
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "2px", textAlign: "center" }}
            >
              From individual investors to crypto funds and global teams.
              Explore the best option for you.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2ch",
              gap: "1ch",
            }}
          >
            {priceText.map((item) => (
              <Box
                key={item.id}
                sx={{
                  minHeight: { xs: "70vh", md: "50vh", lg: "80vh" },
                  backgroundColor: "#121c26",
                  width: { xs: "70%", lg: "25%" },
                  border: "1px solid #00ffa7",
                  borderRadius: "9px",
                  padding: "5ch",
                }}
              >
                <Box sx={{ height: "200px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "23px", lg: "30px" },
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginTop: { xs: "", lg: "7px" },
                      fontSize: { xs: "17px" },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  $ {item.price} /Month
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "15px",
                      backgroundColor: "#00ffa7",
                      color: "black",
                      cursor: "pointer",
                      fontWeight: "bolder",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    {item.btntxt} →
                  </Button>
                </Box>
                <Box
                  sx={{
                    borderTop: "1px solid #00ffa7",
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "3px",
                      marginTop: "13px",
                    }}
                  >
                    Our Free plan includes:
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Basic wallet and entity analytics to understand token
                    balances and onchain activities
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* compare plans */}
      <Box
        sx={{
          color: "white",
          padding: "20px",
          marginTop: "2ch",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#1b2b34",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Compare plans
          </Typography>
          <TableContainer sx={{ overflowX: "hidden" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Category / Plan</StyledTableCell>
                  <StyledTableCell align="center">Free</StyledTableCell>
                  <StyledTableCell align="center">Pioneer</StyledTableCell>
                  <StyledTableCell align="center">Professional</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plansData.map((category, index) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <StyledTableCell
                        colSpan={4}
                        sx={{ backgroundColor: "#273945" }}
                      >
                        <Typography variant="h6">
                          {category.category}
                        </Typography>
                      </StyledTableCell>
                    </TableRow>
                    {category.features.map((feature, i) => (
                      <TableRow key={i}>
                        <StyledTableCell>{feature.name}</StyledTableCell>
                        <StyledTableCell align="center">
                          {feature.free}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {feature.pioneer}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {feature.professional}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Unlock the Next Level */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring", // Corrected the type to "spring"
          ease: "easeInOut",
          stiffness: 200, // Reduced stiffness for smoother animation
          damping: 150, // Adjusted damping for better balance
          duration: 2, // Optional: duration in seconds
        }}
        style={{
          backgroundColor: "#0a0f24",
          color: "white",
          marginTop: "10ch",
          minHeight: "50vh",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              padding: "0 20px",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Unlock the Next Level <br /> With Blockchain Analytics
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Take action now to generate investment returns or business
              intelligence
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00ff9f",
                color: "#0a0f24",
                padding: "10px 20px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#00e68e",
                },
              }}
            >
              Contact Sales →
            </Button>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}
