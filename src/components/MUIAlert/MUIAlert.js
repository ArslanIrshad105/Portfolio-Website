import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BasicAlerts = ({ show, setAlert, severity, alertTitle, alertbody }) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(false);
    setAlert(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: "0px" }}>
          <Stack sx={{ width: "100%", position: "relative" }} spacing={2}>
            <Alert
              severity={severity}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleClose}
                  style={{ position: "absolute", right: 0, top: 0 }}
                >
                  <CloseIcon fontSize="inherit" onClick={handleClose} />
                </IconButton>
              }
            >
              <AlertTitle>{alertTitle}</AlertTitle>
              {alertbody}
            </Alert>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BasicAlerts;
