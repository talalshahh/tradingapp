import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const NFtsCards = () => {
  const apiKey = "e11579cd3d5c43659b7efb63ef7047c6";
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.opensea.io/api/v2/collections?chain=ethereum",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        };

        const response = await axios.request(options);
        const filteredData = response.data.collections
          .filter((collectionItem) => collectionItem.image_url)
          .map((collectionItem) => ({
            name: collectionItem.name,
            imageUrl: collectionItem.image_url,
            owner: collectionItem.owner || "Unknown",
          }));
        setRows(filteredData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {rows.map((row, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            bgcolor: "#1e1e1e",
            color: "white",
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={row.imageUrl || "https://via.placeholder.com/345x200"}
            alt="NFT Image"
          />
          <CardContent>
            <Typography variant="h6" component="div" noWrap>
              {row.name}
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Typography variant="body2" color="white">
                Owner: {row.owner}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NFtsCards;
