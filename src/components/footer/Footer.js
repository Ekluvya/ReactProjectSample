import { Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#04bfa5",
    height: "50px",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Link: {
    color: "white",
    marginRight: theme.spacing(4),
    fontSize: 14,
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.RightPart}>
        <div>
          <Link href="../index.html" className={classes.Link}>
            Home
          </Link>
          <Link href="../index.html" className={classes.Link}>
            About
          </Link>
          <Link href="../index.html" className={classes.Link}>
            Explore
          </Link>
          <Link href="../index.html" className={classes.Link}>
            Provider's Page
          </Link>
          <Link href="../index.html" className={classes.Link}>
            Jobs
          </Link>
          <Link href="../index.html" className={classes.Link}>
            Pages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
