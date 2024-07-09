import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const data = [
  { symbol: "wstETH", change: "$24,932,871" },
  { symbol: "USDT", change: "$11,834,575" },
  { symbol: "Sifu", change: "$6,675,689" },
  { symbol: "stETH", change: "$5,357,947" },
  { symbol: "LDO", change: "$1,256,611" },
];

const SmartMoneyBuy = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#1e2a38",
        borderRadius: 2,
        p: 2,
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Smart Money Buy
      </Typography>
      <List>
        {data.map((item, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText primary={item.symbol} />
            <Typography variant="body1">{item.change}</Typography>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#00a8ff",
          "&:hover": {
            bgcolor: "#008ac4",
          },
        }}
        fullWidth
      >
        View full Smart Money
      </Button>
    </Box>
  );
};

export default SmartMoneyBuy;
