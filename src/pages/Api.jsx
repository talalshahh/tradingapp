import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Avatar,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import wehave from "../images/65b261098158ddbaa595cd64_data-sets-p-800.png";
import useCounter from "../components/useCounter";
import { useMediaQuery } from "@mui/material";

const Api = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust the threshold as needed
  });
  const { ref: refM, count: countM } = useCounter({
    startValue: 100,
    endValue: 300,
    duration: 1000,
  });
  const { ref: refTb, count: countTb } = useCounter({
    startValue: 700,
    endValue: 1000,
    duration: 1000,
  });
  const { ref: refP, count: countP } = useCounter({
    startValue: 1000,
    endValue: 3000,
    duration: 1000,
  });
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ color: "white" }}>
      <Box sx={{ color: "white", marginTop: "16ch" }}>
        <Container maxWidth="lg">
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontSize: "1.25rem",
                fontWeight: 500,
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              API
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bolder", textAlign: "center" }}
            >
              Unlock the Power of Onchain Data
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bolder", textAlign: "center" }}
            >
              From tracking tokens and wallets to analyzing exchange flows,{" "}
              <br />
              our API equips you with the data you need to stay ahead in
              <br />
              crypto.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2ch",
              marginTop: "5ch",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "200px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#00ffa7",
                color: "black",
                cursor: "pointer",
                fontWeight: "bolder",
                "&:hover": {
                  backgroundColor: "#05eb9c",
                },
              }}
            >
              Request Early Access
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "200px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
                fontWeight: "bolder",
                "&:hover": {
                  backgroundColor: "#05eb9c",
                },
              }}
            >
              Read more
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={{ height: "20vh" }}></Box>
      <Box sx={{ marginTop: "2ch", minHeight: "50vh" }}>
        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                textAlign: "center",
                color: "white",
                fontSize: isMobile ? "30px" : "44px",
              }}
            >
              Unique Data. Comprehensive Coverage
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              marginTop: "4ch",
            }}
          >
            <Box sx={{ width: isMobile ? "100%" : "50%" }}>
              <Box>
                <Typography
                  sx={{
                    color: "var(--secondary-gray)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                    margin: "2ch",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  We have data no one else has
                </Typography>
                <Typography
                  sx={{
                    color: "var(--secondary-gray)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: "350",
                    lineHeight: "1.5",
                    margin: "2ch",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Access detailed information across multiple blockchain
                  networks. Retrieve metadata and statistics for tokens, NFTs,
                  addresses, and entities.
                </Typography>
                <Typography
                  sx={{
                    color: "var(--secondary-gray)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: "350",
                    lineHeight: "1.5",
                    margin: "2ch",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Leverage Nansen’s unique labeling and categorization of
                  addresses and entities. Gain insights into the activities of
                  significant wallets and entities.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: isMobile ? "100%" : "50%", textAlign: "center" }}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 500,
                }}
              >
                <Box>
                  <img
                    src={wehave}
                    alt=""
                    height="100%"
                    width="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="xl" sx={{ overflowX: "hidden" }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 500,
              duration: 5.2,
            }}
            style={{
              marginTop: "15ch",
              border: "1px solid #00ffa7",
              borderRadius: "5ch",
              overflow: "hidden", // Ensure no overflow issues
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "60px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                The Nansen team have outdone themselves again, providing
                high-quality on-chain raw data that we can easily integrate into
                our production data pipelines. It is already an integral part of
                our infrastructure.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                gap: { xs: "5ch", sm: "15ch" },
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "25%" },
                  paddingBottom: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    backgroundImage: "linear-gradient(90deg, #00ffa7, #30459e)",
                    width: "100%",
                    height: "2px",
                  }}
                ></Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "5ch",
                      borderRight: {
                        sm: "1px solid linear-gradient(#bd8bf3,#30459e)",
                      },
                      // padding: "10px",
                    }}
                    ref={refP}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
                      {countM} M+
                    </Typography>
                    <Typography variant="body1">Labelled addresses</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "25%" },
                  paddingBottom: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    backgroundImage: "linear-gradient(90deg, #00ffa7, #30459e)",
                    width: "100%",
                    height: "2px",
                  }}
                ></Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "5ch",
                      borderRight: {
                        sm: "1px solid linear-gradient(#bd8bf3,#30459e)",
                      },
                      padding: "10px",
                    }}
                    ref={refM}
                  >
                    <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                      {countM} M+
                    </Typography>
                    <Typography variant="body1">Labelled addresses</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "25%" },
                  paddingBottom: { xs: "10px", sm: "0" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    backgroundImage: "linear-gradient(90deg, #00ffa7, #30459e)",
                    width: "100%",
                    height: "2px",
                  }}
                ></Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "5ch",
                      borderRight: {
                        sm: "1px solid linear-gradient(#bd8bf3,#30459e)",
                      },
                      padding: "10px",
                    }}
                    ref={refTb}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
                      {countTb} M+
                    </Typography>
                    <Typography variant="body1">
                      Data Processed Daily
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 500,
        }}
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            py: 8,
            px: 2,
            mt: 2,
          }}
        >
          <Box sx={{ mb: 6 }}></Box>
          <Typography
            variant="h6"
            sx={{ mb: 2, maxWidth: "600px", margin: "auto", fontWeight: "300" }}
          >
            The Nansen team have outdone themselves again, providing
            high-quality on-chain raw data that we can easily integrate into our
            production data pipelines. It is already an integral part of our
            infrastructure.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Avatar alt="Tadeo" src="https://i.pravatar.cc/150?img=3" />
            <Typography variant="body2" color="textSecondary">
              Tadeo
              <br />
              Product Manager from MakerDAO
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Our Team is Here to Help
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Whether you have questions about the API, or want to learn more
            about how Nansen API can benefit you, we're just a few clicks away.
          </Typography>
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
            Request Early Access →
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Api;
