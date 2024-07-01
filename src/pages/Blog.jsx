import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import cardImg1 from "../images/6422edc7d43618dbce76b6da_surface-the-signal.png";

const cardsData = [
  {
    id: 1,
    img: cardImg1,
    heading:
      "Ethereum Shanghai Upgrade Explained, Key Metrics to Track and Future Predictions",
    text: "Everything you need to know about Ethereum's Shanghai Upgrade, how ETH withdrawals work, key metrics to monitor and potential long term implications of the upgrade.",
  },
  {
    id: 2,
    img: cardImg1,
    heading:
      "Ethereum Shanghai Upgrade Explained, Key Metrics to Track and Future Predictions",
    text: "Everything you need to know about Ethereum's Shanghai Upgrade, how ETH withdrawals work, key metrics to monitor and potential long term implications of the upgrade.",
  },
  {
    id: 3,
    img: cardImg1,
    heading:
      "Ethereum Shanghai Upgrade Explained, Key Metrics to Track and Future Predictions",
    text: "Everything you need to know about Ethereum's Shanghai Upgrade, how ETH withdrawals work, key metrics to monitor and potential long term implications of the upgrade.",
  },
  {
    id: 4,
    img: cardImg1,
    heading:
      "Ethereum Shanghai Upgrade Explained, Key Metrics to Track and Future Predictions",
    text: "Everything you need to know about Ethereum's Shanghai Upgrade, how ETH withdrawals work, key metrics to monitor and potential long term implications of the upgrade.",
  },
];

function Blog() {
  return (
    <>
      <Box sx={{ color: "white", marginTop: "6ch" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", marginTop: "3ch" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Blogs
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "1ch" }}>
              Market-leading research and insights from crypto's onchain
              intelligence hub.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "30vh",
              marginTop: "5ch",
              gap: "10px",
              backgroundColor: "#081224",
              padding: "4ch",
              borderRadius: "18px",
              "&:hover": {
                backgroundColor: "black",
                cursor: "pointer",
              },
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Box sx={{ height: "100%" }}>
                <img
                  src={cardImg1}
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  width: "5vw",
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                  borderRadius: "3px",
                }}
              >
                Blog
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bolder", marginTop: "5px" }}
              >
                A Look into Arbitrum After the Airdrop
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "12px" }}>
                We delve into crucial on-chain metrics to gain insights into the
                current state of Arbitrum following their airdrop. Additionally,
                we analyze the delegation dynamics of ARB holders and examine
                changes in activity among airdrop recipients.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Blog Cards */}

      <Box sx={{ minHeight: "50vh", color: "white", marginTop: "6ch" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: "7ch" }}>
            <Box sx={{ width: "20%", position: "relative" }}>
              <Box
                sx={{
                  position: "sticky",
                  //   height: "20vh",
                  backgroundColor: "#081224",
                  width: "100%",
                  padding: "3ch",
                  borderRadius: "3ch",
                  top: "0",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Blog DAO DEFI GAMING GUIDES NFT SMART MONEY
                </Typography>
              </Box>
            </Box>

            {/* cards  */}
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexWrap: "wrap",
                gap: "5ch",
              }}
            >
              {cardsData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    flexBasis: "45%",
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                    backgroundColor: "#081224",
                    borderRadius: "18px",
                    "&:hover": {
                      backgroundColor: "black",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box sx={{ flexGrow: "0.5" }}>
                    <Box sx={{}}>
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: "2ch" }}>
                    <Typography
                      sx={{
                        width: "7vw",
                        backgroundColor: "white",
                        color: "black",
                        textAlign: "center",
                        borderRadius: "3px",
                      }}
                    >
                      Blog
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bolder",
                        //   marginTop: "5px",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "10px" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
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
          marginTop: "20ch",
          minHeight: "50vh",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              height: "70vh",
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
              Level Up Your <br /> Crypto Game Today
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
              Start For Free →
            </Button>
          </Box>
        </Container>
      </motion.div>
    </>
  );
}

export default Blog;
