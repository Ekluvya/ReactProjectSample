import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles((theme) => ({
  Carousel: {
    width: "100vw",
    height: "250px",
    margin: 0,
    display: "block",
  },
  itm: {
    height: "250px",
    width: "100%",
    textAlign: "center",
    fontSize: "50px",
    backgroundColor: "violet",
    color: "white",
  },
}));

const CarouselComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.Carousel}>
      <Carousel
        itemsToShow={1}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={2000}
      >
        <div className={classes.itm}>
          <img
            src="https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1611300239.jpg"
            width="100%"
            height="auto"
            alt="offer3"
          />
        </div>
        <div className={classes.itm}>
          <img
            src="https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1610007148.jpg"
            width="100%"
            height="auto"
            alt="offer3"
          />
        </div>
        <div className={classes.itm}>
          <img
            src="https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1581428272.jpg"
            width="100%"
            height="auto"
            alt="offer3"
          />
        </div>
        <div className={classes.itm}>
          <img
            src="https://d2vj71og9gdu4k.cloudfront.net/WEB/banners/1581428272.jpg"
            width="100%"
            height="auto"
            alt="offer3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
