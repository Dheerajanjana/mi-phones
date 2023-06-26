import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import Starproduct from "./components/Starproduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HotAccessories from "./components/HotAccessories";
import data from "../src/data/data.json";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navmenu from "./components/Navmenu";
// import NavOptions from "./components/NavOptions.jsx"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
         
       {/* <NavOptions miPhones={data[0].miPhones} redmiPhones={data[0].redmiPhones} 
       tv={data[0].tv} laptop={data[0].laptop} fitnessAndLifeStyle={data[0].fitnessAndLifeStyle} 
       home={data[0].home} audio={data[0].audio}  accessories={data[0].accessories}/> */}
        
      <Slider />
      <Offers offer={data[0].offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct starProduct={data[0].starProduct} />
      <Heading text="HOT ASSESSORITES" />
      <HotAccessoriesMenu />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        
        <Route
          exact path="musicStore"
          element={
            <HotAccessories
              music={data[0].hotAccessories.music}
              musicCover={data[0].hotAccessoriesCover.music}
            />
          }
        ></Route>

        <Route
          exact
          path="SmartDevice"
          element={
            <HotAccessories
              music={data[0].hotAccessories.smartDevice}
              musicCover={data[0].hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>

        <Route
          exact
          path="home"
          element={
            <HotAccessories
              music={data[0].hotAccessories.home}
              musicCover={data[0].hotAccessoriesCover.home}
            />
          }
        ></Route>

        <Route
          exact
          path="lifestyle"
          element={
            <HotAccessories
              music={data[0].hotAccessories.lifeStyle}
              musicCover={data[0].hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>

        <Route
          exact
          path="mobileAccessories"
          element={
            <HotAccessories
              music={data[0].hotAccessories.mobileAccessories}
              musicCover={data[0].hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data[0].productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data[0].videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data[0].banner} />
      <Footer footer={data[0].footer} />
    </Router>
  );
}

export default App;
