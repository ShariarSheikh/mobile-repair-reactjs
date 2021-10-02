import React from "react";
import Services from "./components/Services";
import BrandsWeRepair from "./components/BrandsWeRepair";
import Ourgadgets from './components/Ourgadgets'
import HeroTop from "./components/HeroTop";
import WhyUs from "./components/WhyUs";
import UsersReview from "./components/UsersReview";


const Home = () => {


  return (
    <div>
      <HeroTop />
      <BrandsWeRepair />
      <Services/>
      <Ourgadgets/>
      <WhyUs/>
      <UsersReview/>
    </div>
  );
};

export default Home;
