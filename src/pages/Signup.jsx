import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: " rgb(12, 18, 25)",
        }}
      >
        <Box sx={{ padding: "8ch", width: "500px" }}>
          <Box sx={{ textAlign: "center", marginBottom: "3ch" }}>
            LOGO
            <img src="" alt="" />
          </Box>
          <Typography
            sx={{ fontWeight: "20px", fontWeight: "bold", textAlign: "center" }}
          >
            Signup to Nansen
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Enter your email and password to continue
          </Typography>
          <Box
            sx={{
              marginTop: "1ch",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "19px",
            }}
          >
            <input
              type="text"
              placeholder="Enter email address"
              style={{
                width: "60%",
                backgroundColor: "black",
                color: "rgb(242, 244, 245)",
                padding: "8.5px 14px",
                borderColor: "green",
                borderRadius: "7px",
              }}
            />
            <input
              type="password"
              placeholder="Enter email password"
              style={{
                width: "60%",
                backgroundColor: "black",
                color: "rgb(242, 244, 245)",
                padding: "8.5px 14px",
                borderColor: "green",
                borderRadius: "7px",
              }}
            />
            <Button
              sx={{
                width: "60%",
                marginLeft: 2,
                borderRadius: "1ch",
                height: "5ch",
                color: "black",
                border: "1px solid",
                borderColor: "#00ffa7",
                backgroundColor: "#00ffa7",
                "&:hover": {
                  backgroundColor: "#00ffa7",
                },
              }}
              color="inherit"
              //   onClick={() => navigate("/launch-app")}
            >
              SignUp
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "rgb(0, 255, 167)",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Forget Password
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
              marginTop: "9px",
              gap: "2px",
            }}
          >
            <Typography>Already Have an Account ? </Typography>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "rgb(0, 255, 167)",
                marginTop: "2px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/login")}
            >
              LogIn
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
