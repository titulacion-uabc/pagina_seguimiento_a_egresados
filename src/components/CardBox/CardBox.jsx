import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function CardBox({ image, title, content }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          // Ajusta la altura del Card según si hay título o contenido
          height: title || content ? "auto" : "200px", // Ajusta la altura aquí
        }}
      >
        <CardActionArea onClick={handleClickOpen} sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              objectFit: "cover",
              height: title || content ? 200 : "100%",
              width: "100%",
            }}
          />
          {(title || content) && (
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              {title && (
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#00673D", textAlign: "center" }}
                >
                  {title}
                </Typography>
              )}
              {content && (
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              )}
            </CardContent>
          )}
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={image} alt={title} style={{ width: "100%" }} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CardBox;
