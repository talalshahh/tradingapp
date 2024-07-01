import { Box, Button, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React, { useState } from "react";
import backgroundImage from "../images/656480380205349234e6c044_image (8)-p-1080.png";
import backgroundImage2 from "../images/656465133dcc1c28a9662b25_Screenshot 2023-11-27 at 4.33.20 PM.webp";
import backgroundImage3 from "../images/maxim-hopman-fiXLQXAhCfk-unsplash.jpg";
import useCounter from "../components/useCounter";

const Home = () => {
  const counterData = [
    {
      id: 1,
      heading: "25",
      text: "Transactions per second",
    },
    {
      id: 2,
      heading: "1.0s",
      text: "Avg Block Time (24h)",
    },
    {
      id: 3,
      heading: "2000",
      text: "Avg TX Per Block (24h)",
    },
    {
      id: 4,
      heading: "37",
      text: "Consensus Nodes",
    },
  ];

  const cardContent = [
    {
      id: 1,
      img: backgroundImage,
    },
    {
      id: 2,
      img: backgroundImage2,
    },
    {
      id: 3,
      img: backgroundImage3,
    },
  ];
  const { ref: ref, count } = useCounter({
    startValue: 0,
    endValue: 100,
    duration: 1000,
  });
  const { ref: refM, count: countM } = useCounter({
    startValue: 100,
    endValue: 300,
    duration: 1000,
  });
  const { ref: refTB, count: countTB } = useCounter({
    startValue: 100,
    endValue: 500,
    duration: 1000,
  });
  const { ref: refPct, count: countPct } = useCounter({
    startValue: 20,
    endValue: 95,
    duration: 1000,
  });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black	",
          color: "white",
          height: "100%",

          backgroundCover: "cover",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Box
            sx={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-betweeen",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: "2rem",
                  paddingTop: "7ch",
                }}
              >
                Onchain Data Platform Trusted by the Best
              </Typography>
              <Typography variant="body2">
                Empowering Crypto Investors With Deep Insights To Make More
                Informed Decisions.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "12px",
                  gap: "3ch",
                }}
              >
                <Button
                  variant=""
                  sx={{
                    width: "25vw",
                    border: "1px solid white",
                    borderRadius: "3ch",
                    fontSize: "1rem",
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#ff2f00",
                      color: "black",
                      border: "none",
                    },
                  }}
                >
                  Outlined
                </Button>
                <Button
                  variant=""
                  sx={{
                    width: "25vw",
                    border: "1px solid white",
                    borderRadius: "3ch",
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#ff2f00",
                      color: "black",
                      border: "none",
                    },
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: { xs: "0", md: "5ch" },
                marginTop: { xs: "2ch" },
                height: { xs: "ch40vh", md: "50vh" }, // Set md height as needed
                width: { xs: "90vw", md: "50vw" }, // Set md width as needed
                overflow: "hidden", // Ensure the image doesn't overflow
              }}
            >
              <img
                src={backgroundImage}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                alt="Background"
              />
            </Box>
          </Box>

          <Box className="Countdown">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "center", md: "" },
                alignItems: { xs: "center", md: "" },
                gap: "5px",
              }}
            >
              {counterData.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid grey",
                    borderRadius: "3ch",
                    height: "12vh",
                    justifyItems: "center",
                    alignItems: "center",
                    width: { xs: "90%", lg: "20vw" },
                    padding: "",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: { xs: "1.5rem", lg: "1.25rem" },
                      display: "flex",
                      paddingTop: "2ch",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid grey",
                  borderRadius: "3ch",
                  height: "12vh",
                  justifyItems: "center",
                  alignItems: "center",
                  width: { xs: "90%", lg: "20vw" },
                  padding: "",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    paddingTop: "2ch",
                    textAlign: "center",
                  }}
                >
                  ${count}
                </Typography>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Market Cap 37 Consensus Nodes 123
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              marginTop: "12ch",
              minHeight: "20vw",
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", paddingTop: "1ch" }}
            >
              The backBone for Blockchain data
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginBottom: { xs: "7px", lg: "0" } }}
            >
              Follow the Smart Money, see where funds are moving to, identify
              new projects or tokens, and trace transactions down to the most
              granular level.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "center",
                gap: { md: "1ch", lg: "15ch" },
              }}
            >
              <Box
                ref={refM}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",

                  borderRight: "1px solid linear-gradient(#bd8bf3,#30459e)",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "2rem", lg: "3rem" },
                  }}
                >
                  {countM}M+
                </Typography>
                <Typography variant="body1">Labelled addresses</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",

                  borderRight: "1px solid linear-gradient(#bd8bf3,#30459e)",
                  borderLeft: "1px solid linear-gradient(#bd8bf3,#30459e)",
                  padding: "25px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "2rem", lg: "3rem" },
                  }}
                  ref={refTB}
                >
                  {countTB}TB+
                </Typography>
                <Typography variant="body1">Data processed daily</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",

                  padding: "10px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "2rem", lg: "3rem" },
                  }}
                  ref={refPct}
                >
                  {countPct}%
                </Typography>
                <Typography variant="body1">Of all onchain TVL</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            class="card sections "
            sx={{ marginTop: { xs: "2ch", lg: "9ch" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: { xs: "5ch", lg: "10ch" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bolder",
                  fontSize: { xs: "2rem", lg: "5rem" },
                }}
              >
                Dream It, Built It
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", lg: "1rem" },
                }}
              >
                he Klaytn developer environment offers world-class resources and
                support builders require to kick start their Web3 ambitions.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "center", lg: "space-between" },
                alignItems: { xs: "center", lg: "" },
                gap: "5ch",
              }}
            >
              {cardContent.map((item) => (
                <Box
                  key={item.id}
                  // card
                  sx={{
                    // height: { xs: "60vh", lg: "500px" },
                    backgroundImage: `url(${backgroundImage})`,
                    width: { xs: "90%", lg: "35%" },
                    border: "1px solid grey",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "1px solid grey",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "2ch",
                    marginTop: "2ch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.img}
                      style={{
                        height: "100%",
                        marginBottom: "5rem",
                        width: "100%",
                        objectFit: "contain",
                        marginTop: "1ch",
                        borderRadius: "1ch",
                      }}
                      alt=""
                    />
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      Geting started
                    </Typography>
                    <Button
                      variant=""
                      sx={{
                        float: "end",
                        width: { xs: "100px" },
                        border: "1px solid white",
                        borderRadius: "3ch",
                        fontSize: "1rem",
                        backgroundColor: "transparent",
                        color: "white",
                        marginBottom: "1ch",
                        "&:hover": {
                          backgroundColor: "#ff2f00",
                          color: "black",
                          border: "none",
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ marginTop: "12ch" }}>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: { xs: "1rem", lg: "2rem" },
                textAlign: "center",
                lineBreak: "auto",
              }}
            >
              See Forward with Nansen’s Blockchain Analytics
            </Typography>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "2rem",
                textAlign: "center",
                lineBreak: "auto",
              }}
            >
              Looking for new possibilities? Discover them now
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                marginTop: { xs: "2ch", md: "10ch" },
                paddingBottom: "2ch",
              }}
            >
              <Button
                variant=""
                sx={{
                  width: { xs: "60%", lg: "10vw" },
                  border: "1px solid white",
                  borderRadius: "3ch",
                  fontSize: "1rem",
                  backgroundColor: "white",
                  color: "black",
                  marginBottom: { xs: "5px", md: "" },
                  "&:hover": {
                    backgroundColor: "#00ffa7",
                    color: "black",
                    border: "none",
                  },
                }}
              >
                Start For Free
              </Button>
              <Button
                variant=""
                sx={{
                  marginLeft: { xs: "2px", lg: "3ch" },
                  width: { xs: "50%", lg: "10vw" },

                  border: "1px solid white",
                  borderRadius: "3ch",
                  fontSize: "1rem",
                  backgroundColor: "#00ffa7",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#00ffa7",
                    color: "black",
                    border: "none",
                  },
                }}
              >
                Contact sales
              </Button>
            </Box>
          </Box>
        </Container>

        {/* cards  */}
        <Box sx={{ marginTop: "10ch" }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: { xs: "2ch", lg: "4rem" },
              }}
            >
              Loved by the Smartest Investors <br /> and Teams in Crypto
            </Typography>
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "5ch",
                  gap: "1ch",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "400px",
                    backgroundColor: "#121c26",
                    border: "0.3px solid grey",
                    padding: "3rem",
                    borderRadius: "2ch",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                    We started using Nansen over 2 years ago and we could not
                    imagine investing in crypto without it. It helped us turn
                    $800 into over a million during the last bull market. If
                    data is the new oil, then Nansen is the new combustion
                    engine. If you’re a serious investor who cares about due
                    diligence, and values god-tier industry research, this
                    product is a no-brainer. Try it out today, your portfolio
                    won’t regret it!
                  </Typography>
                  <Box sx={{ marginTop: "2ch" }}>
                    <Typography>Brainyield</Typography>
                    <Link sx={{ marginTop: "1ch" }} href="/">
                      Brainyield
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "400px",
                    backgroundColor: "#121c26",
                    border: "0.3px solid grey",
                    padding: "3rem",
                    borderRadius: "2ch",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                    We started using Nansen over 2 years ago and we could not
                    imagine investing in crypto without it. It helped us turn
                    $800 into over a million during the last bull market. If
                    data is the new oil, then Nansen is the new combustion
                    engine. If you’re a serious investor who cares about due
                    diligence, and values god-tier industry research, this
                    product is a no-brainer. Try it out today, your portfolio
                    won’t regret it!
                  </Typography>
                  <Box sx={{ marginTop: "2ch" }}>
                    <Typography>Rohan</Typography>
                    <Link sx={{ marginTop: "1ch" }} href="/">
                      Rohan
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "400px",
                    backgroundColor: "#121c26",
                    border: "0.3px solid grey",
                    padding: "3rem",
                    borderRadius: "2ch",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                    We started using Nansen over 2 years ago and we could not
                    imagine investing in crypto without it. It helped us turn
                    $800 into over a million during the last bull market. If
                    data is the new oil, then Nansen is the new combustion
                    engine. If you’re a serious investor who cares about due
                    diligence, and values god-tier industry research, this
                    product is a no-brainer. Try it out today, your portfolio
                    won’t regret it!
                  </Typography>
                  <Box sx={{ marginTop: "2ch" }}>
                    <Typography>Gori</Typography>
                    <Link sx={{ marginTop: "1ch" }} href="/">
                      Gori
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
