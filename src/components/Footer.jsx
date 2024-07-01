import React from "react";
import { Box, Grid, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Logo
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Logo DevPortal
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Trade Square
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Trade Governance Forum
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Developer
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Docs
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Getting Started
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Developer Tools
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Light Paper
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              API Service Status
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Ecosystem
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Explore
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Submit Project
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Governance
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Grant
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              KCF
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              KFF
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              PoC (Upcoming)
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Governance Council
            </Link>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"©  Foundation 2023. All rights reserved."}
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Link href="#" color="inherit" underline="hover">
              Brand
            </Link>
            &nbsp;|&nbsp;
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
            &nbsp;|&nbsp;
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
            &nbsp;|&nbsp;
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
