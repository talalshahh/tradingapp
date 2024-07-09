import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "16px", // You can adjust the spacing value
    "@media (max-width:600px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    margin: "8px", // You can adjust the spacing value
    minWidth: "120px", // Adjust as needed
    "@media (max-width:600px)": {
      width: "80%",
      margin: "4px", // You can adjust the spacing value
    },
  },
  icon: {
    marginRight: "8px", // You can adjust the spacing value
  },
});

const items = [
  // Add all your items here as objects with a name and an icon
  { name: "1inch", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  { name: "Aave V2", icon: "path_to_icon" },
  // Add the rest of the items similarly
];
const Protocols = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(0, 19, 33)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // height: "50px",
            border: "1px solid white",
            // justifyContent: "center",
            alignItems: "center",
            padding: "2ch",
          }}
        >
          <Typography>Supported Protocols</Typography>
        </Box>

        <Box>
          {" "}
          <Container>
            <Box
              sx={{
                display: "flex",
                // height: "50px",
                justifyContent: "center",
                flexDirection: "column",
                // alignItems: "center",
                padding: "2ch",
                marginTop: "3ch",
                width: "100%",
                backgroundColor: "rgb(0,0,0,0.3)",
              }}
            >
              <Typography>Ethereum </Typography>
              <Box className={classes.container}>
                {items.map((item) => (
                  <Box key={item.name} className={classes.item}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={classes.icon}
                    />
                    <Typography variant="body1">{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
        <Box>
          {" "}
          <Container>
            <Box
              sx={{
                display: "flex",
                // height: "50px",
                justifyContent: "center",
                flexDirection: "column",
                // alignItems: "center",
                padding: "2ch",
                marginTop: "3ch",
                width: "100%",
                backgroundColor: "rgb(0,0,0,0.3)",
              }}
            >
              <Typography>Ethereum </Typography>
              <Box className={classes.container}>
                {items.map((item) => (
                  <Box key={item.name} className={classes.item}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={classes.icon}
                    />
                    <Typography variant="body1">{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
        <Box>
          {" "}
          <Container>
            <Box
              sx={{
                display: "flex",
                // height: "50px",
                justifyContent: "center",
                flexDirection: "column",
                // alignItems: "center",
                padding: "2ch",
                marginTop: "3ch",
                width: "100%",
                backgroundColor: "rgb(0,0,0,0.3)",
              }}
            >
              <Typography>Ethereum </Typography>
              <Box className={classes.container}>
                {items.map((item) => (
                  <Box key={item.name} className={classes.item}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={classes.icon}
                    />
                    <Typography variant="body1">{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Protocols;
