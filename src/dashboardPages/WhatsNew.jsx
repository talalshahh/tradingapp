import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WhatsNew = () => {
  const [active, setActive] = useState("Shipped");
  const navigate = useNavigate();

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
              color: active === "Shipped" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Shipped" ? "4px solid rgb(0, 255, 167)" : "none",
            }}
            onClick={() => setActive("Shipped")}
          >
            Shipped
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color:
                active === "Shipping Soon" ? "rgb(0, 255, 167)" : "inherit",
              borderBottom:
                active === "Shipping Soon"
                  ? "4px solid rgb(0, 255, 167)"
                  : "none",
            }}
            onClick={() => setActive("Shipping Soon")}
          >
            Shipping Soon
          </Typography>
        </Box>
        <Box sx={{ marginTop: "3ch" }}>
          <Container>
            <Typography sx={{ fontWeight: "bold" }}>Recent Release</Typography>
            <Box
              sx={{
                backgroundColor: "rgb(22, 34, 45)",
                padding: "28px",
                marginTop: "3ch",
                borderRadius: "10px",
              }}
            >
              <Typography>
                {" "}
                Signals are now Multichain and TGM Facelift We’ve made some huge
                improvements to some of your favourite features! Signals are now
                Multichain (but that’s not all…) We are excited to announce that
                Signals is now multichain, supporting all networks in Nansen!
                Many of you have requested this feature, and we’re proud to have
                delivered it. But we didn’t stop there. <br />
                To enhance your Nansen experience, you can now toggle the “For
                You” feature with Signals, providing you with personalized
                insights based on your in-app activity across all supported
                chains. If you prefer, you can also switch this feature off.
                Token God Mode Facelift We have made some enhancements to Token
                God Mode by adding an AI-generated token description, providing
                users with more information on the token they are using.
                Additionally, we have added other key metrics that users have
                requested, such as: Marketcap FDV (Fully Diluted Valuation) 24HR
                DEX volume Top holders & changes Largest on-chain liquidity
                Largest exchange holding One more dashboard migrated to Nansen
                2: Top Deposits & Withdrawals We have successfully migrated the
                Top Depositors and Withdrawers widget from Nansen 1 to Nansen 2.
                Based on your feedback, this widget has been valuable, and we
                wanted to ensure its availability before closing down Nansen 1
                next week. <br /> This widget makes it easier to track top
                withdrawals and deposits, enhancing the ease of seeing movements
                that could impact price.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Box
              sx={{
                backgroundColor: "rgb(22, 34, 45)",
                padding: "28px",
                marginTop: "3ch",
                borderRadius: "10px",
              }}
            >
              <Typography>
                {" "}
                Signals are now Multichain and TGM Facelift We’ve made some huge
                improvements to some of your favourite features! Signals are now
                Multichain (but that’s not all…) We are excited to announce that
                Signals is now multichain, supporting all networks in Nansen!
                Many of you have requested this feature, and we’re proud to have
                delivered it. But we didn’t stop there. <br />
                To enhance your Nansen experience, you can now toggle the “For
                You” feature with Signals, providing you with personalized
                insights based on your in-app activity across all supported
                chains. If you prefer, you can also switch this feature off.
                Token God Mode Facelift We have made some enhancements to Token
                God Mode by adding an AI-generated token description, providing
                users with more information on the token they are using.
                Additionally, we have added other key metrics that users have
                requested, such as: Marketcap FDV (Fully Diluted Valuation) 24HR
                DEX volume Top holders & changes Largest on-chain liquidity
                Largest exchange holding One more dashboard migrated to Nansen
                2: Top Deposits & Withdrawals We have successfully migrated the
                Top Depositors and Withdrawers widget from Nansen 1 to Nansen 2.
                Based on your feedback, this widget has been valuable, and we
                wanted to ensure its availability before closing down Nansen 1
                next week. <br /> This widget makes it easier to track top
                withdrawals and deposits, enhancing the ease of seeing movements
                that could impact price.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default WhatsNew;
