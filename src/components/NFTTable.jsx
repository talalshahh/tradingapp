import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

const NFTTable = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get("https://api.example-nft.com/nfts");
        setNfts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Token ID</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nfts.map((nft) => (
            <TableRow key={nft.id}>
              <TableCell component="th" scope="row">
                {nft.name}
              </TableCell>
              <TableCell align="right">{nft.token_id}</TableCell>
              <TableCell align="right">
                <img src={nft.image_url} alt={nft.name} width="50" />
              </TableCell>
              <TableCell align="right">{nft.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NFTTable;
