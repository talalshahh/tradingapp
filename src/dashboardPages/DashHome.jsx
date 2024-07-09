import React, { useState } from "react";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import TokenList from "./TokenList";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import TopTrade from "./TopTrade";
import EthInflowGraph from "./LineChart";
import MultipleItems from "../components/NFTsSlider";
import Responsive from "../components/NFTsSlider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NftsSlider from "../components/NFTsSlider";

const DashHome = () => {
  const [active, setActive] = useState("Spotlight");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "75px",
            display: "flex",
            borderBottom: "1px solid white",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              marginLeft: "15px",
              color: active === "Spotlight" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Spotlight" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Spotlight")}
          >
            Spotlight
          </Typography>
          <Typography onClick={handleLogout}>Logout</Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: active === "My Dashboard" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "My Dashboard"
                  ? "4px solid rgb(0, 255, 167)"
                  : "none",
            }}
            onClick={() => setActive("My Dashboard")}
          >
            My Dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2ch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1ch",
              alignItems: "center",
              // padding: "1ch",
            }}
          >
            <Typography>Signals</Typography>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                backgroundColor: "black",
                color: "white",
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
              }}
              size="small"
            >
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  color: "white",
                  "&.Mui-focused": {
                    color: "white",
                  },
                }}
              >
                Age
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiSelect-icon": {
                    color: "white", // Add this line to change the icon color to white
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "black",
                      "& .MuiMenuItem-root": {
                        color: "white",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "1ch" }}>
            <Button
              variant="outlined"
              startIcon={<NotificationsIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  color: "#fff",
                  borderColor: "#fff",
                },
              }}
            >
              Set Alert
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  color: "#fff",
                  borderColor: "#fff",
                },
              }}
              onClick={() => navigate("/signals")}
            >
              View All
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "90%", marginTop: "2ch" }}>
          <NftsSlider />
        </Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "4ch",
            }}
          >
            <Box
              sx={{
                width: "45%",
                background: "#081224",
                color: "white",
                // height: "500px",
              }}
            >
              <TokenList />
            </Box>
            <Box sx={{ width: "45%", marginTop: "2ch" }}>
              <EthInflowGraph />
            </Box>
            <Box sx={{ width: "45%", marginTop: "40px" }}>
              <TopTrade />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DashHome;
