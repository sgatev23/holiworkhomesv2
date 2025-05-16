import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { ShieldCheck, SmilePlus, Coins, Home, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GuaranteesPage = () => {
  const { t } = useTranslation();

  const guarantees = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: t('guarantees.damage.title'),
      description: t('guarantees.damage.description'),
    },
    {
      icon: <SmilePlus className="w-12 h-12 text-primary" />,
      title: t('guarantees.happiness.title'),
      description: t('guarantees.happiness.description'),
    },
    {
      icon: <Coins className="w-12 h-12 text-primary" />,
      title: t('guarantees.income.title'),
      description: t('guarantees.income.description'),
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: t('guarantees.guest.title'),
      description: t('guarantees.guest.description'),
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-primary" />,
      title: t('guarantees.fees.title'),
      description: t('guarantees.fees.description'),
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('guarantees.pageTitle')}
        description={t('guarantees.pageSubtitle')}
        bgImage="https://images.pexels.com/photos/1123995/pexels-photo-1123995.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="bg-[#f3f5f8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#815159] mb-12">
            {t('guarantees.sectionTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 transition-transform hover:scale-[1.02] flex flex-col items-center text-center"
              >
                <div className="mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-semibold text-[#815159] mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-[#fff8e1] rounded-xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold text-[#815159] mb-4">
              {t('guarantees.bottomTitle')}
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t('guarantees.bottomDescription')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default GuaranteesPage;
