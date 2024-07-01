import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Button, Container, makeStyles } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";
import { styled } from "@mui/system";
import { MarginOutlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import investerImg from "../images/6422edc7d43618dbce76b6da_surface-the-signal.png";
import { Link } from "react-scroll";
import blockchain from "../images/blockchainls2.png";

const CryptoInvester = () => {
  const AnimatedButton = styled(Button)(({ theme }) => ({
    // marginRight: "2px",
    borderRadius: "1ch",
    height: "7ch",
    width: "12rem",
    border: "1px solid",
    borderColor: "#00ffa7",
    color: "black",
    backgroundColor: "#00ffa7",
    justifyContent: "",
    "& .icon": {
      marginLeft: "5px",
    },
    "&:hover": {
      borderRadius: "1ch",
      color: "black",
      border: "1px solid",
      borderColor: "#00ffa7",
      backgroundColor: "white",
      transition: "ease-in",

      "& .icon": {
        transform: "translateX(7px)",
        transition: "transform 0.3s ease-in-out",
      },
    },
  }));
  const useStyles = {
    container: {
      backgroundColor: "#0D0D0D",
      color: "white",
      padding: "2rem",
      textAlign: "center",
    },
    highlights: {
      marginTop: "2rem",
      textAlign: "left",
    },
    imageContainer: {
      marginTop: "2rem",
      textAlign: "center",
    },
    image: {
      width: "100%",
      maxWidth: "600px",
    },
  };

  const Heading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
  }));

  const Item = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 0),
    borderBottom: "2px solid #bd8bf3", // Line color
    "&:last-child": {
      borderBottom: "none",
    },
  }));

  const Text = styled(Typography)({
    color: "#ffffff",
  });

  const ArrowButton = styled(Button)({
    color: "#ffffff",
    minWidth: "auto",
  });
  const solutions = [
    "Crypto Investors",
    "Venture Capital",
    "Blockchain and L2s",
    "Exchanges & Marketplaces",
    "Crypto & DeFi Protocols",
    "Infrastructure & Service Providers",
  ];
  const solLink = [
    { name: "Crypto Investors", path: "crypto-investors" },
    { name: "Venture Capital", path: "venture-capital" },
    { name: "Blockchain and L2s", path: "blockchain-l2s" },
    { name: "Exchanges & Marketplaces", path: "exchanges-marketplaces" },
    { name: "Crypto & DeFi Protocols", path: "crypto-deFiprotocols" },
    {
      name: "Infrastructure & Service Providers",
      path: "infrastructure-service-providers",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          minHeight: "10vh",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "17px", lg: "1ch" },
          gap: { xs: "2ch", lg: "5px" }, // Adjust gap for different screen sizes
        }}
      >
        {solLink.map((item, idx) => (
          <Link
            to={item.path}
            smooth={true}
            duration={900}
            style={{ textDecoration: "none" }}
            key={idx}
          >
            <Button
              color="inherit"
              sx={{
                fontSize: {
                  xs: "10px",
                  lg: "15px",
                  // backgroundColor: { xs: "#00ffa7" },
                  // color: { xs: "black" },
                  "&:hover": {
                    backgroundColor: "#00ffa7",
                    color: "black",
                  },
                },
              }}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </Box>

      <Box sx={{ color: "white" }}>
        <Box
          sx={{
            color: "white",
            marginTop: { xs: "9ch", lg: "20ch" },
            minHeight: "50vh",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: "50px", lg: "20px" },
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", lg: "4.125rem" },
                    lineHeight: { xs: "40px", lg: "76px" },
                  }}
                >
                  Built for <br />
                  Top Crypto Teams
                </Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  Do everything with . Top funds and crypto teams rely on for
                  investment, business intelligence, user and product analytics,
                  and ecosystem growth. Increase investment returns, gain market
                  intelligence, improve your product, and grow your user base
                  with the most powerful blockchain data platform.
                </Typography>
                <AnimatedButton sx={{ marginTop: "2ch" }}>
                  Contact Sales
                  <FaLongArrowAltRight className="icon" />
                </AnimatedButton>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Heading variant="h6">Solutions for</Heading>
                {solutions.map((solution, index) => (
                  <Item key={index}>
                    <Text variant="body1">{solution}</Text>
                    <ArrowButton>
                      <ArrowForwardIcon />
                    </ArrowButton>
                  </Item>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Crypto investors */}
        <Box
          id="crypto-investors"
          sx={{
            //   height: "80vh",
            marginTop: "10ch",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Box>
                <motion.div
                  initial={{ opacity: 0, x: -100, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 500,
                    duration: 5.2, // duration in seconds
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "400" }}>
                    CRYPTO INVESTORS
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: "550 " }}>
                    Surface the Signal. <br /> Manage Performance and Risk
                  </Typography>
                </motion.div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3ch",
                    marginBottom: "5ch",
                  }}
                >
                  <Box
                    sx={{
                      padding: "2ch",
                      width: { xs: "100%", md: "50%" },
                      borderRadius: "8px",
                    }}
                  >
                    <motion.div
                      //   ref={ref}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring", // Corrected the type to "spring"
                        // ease: "easeInOut",
                        stiffness: 200, // Reduced stiffness for smoother animation
                        damping: 200, // Adjusted damping for better balance
                        duration: 3.0, // Optional: duration in seconds
                      }}
                      style={{}}
                    >
                      <Typography variant="body1" paragraph>
                        Understand the market, make sense of price changes, form
                        your investment strategy, find the opportunities, take
                        action, and analyze your performance. Use ’s 250M+
                        labeled addresses and proprietary data to support your
                        work, from market making and momentum investing, to
                        airdrop hunting, yield farming and others.
                      </Typography>
                    </motion.div>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#2c2c2e",
                      padding: "2ch",
                      width: { xs: "100%", md: "50%" },
                      borderRadius: "8px",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring", // Corrected the type to "spring"
                        // ease: "easeInOut",
                        stiffness: 200, // Reduced stiffness for smoother animation
                        damping: 200, // Adjusted damping for better balance
                        duration: 3.0, // Optional: duration in seconds
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        Level up with :
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Find tokens and NFTs to buy with our full suite of tools: search, trending dashboard, indices, item and rarity profiler, and many others. See how a trade relates to other transactions, addresses, and tokens in ways that you can’t see elsewhere" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Use ’s smart money signals to analyze how the top investors are making money and what they are holding to form your trading strategy" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Set up on-chain alerts to monitor liquidation risk in lending protocols and spot catastrophic risk. Manage your holdings across 40+ chains via  Portfolio" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Discover curated insights from ’s research reports" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Programmatically access on-chain data via  Query to form or backtest your investment strategy" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#00bcd4" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <a href="" style={{ color: "#00bcd4" }}>
                                Join our exclusive Alpha community help you stay
                                further ahead
                              </a>
                            }
                          />
                        </ListItem>
                      </List>
                    </motion.div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* New section  */}
        <Box
          id="venture-capital"
          sx={{
            color: "white",
            marginTop: "20ch",
            minHeight: "50vh",
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                VENTURE CAPITAL
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                See the Deal. Assess the Deal. Win the Deal.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                marginTop: "26px",
                marginBottom: "26px",
                //   justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography variant="body2">
                  Deal sourcing, analyzing a market landscape, conducting due
                  diligence, researching comps, and writing investment memos.
                  What are the trending projects? What can we find out about
                  liquidity, TVL, gas fees, number of active wallets and token
                  distribution?
                  <br />
                  The best VCs use for data and insights to move more quickly
                  and confidently on potential investments.
                </Typography>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring", // Corrected the type to "spring"
                    // ease: "easeInOut",
                    stiffness: 200, // Reduced stiffness for smoother animation
                    damping: 200, // Adjusted damping for better balance
                    duration: 3.0, // Optional: duration in seconds
                  }}
                  style={{
                    backgroundColor: "#2c2c2e",
                    padding: "2ch",
                    borderRadius: "8px",
                    marginTop: "20px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Level up with :
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Find tokens and NFTs to buy with our full suite of tools: search, trending dashboard, indices, item and rarity profiler, and many others. See how a trade relates to other transactions, addresses, and tokens in ways that you can’t see elsewhere" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Use ’s smart money signals to analyze how the top investors are making money and what they are holding to form your trading strategy" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Set up on-chain alerts to monitor liquidation risk in lending protocols and spot catastrophic risk. Manage your holdings across 40+ chains via  Portfolio" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Discover curated insights from ’s research reports" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Programmatically access on-chain data via  Query to form or backtest your investment strategy" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <a href="#" style={{ color: "#00bcd4" }}>
                            Join our exclusive Alpha community help you stay
                            further ahead
                          </a>
                        }
                      />
                    </ListItem>
                  </List>
                </motion.div>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring", // Corrected the type to "spring"
                    ease: "easeInOut",
                    stiffness: 200, // Reduced stiffness for smoother animation
                    damping: 200, // Adjusted damping for better balance
                    duration: 3.0, // Optional: duration in seconds
                  }}
                  style={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignItems: { xs: "center", md: "end" },
                  }}
                >
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={investerImg}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* BlockChain and ls2  */}

        <Box
          id="blockchain-l2s"
          sx={{
            color: "white",
            marginTop: "20ch",
            minHeight: "50vh",
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                LAYER 1 AND LAYER 2 BLOCKCHAINS
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                Expand Ecosystem and Reach
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                marginTop: "26px",
                marginBottom: "26px",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography variant="body2">
                  Increase the number of active users and liquidity on your
                  ecosystem. Provide your community with crypto analytics that
                  allows them to make better decisions. Help your core team
                  deeply understand overall ecosystem trends and user patterns.
                  The top chains use Nansen to grow and decide on matters from
                  growth strategy to tokenomics.
                  <br />
                  The best VCs use for data and insights to move more quickly
                  and confidently on potential investments.
                </Typography>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 200,
                    duration: 3.0,
                  }}
                  sx={{
                    backgroundColor: "#2c2c2e",
                    padding: "2ch",
                    borderRadius: "8px",
                    marginTop: "20px",
                    minHeight: "500px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Level up with:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Find tokens and NFTs to buy with our full suite of tools: search, trending dashboard, indices, item and rarity profiler, and many others. See how a trade relates to other transactions, addresses, and tokens in ways that you can’t see elsewhere." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Use ’s smart money signals to analyze how the top investors are making money and what they are holding to form your trading strategy." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Set up on-chain alerts to monitor liquidation risk in lending protocols and spot catastrophic risk. Manage your holdings across 40+ chains via Portfolio." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Discover curated insights from ’s research reports." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Programmatically access on-chain data via Query to form or backtest your investment strategy." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <a href="#" style={{ color: "#00bcd4" }}>
                            Join our exclusive Alpha community to help you stay
                            further ahead.
                          </a>
                        }
                      />
                    </ListItem>
                  </List>
                </motion.div>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    ease: "easeInOut",
                    stiffness: 200,
                    damping: 200,
                    duration: 3.0,
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignItems: { xs: "center", md: "end" },
                  }}
                >
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={blockchain}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* crypto Exchanges  */}
        <Box
          id="exchanges-marketplaces"
          sx={{
            color: "white",
            marginTop: "20ch",
            minHeight: "50vh",
          }}
        >
          <Container maxWidth="lg">
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                CRYPTO EXCHANGES & MARKETPLACES
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
                Build Confidence in Your Platform
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                marginTop: "26px",
                marginBottom: "26px",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography variant="body2">
                  The top crypto exchanges and marketplaces use Nansen to scale
                  and make the right decisions. Vet potential listings for
                  scams, prove your reserves, and weed out fraudulent
                  activities. Understand who your users are and what they’re
                  doing to improve your product experience. Never stress out
                  over data integrity anymore.
                  <br />
                  The best VCs use for data and insights to move more quickly
                  and confidently on potential investments.
                </Typography>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 200,
                    duration: 3.0,
                  }}
                  style={{
                    backgroundColor: "#2c2c2e",
                    padding: "2ch",
                    borderRadius: "8px",
                    marginTop: "20px",
                    minHeight: "500px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Highlights:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Use Nansen Query to build custom workflow, dashboards, and answer difficult questions. Join your internal data with our proprietary data to easily track key business metrics, segment your users, monitor your benchmarks vs competitors, develop company strategy, and make decisions" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Build user confidence in your platform. Detect wash trading and connections to Tornado Cash, analyze historical activity to block fraudulent actors, establish proof of reserves, and run due diligence on token ownership before listing tokens" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Improve your product experience. Use Nansen data to build models for personalization, identify and prioritize VIP users, and create your own custom labels" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Make time sensitive treasury decisions when major events happen" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText primary="Programmatically access on-chain data via Query to form or backtest your investment strategy." />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#00bcd4" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <a href="#" style={{ color: "#00bcd4" }}>
                            Join our exclusive Alpha community to help you stay
                            further ahead.
                          </a>
                        }
                      />
                    </ListItem>
                  </List>
                </motion.div>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    ease: "easeInOut",
                    stiffness: 200,
                    damping: 200,
                    duration: 3.0,
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignItems: { xs: "center", md: "end" },
                  }}
                >
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={blockchain}
                    alt=""
                  />
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Infrastructor and service provider  */}
        <Box
          sx={{
            color: "white",
            marginTop: "20ch",
            minHeight: "50vh",
            backgroundColor: "",
          }}
        >
          <Container>
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              animate={{
                duration: 3.2,
              }}
              style={{
                border: "1px solid grey",
                borderRadius: "5ch",
                padding: "5ch",
              }}
              id="infrastructure-service-providers"
            >
              <Typography variant="h4" component="h1" gutterBottom>
                Never Stress Out Over Data Integrity
              </Typography>
              <Box display="flex" justifyContent="center" gap="1rem">
                <img src="https://chainlink.com" alt="Chainlink" width="50" />
                <img src="https://consensys.net" alt="Consensys" width="50" />
                <img src="https://google.com" alt="Google" width="50" />
              </Box>
              <Typography variant="body1" paragraph>
                Build your products and services on the most reliable,
                comprehensive, and accurate on-chain data. From building
                reliable oracle services to deciding what to build for your
                users, or even looking into specific wallets or entities'
                historical transactions as a liquidator — Nansen gives you an
                unfair advantage as you build crypto infrastructure and
                services.
              </Typography>
              <Box style={useStyles.highlights}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Identify and track potential partners and customers for your business" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Support new monetization models, such as tracking on-chain transactions to get paid on a per transaction basis" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Analyze and track data around dApps, NFT, stablecoins, or specific projects to make product and company decisions" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Use Nansen data to segment your users, and identify and prioritize VIP users" />
                  </ListItem>
                </List>
              </Box>
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                  stiffness: 200,
                  damping: 15,
                  duration: 0.5,
                }}
                style={useStyles.imageContainer}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00ff9f",
                    color: "#0a0f24",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5ch",
                    "&:hover": {
                      backgroundColor: "#00e68e",
                    },
                  }}
                >
                  Data Integrity →
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Unlock the next level */}
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
    </>
  );
};

export default CryptoInvester;
