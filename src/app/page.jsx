import React from "react";

//Components:
import HomeSectionWelcome from "@/assets/components/home/HomeSectionWelcome";
import HomeSectionResources from "@/assets/components/home/HomeSectionResources";
import HomeSectionOrigin from "@/assets/components/home/HomeSectionOrigin";
import HomeSectionOurWork from "@/assets/components/home/HomeSectionOurWork";
import HomeSectionVideos from "@/assets/components/home/HomeSectionVideos";
import HomeSectionCommunity from "@/assets/components/home/HomeSectionCommunity";


function Home() {
  return (
    <>
      <HomeSectionWelcome />
      <HomeSectionResources />
      <HomeSectionOrigin />
      <HomeSectionOurWork />
      <HomeSectionVideos />
      <HomeSectionCommunity />
    </>
  );
}

export default Home;
