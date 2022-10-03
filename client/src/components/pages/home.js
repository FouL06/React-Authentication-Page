//Import React
import React from "react";

//Import Components
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import Homepage from "../content/homeContent";

//Display Login
const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
