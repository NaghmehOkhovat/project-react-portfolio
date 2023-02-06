import React from 'react';
import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Technologies from 'components/Technologies';
import FeaturedProjects from 'components/FeaturedProjects';
import Articles from 'components/Articles';
import Skills from 'components/Skills';
import More from 'components/More';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Technologies />
      <FeaturedProjects />
      <Articles />
      <Skills />
      <More />
      <Footer />
    </>
  );
};