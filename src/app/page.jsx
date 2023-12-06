import React from "react";

//Material UI:
import { Container } from "@mui/material";

//Components:
import HomeSectionWelcome from "@/assets/components/home/HomeSectionWelcome";
import HomeSectionResources from "@/assets/components/home/HomeSectionResources";
import HomeSectionOurWork from "@/assets/components/home/HomeSectionOurWork";
import HomeSectionVideos from "@/assets/components/home/HomeSectionVideos";
import HomeSectionCommunity from "@/assets/components/home/HomeSectionCommunity";

function Home() {
  return (
    <>
      <HomeSectionWelcome />
      <HomeSectionResources />
      <HomeSectionOurWork />
      <HomeSectionVideos />
      <HomeSectionCommunity />
    </>
  );
}

export default Home;
