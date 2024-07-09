import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { schema } from "../helpers/schema";
import { initialValues } from "../helpers/initialValues";
import { useFormik } from "formik";
import { useAuth } from "../context/auth.context";

const Login = () => {
  const navigate = useNavigate();
  const { signInwithEmail } = useAuth();
  const formik = useFormik({
    initialValues: initialValues[1],
    validationSchema: schema[1],
    onSubmit: (values) => {
      handleSubmit(values);
      signInwithEmail(values.email, values.password);
      if (signInwithEmail) {
        navigate("/dashhome");
      }
    },
  });
  const handleSubmit = (values) => {
    console.log(values, "values");

    //first api call then empty values
    formik.setFieldValue("email", "");
    formik.setTouched("email", false);
    formik.setFieldValue("password", "");
    formik.setTouched("password", false);
  };
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
            Sign in to Nansen
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Enter your email and password to continue
          </Typography>

          <form onSubmit={formik.handleSubmit}>
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
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                style={{
                  width: "60%",
                  backgroundColor: "black",
                  color: "rgb(242, 244, 245)",
                  padding: "8.5px 14px",
                  borderColor: "green",
                  borderRadius: "7px",
                }}
              />
              {formik.touched.email && formik.errors.email && (
                <p
                  style={{
                    padding: "0",
                    margin: "5px",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  {formik.errors.email}
                </p>
              )}
              <input
                type="password"
                name="password"
                placeholder="Enter email password"
                value={formik.values.password}
                onChange={formik.handleChange}
                style={{
                  width: "60%",
                  backgroundColor: "black",
                  color: "rgb(242, 244, 245)",
                  padding: "8.5px 14px",
                  borderColor: "green",
                  borderRadius: "7px",
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <p
                  style={{
                    padding: "0",
                    margin: "5px",
                    color: "red",
                    fontSize: "13px",
                  }}
                >
                  {formik.errors.password}
                </p>
              )}
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
                type="submit"
              >
                Continue
              </Button>
            </Box>
          </form>
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
            <Typography>Dont Have an Account ? </Typography>
            <a
              onClick={() => navigate("/signup")}
              style={{
                textDecoration: "none",
                color: "rgb(0, 255, 167)",
                marginTop: "2px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign Up
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
