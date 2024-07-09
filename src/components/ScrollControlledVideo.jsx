import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import bgvideo from "../assets/video/bgVideo.mp4";

const useStyles = makeStyles({
  root: {
    height: "200vh", // Make the page scrollable
  },
  video: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  content: {
    marginTop: "100vh",
    textAlign: "center",
  },
});

const ScrollControlledVideo = () => {
  const classes = useStyles();

  useEffect(() => {
    const video = document.getElementById("background-video");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const videoDuration = video.duration;
      if (!isNaN(videoDuration)) {
        video.currentTime = scrollPercentage * videoDuration;
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 5);

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    video.play().catch((error) => {
      console.log("Video play failed:", error);
    });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <Container className={classes.root}>
      <video className={classes.video} id="background-video" muted>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

// Debounce function to limit the rate of handleScroll execution
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default ScrollControlledVideo;
