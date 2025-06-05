import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/forDevelopers/Hero';
//import MarketOverview from '../components/forDevelopers/MarketOverview';
import PartnerBenefits from '../components/forDevelopers/PartnerBenefits';
import CaseStudies from '../components/forDevelopers/CaseStudies';
//import Technology from '../components/forDevelopers/Technology';
import PartnershipModels from '../components/forDevelopers/PartnershipModels';

const ForDevelopers: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <PartnerBenefits />
      <CaseStudies />
      <PartnershipModels />
    </Layout>
  );
};

export default ForDevelopers;