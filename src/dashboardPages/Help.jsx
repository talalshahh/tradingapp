import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Help = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
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
          }}
        >
          Help center
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            MinHeight: "230px",
            backgroundColor: "rgb(18, 28, 38)",
            width: "30%",
            padding: "5ch",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bolder" }}>
            Support & Feedback
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "15px", marginTop: "1ch" }}
            >
              Your feedback is extremely important to us. If you encounter
              issues or have suggestions to improve Nansen, please don't
              hesitate to reach out.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ width: "100%", border: "1px solid white", marginTop: "12px" }}
          >
            Join The Discord
          </Button>
          <Button
            sx={{
              backgroundColor: "rgb(0, 255, 167)",
              marginTop: "12px",
              width: "100%",
              color: "black",
            }}
          >
            Email Support
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "300px",
            backgroundColor: "rgb(18, 28, 38)",
            width: "30%",
            padding: "5ch",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bolder" }}>
            Explore Resources
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "15px", marginTop: "1ch" }}
            >
              Have a look at the following resources, if you want to find out
              more about how to use Nansen:
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ width: "100%", border: "1px solid white", marginTop: "12px" }}
          >
            Help center
          </Button>
          <Button
            sx={{
              backgroundColor: "rgb(0, 255, 167)",
              marginTop: "12px",
              width: "100%",
              color: "black",
            }}
          >
            Whats New
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
