import React from "react";

import {
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from '../gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title="jpinedev Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Projects" sources={['blog']} />
        <ContactSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Interests" />
      </Page>
    </>
  );
}
