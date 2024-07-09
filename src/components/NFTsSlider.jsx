import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const data = [
  {
    title: "Top balances Change",
    time: 30,
    text: "Lorem ipsum dolor sit dolores perferendis possimus qui? Ipsa rerum, itaque modi quae ab esse odit.",
  },
  {
    title: "Top balances Change",
    time: 30,
    text: "Lorem ipsum dolor sit dolores perferendis possimus qui? Ipsa rerum, itaque modi quae ab esse odit.",
  },
  {
    title: "Top balances Change",
    time: 30,
    text: "Lorem ipsum dolor sit dolores perferendis possimus qui? Ipsa rerum, itaque modi quae ab esse odit.",
  },
  {
    title: "Top balances Change",
    time: 30,
    text: "Lorem ipsum dolor sit dolores perferendis possimus qui? Ipsa rerum, itaque modi quae ab esse odit.",
  },
  {
    title: "Top balances Change",
    time: 30,
    text: "Lorem ipsum dolor sit dolores perferendis possimus qui? Ipsa rerum, itaque modi quae ab esse odit.",
  },
];

function NftsSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <Box
            sx={{
              backgroundColor: "rgb(18, 28, 38)",
              padding: "8px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "5ch",
              borderRadius: "1ch",
              height: "200px",
              // padding: "10px;
            }}
          >
            <Box sx={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <Typography sx={{ fontSize: "15px" }}>{item.title}</Typography>
              <span style={{ fontSize: "9px" }}>{item.time}min ago</span>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              <Typography sx={{ fontSize: "17px" }}>{item.text}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default NftsSlider;
