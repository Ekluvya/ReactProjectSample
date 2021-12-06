import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import mobile from "../images/mobile.png";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    width: "100vw",
  },
  left: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
  },
  root: {
    width: "100vw",
  },
  right: {},

  Heading: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontWeight: "lighter",
    textDecoration: "none",
    fontSize: "2em",
    marginBottom: "10px",
  },
  para: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "80%",
    paddingBottom: "30px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#04bfa5",
    borderRadius: "0px",
    color: "white",
    width: "150px",
    textTransform: "none !important",
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    height: "50px",
    marginTop: theme.spacing(2),
  },
}));

const Refer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div>
          <h2 className={classes.Heading}>Refer and get free services</h2>
        </div>
        <div>
          <p className={classes.para}>
            Invite your friends to Listingo services.They get Rs.100 off. You
            win upto Rs. 5000
          </p>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Say Something..."
            variant="outlined"
          />
        </div>
        <div>
          <Button variant="contained" className={classes.button}>
            Send
          </Button>
        </div>
      </div>
      <img src={mobile} height="auto" width="25%" />
    </div>
  );
};

export default Refer;
