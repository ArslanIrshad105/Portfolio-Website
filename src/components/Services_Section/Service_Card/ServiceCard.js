import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../Service_Card/style.css";

const ServiceCard = ({ title, description, image, altText }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#04192d",
        color: "#e0e1dd",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <img src={image} alt={altText} width={55} height={55} />
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Typography variant="body1" className="description">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
