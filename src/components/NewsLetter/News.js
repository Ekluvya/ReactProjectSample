import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

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
    fontFamily: "'Open Sans',Arial,Helvetica,sans-serif",
    fontSize: "14px",
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

    justifyContent: "space-around",
    margin: "auto",
  },
  button: {
    width: "500px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: "red",
  },
  media: {
    height: 250,
    width: 250,
  },
  card: {
    width: "250px",
  },
}));

const News = () => {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <div className={classes.item}>
        <h2 className={classes.Heading}>News Articles & Tips</h2>
        <p className={classes.para}>
          onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua enim adia minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip extea commodo consequat.
        </p>
      </div>
      <div className={classes.item2}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/7670036/pexels-photo-7670036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h6" className={classes.item}>
                2 things you must know about health
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.button}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/7670036/pexels-photo-7670036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h6" className={classes.item}>
                2 things you must know about health
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.button}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/7670036/pexels-photo-7670036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h6" className={classes.item}>
                2 things you must know about health
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.button}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/7670036/pexels-photo-7670036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h6" className={classes.item}>
                2 things you must know about health
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.button}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default News;
