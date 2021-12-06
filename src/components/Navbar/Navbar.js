import { Button, Link, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import imgLogo from "../images/logo-new.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  tglogo: {
    borderRight: 0,
    float: "none",
    display: "block",
    margin: 0,
    marginLeft: theme.spacing(2),
    overflow: "hidden",
    width: "185px",
  },
  logo: {
    marginLeft: theme.spacing(3),
  },
  Link: {
    color: "#767676",
    marginRight: theme.spacing(4),
    fontSize: 14,
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
  },
  button: {
    backgroundColor: "#04bfa5",
    borderRadius: "0px",
    color: "white",
    width: "150px",
    textTransform: "none !important",
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    height: "50px",
    right: 0,
  },
  Navbar: {
    margin: 0,
    display: "flex",
    flexFlow: "row nowrap",
    width: "100vw",
    height: "50px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RightPart: {
    display: "flex",
    alignItems: "center",
    height: "inherit",
    justifyContent: "space-between",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.Navbar}>
        <div>
          <strong className={classes.logo}>
            <Link href="../index.html">
              <img src={imgLogo} alt="ListinGo" />
            </Link>
          </strong>
        </div>
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
          <div>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<Person />}
            >
              Join Now
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
