import Index from "./components/Navbar/Index";
import CarouselComp from "./components/Carousel/CarouselComp";
import TopCategories from "./components/TopCategories/TopCategories";
import { makeStyles } from "@material-ui/core";
import Offers from "./components/Offers/Offers";
import Customer from "./components/Customer/Customer";
import News from "./components/NewsLetter/News";
import Refer from "./components/Refer/Refer";
import Footer from "./components/footer/Footer";
import RecenAdds from "./components/RecentPAdd/RecenAdds";
import EasiestWay from "./components/EasiestWay/EasiestWay";

const useStyles = makeStyles((theme) => ({
  Con: {
    overflowX: "hidden",
  },
}));
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.Con}>
      <Index></Index>
      <CarouselComp> </CarouselComp>
      <TopCategories></TopCategories>
      <RecenAdds />
      <Offers></Offers>
      <EasiestWay />
      <Customer></Customer>
      <News />
      <Refer />
      <Footer />
    </div>
  );
};

export default App;
