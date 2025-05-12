import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const GuaranteesPage = () => {
  const guarantees = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Property Protection Guarantee",
      description: "We treat your property as if it were our own. Our comprehensive property management includes regular inspections and preventive maintenance to protect your investment."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Tenant Satisfaction Guarantee",
      description: "We carefully screen all tenants and provide 24/7 support to ensure high-quality, long-term tenants who will care for your property."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Timely Payment Guarantee",
      description: "Receive your rental income on time, every time. If we don't process your payment within the agreed timeframe, that month's management fee is free."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Guarantees" 
        description="We stand behind our service with industry-leading guarantees"
      />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-blue-800 text-center max-w-3xl mx-auto">
            These guarantees reflect our commitment to providing exceptional property management services. 
            We believe in transparency, reliability, and putting our clients' interests first. 
            If we ever fail to meet these guarantees, we'll make it right.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GuaranteesPage;