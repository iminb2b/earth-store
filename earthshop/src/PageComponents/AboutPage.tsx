import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import PageSegment from "@/components/PageSegment";
import AboutPageMission from "@/components/AboutPage/AboutPageMission";
import HomePagePostCardBanner from "@/components/HomePage/HomePagePostCardBanner";

const AboutPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Earth Store - About US" description={"Nhung Nguyen"} />
      <AboutPageHero title="WHO ARE WE?" />
      <PageSegment>
        <AboutPageMission />
      </PageSegment>

      <HomePagePostCardBanner />
    </PageContainer>
  );
};

export default AboutPage;
