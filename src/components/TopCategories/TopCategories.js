import { makeStyles } from "@material-ui/core";
import React from "react";
import TrainIcon from "@material-ui/icons/Train";
import BookIcon from "@material-ui/icons/Book";
import GroupIcon from "@material-ui/icons/Group";
import PetsIcon from "@material-ui/icons/Pets";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: "50px",
    marginTop: theme.spacing(5),
    // backgroundColor: "black",
    width: "100vw",
  },
  item: {
    // color: "white",
    textAlign: "center",
  },
  Heading: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontWeight: "lighter",
    textDecoration: "none",
    fontSize: "3em",
    marginBottom: "35px",
  },
  para: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "50%",
    paddingBottom: "80px",
    margin: "auto",
    fontSize: "14px",
  },
  item2: {
    //  color: "white",
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    alignItems: "center",

    justifyContent: "center",
    margin: "auto",
  },
  Categories: {
    // color: "white",
    padding: "10px 0",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column nowrap",
    height: "100px",
    width: "200px",
    textAlign: "center",
    borderRight: "1px solid #767676",
  },
  Cname: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "150px",
  },
}));

const TopCategories = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <div className={classes.item}>
        <h2 className={classes.Heading}>Popular Categories</h2>
        <p className={classes.para}>
          onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua enim adia minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip extea commodo consequat.
        </p>
      </div>
      <div className={classes.item2}>
        <div className={classes.Categories}>
          <div>
            <TrainIcon></TrainIcon>
          </div>
          <div className={classes.Cname}>Transportation & Travel</div>
        </div>
        <div className={classes.Categories}>
          <div>
            <BookIcon></BookIcon>
          </div>
          <div className={classes.Cname}>Training & Education</div>
        </div>
        <div className={classes.Categories}>
          <div>
            <PetsIcon></PetsIcon>
          </div>
          <div className={classes.Cname}>Petcare</div>
        </div>
        <div className={classes.Categories}>
          <div>
            <GroupIcon></GroupIcon>
          </div>
          <div className={classes.Cname}>General Labour</div>
        </div>
        <div className={classes.Categories}>
          <div>
            <AirportShuttleIcon></AirportShuttleIcon>
          </div>
          <div className={classes.Cname}>Construction & Renovation</div>
        </div>
        <div className={classes.Categories}>
          <div>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
          <div className={classes.Cname}>View All</div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
