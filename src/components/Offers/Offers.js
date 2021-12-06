import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles((theme) => ({
  Carousel: {
    width: "90%",
    height: "auto",
    margin: 0,
    display: "block",
  },
  itm: {
    width: "400px",
    textAlign: "center",
    color: "white",
  },
  CC: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontWeight: "lighter",
    textDecoration: "none",
    fontSize: "3em",
    marginBottom: "35px",
  },
}));

const Offers = () => {
  const classes = useStyles();
  return (
    <div className={classes.CC}>
      <h2 className={classes.Heading}>Offers</h2>
      <div className={classes.Carousel}>
        <Carousel
          itemsToShow={3}
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className={classes.itm}>
            <img
              src="https://d2vj71og9gdu4k.cloudfront.net/WEB/mrz/1594200168.jpg"
              width="400px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://d2vj71og9gdu4k.cloudfront.net/WEB/mrz/1594200362.jpg"
              width="400px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://d2vj71og9gdu4k.cloudfront.net/WEB/mrz/1594200489.jpg"
              width="400px"
              height="auto"
              alt="offer3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Offers;
