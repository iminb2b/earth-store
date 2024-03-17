import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />
    </PageContainer>
  );
};

export default HomePage;
