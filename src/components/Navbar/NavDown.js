import {
  Container,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "0.2em",
    marginLeft: "1.3em",
  },
}));
const NavDown = () => {
  const classes = useStyles();

  return (
    <div className={"Navcontainer"}>
      <TextField
        id="outlined-basic"
        label="Keyword"
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon></SearchIcon>,
        }}
        className={classes.button}
      />
      <TextField
        id="outlined-basic"
        label="Geolocation"
        variant="outlined"
        InputProps={{
          startAdornment: <LocationOnIcon></LocationOnIcon>,
        }}
        className={classes.button}
      />
      <TextField
        id="outlined-basic"
        label="CATEGORY"
        variant="outlined"
        className={classes.button}
      />
    </div>
  );
};

export default NavDown;
