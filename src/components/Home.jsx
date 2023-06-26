import React from "react";
import Slider from "./Slider";
import Offers from "./Offers";
import Heading from "./Heading";
import Starproduct from "./Starproduct";
import HotAccessoriesMenu from "./HotAccessoriesMenu";
import HotAccessories from "./HotAccessories";
import data from "../data/data.json";

const Home = () => {

  console.log(data[0]);
  return (
    <div>
       <Slider />
      <Offers offer={data[0].offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct starProduct={data[0].starProduct} />
      <Heading text="HOT ASSESSORITES" /> 
      <HotAccessoriesMenu />
      <HotAccessories
        music={data[0].hotAccessories.music}
        musicCover={data[0].hotAccessoriesCover.music}
      />
      <HotAccessories
        smartDevice={data[0].hotAccessories.smartDevice}
        smartDeviceCover={data[0].hotAccessoriesCover.smartDevice}
      />
    </div>
  );
};

export default Home;
