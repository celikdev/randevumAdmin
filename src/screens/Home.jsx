import React from "react";
import { LeftBar } from "../components/main";
import { Container } from "../components/UI";

const Home = () => {
  return (
    <Container>
      <LeftBar page="" />
      <div className="pl-8 pt-8">
        <h1 className="text-textColor font-Montserrat font-semibold text-lg">
          Anasayfa
        </h1>
      </div>
    </Container>
  );
};

export default Home;
