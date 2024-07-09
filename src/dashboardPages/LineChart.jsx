import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Typography } from "@mui/material";

const dummyData = [
  { t: 1622505600, v: 100 },
  { t: 1622592000, v: 150 },
  { t: 1622678400, v: 200 },
  { t: 1622764800, v: 250 },
  { t: 1622851200, v: 300 },
  { t: 1622937600, v: 350 },
  { t: 1623024000, v: 400 },
];

const EthInflowGraph = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ color: "#ffffff" }}>
        Ethereum Inflow
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dummyData}>
          <CartesianGrid stroke="#666666" />
          <XAxis
            dataKey="t"
            tickFormatter={(timestamp) =>
              new Date(timestamp * 1000).toLocaleDateString()
            }
            stroke="#ffffff"
          />
          <YAxis stroke="#ffffff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333333",
              borderColor: "#333333",
              color: "#ffffff",
            }}
          />
          <Legend wrapperStyle={{ color: "#ffffff" }} />
          <Line
            type="monotone"
            dataKey="v"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default EthInflowGraph;
