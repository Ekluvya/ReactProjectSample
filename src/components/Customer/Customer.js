import React from "react";
import { makeStyles } from "@material-ui/core";
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
    marginBottom: "25px",
  },
  para: {
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    width: "50%",
    paddingBottom: "30px",
    margin: "auto",
    fontSize: "14px",
  },
}));

const Customer = () => {
  const classes = useStyles();

  return (
    <div className={classes.CC}>
      <h2 className={classes.Heading}>Happiness Guarantee</h2>
      <p className={classes.para}>
        onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua enim adia minim veniam quis nostrud exercitation
        ullamco laboris nisi ut aliquip extea commodo consequat.
      </p>
      <div className={classes.Carousel}>
        <Carousel itemsToShow={3} enableAutoPlay={true} autoPlaySpeed={2000}>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_387cb130.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3bbf0af0.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3eaa4400.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_387cb130.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_387cb130.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
          <div className={classes.itm}>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_411eed80.png"
              width="300px"
              height="auto"
              alt="offer3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Customer;
