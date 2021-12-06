import { Badge, makeStyles } from "@material-ui/core";
import React from "react";
import "./EasiestWay.css";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  shape: {
    backgroundColor: "white",
    width: 100,
    height: 100,
  },
  shapeCircle: {
    borderRadius: "50%",
  },
}));

const EasiestWay = () => {
  const classes = useStyles();
  const circle = (
    <div
      className={clsx(classes.shape, classes.shapeCircle)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://themographics.com/wordpress/service-providers/wp-content/uploads/2017/08/img-01-1.png" />
    </div>
  );

  const circle2 = (
    <div
      className={clsx(classes.shape, classes.shapeCircle)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://themographics.com/wordpress/service-providers/wp-content/uploads/2017/08/img-02-1.png" />
    </div>
  );

  const circle3 = (
    <div
      className={clsx(classes.shape, classes.shapeCircle)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://themographics.com/wordpress/service-providers/wp-content/uploads/2017/08/img-03-1.png" />
    </div>
  );

  const circle4 = (
    <div
      className={clsx(classes.shape, classes.shapeCircle)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://themographics.com/wordpress/service-providers/wp-content/uploads/2017/08/img-04-1.png" />
    </div>
  );
  return (
    <div className={"Easycontainer"}>
      <div className={"item"}>
        <h2 className={"Heading"}>Easiest Way to get Services</h2>
        <p className={"para"}>
          onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua enim adia minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip extea commodo consequat.
        </p>
      </div>

      <div className={"item2"}>
        <div className={"Categories"}>
          <div className={"badge"}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent="1"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              style={{ marginBottom: "10px" }}
            >
              {circle}
            </Badge>
            <span className={"spanHead"}>Plan Your Task</span>
            <span className={"fontStyleFaint"}>
              Adipisicing elit sed dotas eiusmod incididunt utia labore.
            </span>
          </div>
          <div className={"badge"}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent="2"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              style={{ marginBottom: "10px" }}
            >
              {circle2}
            </Badge>
            <span className={"spanHead"}>Plan Your Task</span>
            <span className={"fontStyleFaint"}>
              Adipisicing elit sed dotas eiusmod incididunt utia labore.
            </span>
          </div>
          <div className={"badge"}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent="3"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              style={{ marginBottom: "10px" }}
            >
              {circle3}
            </Badge>
            <span className={"spanHead"}>Plan Your Task</span>
            <span className={"fontStyleFaint"}>
              Adipisicing elit sed dotas eiusmod incididunt utia labore.
            </span>
          </div>
          <div className={"badge"}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent="4"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              style={{ marginBottom: "10px" }}
            >
              {circle4}
            </Badge>
            <span className={"spanHead"}>Plan Your Task</span>
            <span className={"fontStyleFaint"}>
              Adipisicing elit sed dotas eiusmod incididunt utia labore.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasiestWay;
