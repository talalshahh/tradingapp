import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Cards = () => {
  return (
    <Box sx={{ marginTop: "10ch", color: "white" }}>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bolder", textAlign: "center" }}
        >
          Loved by the Smartest Investors <br /> and Teams in Crypto
        </Typography>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5ch",
              gap: "2ch",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", lg: "400px" },
                backgroundColor: "#121c26",
                border: "0.3px solid grey",
                padding: { xs: "1rem", md: "3rem" },
                borderRadius: "2ch",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                We started using Nansen over 2 years ago and we could not
                imagine investing in crypto without it. It helped us turn $800
                into over a million during the last bull market. If data is the
                new oil, then Nansen is the new combustion engine. If you’re a
                serious investor who cares about due diligence, and values
                god-tier industry research, this product is a no-brainer. Try it
                out today, your portfolio won’t regret it!
              </Typography>
              <Box sx={{ marginTop: "2ch" }}>
                <Typography>Brainyield</Typography>
                <Link sx={{ marginTop: "1ch" }} href="/">
                  Brainyield
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "90%", lg: "400px" },
                backgroundColor: "#121c26",
                border: "0.3px solid grey",
                padding: { xs: "1rem", md: "3rem" },
                borderRadius: "2ch",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                We started using Nansen over 2 years ago and we could not
                imagine investing in crypto without it. It helped us turn $800
                into over a million during the last bull market. If data is the
                new oil, then Nansen is the new combustion engine. If you’re a
                serious investor who cares about due diligence, and values
                god-tier industry research, this product is a no-brainer. Try it
                out today, your portfolio won’t regret it!
              </Typography>
              <Box sx={{ marginTop: "2ch" }}>
                <Typography>Brainyield</Typography>
                <Link sx={{ marginTop: "1ch" }} href="/">
                  Brainyield
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "90%", lg: "400px" },
                backgroundColor: "#121c26",
                border: "0.3px solid grey",
                padding: { xs: "1rem", md: "3rem" },
                borderRadius: "2ch",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                We started using Nansen over 2 years ago and we could not
                imagine investing in crypto without it. It helped us turn $800
                into over a million during the last bull market. If data is the
                new oil, then Nansen is the new combustion engine. If you’re a
                serious investor who cares about due diligence, and values
                god-tier industry research, this product is a no-brainer. Try it
                out today, your portfolio won’t regret it!
              </Typography>
              <Box sx={{ marginTop: "2ch" }}>
                <Typography>Brainyield</Typography>
                <Link sx={{ marginTop: "1ch" }} href="/">
                  Brainyield
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Cards;
