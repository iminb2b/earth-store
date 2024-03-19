import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import PageSegment from "@/components/PageSegment";
import ContactPageContent from "@/components/ContactPage/ContactPageContent";

const ContactPage: NextPage = () => {
  console.log("skdj");

  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - Contact Us"
        description={"Earth Store - Contact Us"}
      />
      <AboutPageHero title="Contact US" />
      <PageSegment>
        <ContactPageContent />
      </PageSegment>
    </PageContainer>
  );
};

export default ContactPage;
