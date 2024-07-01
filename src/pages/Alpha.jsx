import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import bcImg from "../images/maxim-hopman-fiXLQXAhCfk-unsplash.jpg";
import Chart from "../images/65002d0a1e9e2e864a11e8ad_alpha.svg";
import slide1 from "../images/Screenshot 2024-06-26 181429.png";
import slide2 from "../images/Screenshot 2024-06-26 181514.png";
import slide3 from "../images/Screenshot 2024-06-26 181547.png";
import svg from "../images/65002d0a1e9e2e864a11e8ad_alpha.svg";

const images = [slide1, slide2, slide3];

const Alpha = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bcImg})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            background: "rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "15ch",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "80%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bolder",
                    lineHeight: "4rem",
                  }}
                >
                  Generate Outsized Returns With the Ultimate Membership Club in
                  Crypto
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bolder", marginTop: "3ch" }}
                >
                  Effortlessly Analyze and Track Key Movements and Metrics to
                  Navigate the Market More Effectively
                </Typography>
              </Box>
              <Box sx={{ marginTop: { xs: "3ch", md: 0 } }}>
                <Button
                  sx={{
                    width: { xs: "auto", md: "9.5vw" },
                    border: "1px solid white",
                    borderRadius: "3ch",
                    fontSize: "1rem",
                    backgroundColor: "#00ffa7",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                    },
                  }}
                >
                  Contact Sales
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            color: "white",
            marginTop: "5ch",
            backgroundColor: "rgba(0,0,0,0.6)",
            textAlign: "center",
            paddingTop: "5ch",
            paddingBottom: "5ch",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
            Engaged With The Smartest Minds in Crypto
          </Typography>
          <Typography variant="body1">
            Forge deep personal connections with other top investors, founders,
            and industry leaders, and take your investing game to a whole new
            level.
          </Typography>
          <Box
            sx={{
              display: "flex",
              padding: "35px",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5ch",
              gap: "2ch",
            }}
          >
            {images.map((img, index) => (
              <Box key={index}>
                <img
                  src={img}
                  style={{ height: "auto", width: "100%", objectFit: "cover" }}
                  alt={`Slide ${index + 1}`}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ color: "white", textAlign: "center", marginTop: "10ch" }}>
        <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
          Access to Custom <br />
          Alpha-Only Nansen <br /> Dashboards
        </Typography>
        <Typography sx={{ marginTop: "5ch" }}>
          Get enhanced access to on-chain analytics. Request custom dashboards
          to give you the data you need. Backed by Nansen’s proprietary wallet
          labels.
        </Typography>
        <img src={svg} alt="Custom Dashboards" />
      </Box>

      <Box>
        <Container>
          <Box sx={{ color: "white", textAlign: "center", marginTop: "10ch" }}>
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              What Do You Need to Qualify?
            </Typography>
            <Typography sx={{ marginTop: "5ch", marginBottom: "5ch" }}>
              Alpha is an exclusive membership club, we only let in the best.
              Applications are considered case-by-case but these are some of the
              criteria we look for.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              color: "white",
              gap: "2ch",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#061019",
                width: "100%",
                maxWidth: "500px",
                height: "200px",
                borderRadius: "30px",
                border: "0.5px solid gray",
                padding: "2ch",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  paddingBottom: "1ch",
                  paddingTop: "2ch",
                }}
              >
                Professional Plan Annual Subscriber
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Annual subscribers of the{" "}
                <span style={{ color: "#00ffa7", fontWeight: "bold" }}>
                  Professional Plan
                </span>{" "}
                may apply to join the Alpha Community.
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#061019",
                width: "100%",
                maxWidth: "500px",
                height: "200px",
                borderRadius: "30px",
                border: "0.5px solid gray",
                padding: "2ch",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  paddingBottom: "1ch",
                  paddingTop: "2ch",
                }}
              >
                View things online
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Annual subscribers of the{" "}
                <span style={{ color: "#00ffa7", fontWeight: "bold" }}>
                  Professional Plan
                </span>{" "}
                may apply to join the Community.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Alpha;
