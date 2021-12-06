import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";
import NavDown from "./NavDown";

const useStyles = makeStyles((theme) => ({
  Navdown: {
    width: "100vw",
    margin: "0",
    backgroundColor: "black",
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar></Navbar>
      <NavDown className={classes.Navdown}></NavDown>
    </>
  );
};

export default Index;
