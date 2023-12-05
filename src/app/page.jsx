import React from "react";

//Material UI:
import { Container } from "@mui/material";

//Components:
import HomeSectionWelcome from "@/assets/components/home/HomeSectionWelcome";
import HomeSectionResources from "@/assets/components/home/HomeSectionResources";
import HomeSectionOurWork from "@/assets/components/home/HomeSectionOurWork";

function Home() {
  return (
    <>
      <HomeSectionWelcome />
      <HomeSectionResources />
      <HomeSectionOurWork />
    </>
  );
}

export default Home;
