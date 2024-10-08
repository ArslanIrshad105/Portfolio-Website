import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#04192d",
    color: "#e0e1dd",
    padding: theme.spacing(2),
    borderRadius: "8px",

    textAlign: "center",

    boxShadow: "0 2px 2px 0 #1e90ff, 0 2px 10px 0 #1e90ff",
  },
  icon: {
    fontSize: "48px",
    color: "#00adb5",
    marginBottom: theme.spacing(2),
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: "16px",
    color: "#fff",
  },
}));

const ServiceCard = ({ title, description, image, altText }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <img src={image} alt={altText} width={55} height={55} />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
