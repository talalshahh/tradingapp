import { Box, Button, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import cardImage1 from "../images/656465133dcc1c28a9662b25_Screenshot 2023-11-27 at 4.33.20 PM (1).webp";
import Cards from "../components/Cards";

const Nansen2 = () => {
  return (
    <>
      <Box sx={{ background: "black", color: "white" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "1ch", md: "0  " },
              paddingTop: { xs: "5ch", md: "15ch" },
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "70%" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  width: "100%",
                  fontSize: { xs: "1.7rem", md: "5rem", marginBottom: "1ch" },
                }}
              >
                Onchain Analytics Platform Designed For Investors
              </Typography>
              <Typography variant="body1" sx={{ fontweight: "bolder" }}>
                Effortlessly Analyze and Track Key Movements and Metrics to
                Navigate the Market More Effectively
              </Typography>
            </Box>
            <Box>
              <Button
                variant=""
                sx={{
                  width: "150px",
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
                Lanuch APP
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ marginTop: "10rem" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              gap: "5ch",
            }}
          >
            {/* // rectangular card */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "0.8px solid grey",
                padding: { xs: "1ch", md: "9ch" },
                padding: "2ch",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "1.5rem", md: "4rem" },
                  }}
                >
                  Navigate Fast
                </Typography>
                <Typography variant="body2">
                  Search, explore, and find what you need all in one place. Type
                  the name of your desired token, wallet or entity. Effortlessly
                  navigate through dashboards and apply filters to show only the
                  data you want to see.
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <motion.div
                  className="box"
                  animate={{
                    x: [0, 20, 0, 20, 0],
                    // y: [4, 5, 10, 0, 4],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    // times: [],
                    repeat: Infinity,
                    repeatDelay: null,
                  }}
                >
                  <img
                    src={cardImage1}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "0.8px solid grey",
                padding: { xs: "1ch", md: "9ch" },
                padding: "2ch",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "1.5rem", md: "4rem" },
                  }}
                >
                  Navigate Fast
                </Typography>
                <Typography variant="body2">
                  Search, explore, and find what you need all in one place. Type
                  the name of your desired token, wallet or entity. Effortlessly
                  navigate through dashboards and apply filters to show only the
                  data you want to see.
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <motion.div
                  className="box"
                  animate={{
                    x: [0, 20, 0, 20, 0],
                    y: [4, 5, 10, 0, 4],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    // times: [],
                    repeat: Infinity,
                    repeatDelay: null,
                  }}
                >
                  <img
                    src={cardImage1}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "0.8px solid grey",
                padding: { xs: "1ch", md: "9ch" },
                padding: "2ch",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: { xs: "1.5rem", md: "4rem" },
                  }}
                >
                  Navigate Fast
                </Typography>
                <Typography variant="body2">
                  Search, explore, and find what you need all in one place. Type
                  the name of your desired token, wallet or entity. Effortlessly
                  navigate through dashboards and apply filters to show only the
                  data you want to see.
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <motion.div
                  className="box"
                  animate={{
                    y: [0, 20, 0, 20, 0],
                    // y: [4, 5, 10, 0, 4],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    // times: [],
                    repeat: Infinity,
                    repeatDelay: null,
                  }}
                >
                  <img
                    src={cardImage1}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Cards />
    </>
  );
};

export default Nansen2;
