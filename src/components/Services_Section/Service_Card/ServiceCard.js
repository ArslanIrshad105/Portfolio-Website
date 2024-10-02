import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: "#0d1b2a",
    backgroundColor: "#04192d",
    color: "#e0e1dd",
    padding: theme.spacing(2),
    borderRadius: "8px",
    border: "2px solid #0085ff",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "48px",
    color: "#00adb5",
    marginBottom: theme.spacing(2),
  },
  title: {
    // color: "#00adb5",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: "14px",
    color: "#b8c1ec",
  },
}));

const ServiceCard = ({ title, description, IconComponent }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <IconComponent className={classes.icon} />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
