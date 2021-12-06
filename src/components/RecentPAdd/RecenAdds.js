import { Avatar, Link, makeStyles } from "@material-ui/core";
import React from "react";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
  },
  Heading: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontWeight: "lighter",
    textDecoration: "none",
    fontSize: "3em",
    marginBottom: "45px",
  },
  para: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "50%",
    paddingBottom: "35px",
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
    padding: "none",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "space-between",
    flexFlow: "column nowrap",
    height: "400px",
    width: "320px",
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.1)",
  },
  Cname: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "100%",
  },
  CardOptions: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    width: "100%",
    height: "40px",
    borderTop: "1px solid rgba(0,0,0,0.1)",
  },
  cardItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid rgba(0,0,0,0.1)",
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontSize: "14px",
    flexGrow: "1",
  },
}));

const RecenAdds = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <div className={classes.item}>
        <h2 className={classes.Heading}>Recent Posted Ads</h2>
        <p className={classes.para}>
          onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua enim adia minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip extea commodo consequat.
        </p>
      </div>
      <div className={classes.item2}>
        <div className={classes.Categories}>
          <div
            className={classes.Cname}
            style={{ height: "40%", backgroundColor: "grey" }}
          >
            <span
              style={{
                height: "10px",
                width: "auto",
                backgroundColor: "brown",
                color: "white",
                fontSize: "12px",
                padding: "5px",
                borderRadius: "5px",
                float: "left",
                marginLeft: "10px",
                marginTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Education Institute
            </span>
          </div>
          <div
            className={classes.Cname}
            style={{
              height: "45%",
              display: "flex",
              flexFlow: "column nowrap",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link>
                <h3 style={{ marginLeft: "20px", marginTop: "30px" }}>
                  10 Little Things to Achieve...
                </h3>
              </Link>
              <CheckCircleIcon
                style={{ fontSize: 14, color: "#55acee", marginTop: "30px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row nowrap",
                alignItems: "flex-start",
                marginLeft: "20px",
                marginTop: "17px",
              }}
            >
              <LocationOnOutlinedIcon />
              <span
                style={{
                  fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                1 Coronation Ave, George Green, Slough, Buckinghamshire SL3 6RF,
                UK
              </span>
            </div>
            <Link
              style={{
                marginLeft: "45px",
                fontSize: "14px",
                marginTop: "14px",
              }}
            >
              Get Directions
            </Link>
          </div>
          <div
            className={classes.Cname}
            style={{
              height: "15%",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Avatar style={{ marginLeft: "20px", marginRight: "10px" }}>
              H
            </Avatar>
            <div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.3)",
                }}
              >
                Posted By:
              </span>
              <span
                style={{
                  fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
                  fontSize: "14px",
                }}
              >
                Isabelle Nebelle
              </span>
            </div>
          </div>
          <div className={classes.CardOptions}>
            <div className={classes.cardItem}>
              <AccessAlarmsIcon
                style={{ fontSize: 20, marginRight: 8, color: "#55acee" }}
              />
              <span>Closed</span>
            </div>
            <div className={classes.cardItem}>
              <ShoppingCartIcon
                style={{ fontSize: 20, marginRight: 8, color: "#52de90" }}
              />
              <span>Closed</span>
            </div>
            <div className={classes.cardItem} style={{ border: "none" }}>
              <StarBorderIcon
                style={{ fontSize: 20, marginRight: 8, color: "#fdd003" }}
              />
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecenAdds;
