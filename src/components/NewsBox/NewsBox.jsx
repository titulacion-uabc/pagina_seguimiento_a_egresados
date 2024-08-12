import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const NewsBox = ({ title, notice, date }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
      }}
    >
      <Box sx={{ backgroundColor: "#D3912A", padding: 2 }}>
        <Typography variant="h7" color="white">
          {title}
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "white", padding: 2, flexGrow: 1 }}>
        <Typography variant="body1" color="black">
          {notice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CalendarTodayIcon sx={{ color: "gray", marginRight: 1 }} />
        <Typography variant="body2" color="gray">
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsBox;
